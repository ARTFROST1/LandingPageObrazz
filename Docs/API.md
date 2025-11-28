# API Documentation

Документация серверного API OBRAZZ Landing Page.

---

## Обзор

Сервер построен на Express.js и предоставляет:
- API endpoints под префиксом `/api`
- Статические файлы (в production)
- Vite dev server (в development)

**Base URL**: `http://localhost:5000`

---

## Архитектура сервера

```
┌─────────────────────────────────────────────────┐
│                 Express.js                       │
├─────────────────────────────────────────────────┤
│  Middleware                                      │
│  ├── JSON parser                                │
│  ├── URL encoded parser                         │
│  ├── Request logger                             │
│  └── Error handler                              │
├─────────────────────────────────────────────────┤
│  Routes                                          │
│  ├── /api/*        → API routes                 │
│  └── /*            → Static/Vite                │
└─────────────────────────────────────────────────┘
```

---

## Конфигурация

### Переменные окружения

| Переменная | Тип | Default | Описание |
|------------|-----|---------|----------|
| `PORT` | number | `5000` | Порт сервера |
| `NODE_ENV` | string | `development` | Режим работы |
| `DATABASE_URL` | string | — | PostgreSQL connection string |

### Пример .env

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://user:pass@host:5432/obrazz
```

---

## API Endpoints

> **Примечание**: Текущая версия лендинга не использует API endpoints активно. Ниже описана подготовленная инфраструктура.

### Health Check

```http
GET /api/health
```

**Response**:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

---

## Data Storage

### Интерфейс IStorage

```typescript
interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}
```

### Реализации

#### MemStorage (In-Memory)

Используется по умолчанию. Данные хранятся в памяти.

```typescript
const storage = new MemStorage();

// Создание пользователя
const user = await storage.createUser({
  username: "john",
  password: "hashedPassword"
});

// Получение по ID
const user = await storage.getUser("uuid-here");

// Получение по username
const user = await storage.getUserByUsername("john");
```

#### DatabaseStorage (PostgreSQL)

Может быть реализован для production:

```typescript
class DatabaseStorage implements IStorage {
  private db: NeonDatabase;
  
  async getUser(id: string) {
    return await this.db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
  }
  // ...
}
```

---

## Database Schema

### Users Table

```typescript
export const users = pgTable("users", {
  id: varchar("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});
```

### Типы

```typescript
// Insert type (для создания)
type InsertUser = {
  username: string;
  password: string;
};

// Select type (для чтения)
type User = {
  id: string;
  username: string;
  password: string;
};
```

### Zod Validation

```typescript
import { insertUserSchema } from "@shared/schema";

// Валидация входных данных
const result = insertUserSchema.safeParse(input);

if (!result.success) {
  // Обработка ошибок валидации
  console.error(result.error);
}
```

---

## Middleware

### JSON Parser

```typescript
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  },
}));
```

Сохраняет raw body для webhook'ов.

### Request Logger

Логирует все `/api` запросы:

```
10:30:45 AM [express] GET /api/health 200 in 5ms
```

Формат: `TIME [source] METHOD PATH STATUS in DURATIONms`

### Error Handler

```typescript
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  
  res.status(status).json({ message });
});
```

---

## Development vs Production

### Development Mode

```typescript
if (process.env.NODE_ENV !== "production") {
  const { setupVite } = await import("./vite");
  await setupVite(httpServer, app);
}
```

- Vite dev server с HMR
- Source maps
- Hot module replacement

### Production Mode

```typescript
if (process.env.NODE_ENV === "production") {
  serveStatic(app);
}
```

- Статические файлы из `dist/public`
- Gzip compression (рекомендуется добавить)
- Cache headers

---

## Расширение API

### Добавление нового endpoint

1. Откройте `server/routes.ts`

2. Добавьте route:

```typescript
export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Пример: получение пользователя
  app.get("/api/users/:id", async (req, res) => {
    const user = await storage.getUser(req.params.id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    res.json(user);
  });

  // Пример: создание пользователя
  app.post("/api/users", async (req, res) => {
    const result = insertUserSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({ 
        message: "Validation error",
        errors: result.error.errors 
      });
    }
    
    const user = await storage.createUser(result.data);
    res.status(201).json(user);
  });

  return httpServer;
}
```

### Добавление middleware

```typescript
// Rate limiting
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // 100 запросов
});

app.use("/api", limiter);
```

---

## Клиентская интеграция

### TanStack Query

```typescript
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

// GET запрос
function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => fetch(`/api/users/${id}`).then(r => r.json()),
  });
}

// POST запрос
function useCreateUser() {
  return useMutation({
    mutationFn: (data: InsertUser) => 
      fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(r => r.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
```

---

## Безопасность

### Рекомендации

1. **Аутентификация**: Используйте Passport.js (уже установлен)
2. **HTTPS**: Настройте в production
3. **CORS**: Ограничьте origins
4. **Helmet**: Добавьте security headers
5. **Rate Limiting**: Защита от DDoS

### Пример с Passport

```typescript
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

passport.use(new LocalStrategy(
  async (username, password, done) => {
    const user = await storage.getUserByUsername(username);
    if (!user) return done(null, false);
    // Проверка пароля...
    return done(null, user);
  }
));
```

---

## Тестирование API

### cURL примеры

```bash
# Health check
curl http://localhost:5000/api/health

# Создание пользователя
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"username":"test","password":"secret"}'

# Получение пользователя
curl http://localhost:5000/api/users/uuid-here
```

### HTTP файлы (для VS Code REST Client)

```http
### Health Check
GET http://localhost:5000/api/health

### Create User
POST http://localhost:5000/api/users
Content-Type: application/json

{
  "username": "test",
  "password": "secret"
}
```
