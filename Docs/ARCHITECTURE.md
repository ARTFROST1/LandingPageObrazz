# Архитектура OBRAZZ Landing Page

Данный документ описывает архитектурные решения, паттерны и принципы, используемые в проекте.

## Обзор

OBRAZZ Landing Page — это full-stack веб-приложение, построенное по принципу **монорепозитория** с единым сервером, обслуживающим как API, так и статические файлы.

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Express.js Server                         │
│  ┌────────────────────┐  ┌────────────────────────────────┐ │
│  │   API Routes       │  │   Static Files (Vite build)    │ │
│  │   /api/*           │  │   /assets/*, index.html        │ │
│  └────────────────────┘  └────────────────────────────────┘ │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    PostgreSQL (Neon)                         │
│                    via Drizzle ORM                           │
└─────────────────────────────────────────────────────────────┘
```

---

## Архитектурные слои

### 1. Presentation Layer (Client)

**Технологии**: React 18, TypeScript, Tailwind CSS

**Ответственность**:
- Рендеринг UI
- Управление состоянием на клиенте
- Обработка пользовательского ввода
- Анимации и переходы

**Паттерны**:
- **Component-Based Architecture** — UI разбит на переиспользуемые компоненты
- **Composition over Inheritance** — компоненты комбинируются, а не наследуются
- **Declarative UI** — описание UI через JSX

### 2. Routing Layer

**Технологии**: Wouter (client), Express Router (server)

**Client Routing**:
```tsx
<Switch>
  <Route path="/" component={Home} />
  <Route component={NotFound} />
</Switch>
```

**Server Routing**:
```typescript
// Все API маршруты под префиксом /api
app.use('/api', apiRouter);
```

### 3. State Management Layer

**Технологии**: TanStack Query (React Query)

**Особенности**:
- Кэширование запросов
- Автоматическая инвалидация
- Optimistic updates
- Retry logic

```typescript
// Конфигурация QueryClient
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 минут
      retry: 3,
    },
  },
});
```

### 4. API Layer (Server)

**Технологии**: Express.js, TypeScript

**Структура**:
```
server/
├── index.ts      # Entry point, middleware setup
├── routes.ts     # Route registration
├── storage.ts    # Data access layer
└── static.ts     # Static file serving
```

### 5. Data Layer

**Технологии**: Drizzle ORM, Neon PostgreSQL, Zod

**Паттерны**:
- **Repository Pattern** — `IStorage` интерфейс абстрагирует доступ к данным
- **Schema-First** — схема БД определяет TypeScript типы

```typescript
// Drizzle схема
export const users = pgTable("users", {
  id: varchar("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Zod валидация
export const insertUserSchema = createInsertSchema(users);
```

---

## Архитектура клиента

### Компонентная иерархия

```
App
├── QueryClientProvider    # Провайдер React Query
├── TooltipProvider        # Провайдер тултипов
├── Toaster               # Компонент уведомлений
└── Router
    ├── Home              # Главная страница
    │   ├── HeroSection
    │   ├── ProblemSolutionSection
    │   ├── AppDemoSection
    │   ├── BenefitsSection
    │   ├── HowItWorksSection
    │   ├── SocialFeedSection
    │   ├── PricingSection
    │   ├── CTASection
    │   └── Footer
    └── NotFound          # 404 страница
```

### Типы компонентов

1. **Page Components** (`pages/`)
   - Отвечают за композицию секций
   - Управляют данными страницы
   - Обрабатывают route параметры

2. **Section Components** (`components/landing/`)
   - Самодостаточные секции лендинга
   - Содержат собственную логику анимаций
   - Responsive по умолчанию

3. **UI Components** (`components/ui/`)
   - Атомарные, переиспользуемые
   - Не содержат бизнес-логики
   - Кастомизируются через props

---

## Архитектура сервера

### Request/Response Flow

```
Request
   │
   ▼
┌──────────────────┐
│  JSON Parser     │  ← express.json()
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  URL Encoder     │  ← express.urlencoded()
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Logger          │  ← Custom logging middleware
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  API Routes      │  ← /api/* routes
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Static/Vite     │  ← Static files or Vite dev server
└────────┬─────────┘
         │
         ▼
Response
```

### Режимы работы

**Development**:
- Vite dev server с HMR
- Source maps включены
- Hot reload для клиента и сервера

**Production**:
- Статические файлы из `dist/public`
- Минифицированный бандл
- Оптимизированная сборка

---

## Стилевая архитектура

### CSS Custom Properties

Тема определяется через CSS переменные:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --primary: 0 0% 9%;
  --muted: 0 0% 94.5%;
  /* ... */
}
```

### Tailwind CSS

Используется утилитарный подход:

```tsx
<div className="px-6 lg:px-12 py-section bg-background">
  <h1 className="text-5xl font-bold text-foreground">
    {/* ... */}
  </h1>
</div>
```

### Компоненты CVA

Компоненты используют `class-variance-authority` для вариантов:

```typescript
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input bg-background",
      },
      size: {
        default: "h-10 px-4 py-2",
        lg: "h-11 px-8",
      },
    },
  }
);
```

---

## Анимации

### Framer Motion

Все секции используют scroll-triggered анимации:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Паттерны анимаций

1. **Fade In Up** — появление снизу с затуханием
2. **Stagger** — последовательная анимация элементов списка
3. **Auto-scroll** — автоматическая прокрутка в mockup'ах

---

## Производительность

### Оптимизации

1. **Code Splitting** — lazy loading страниц (при необходимости)
2. **Tree Shaking** — Vite удаляет неиспользуемый код
3. **CSS Purging** — Tailwind удаляет неиспользуемые стили
4. **Asset Optimization** — сжатие изображений, шрифтов

### Bundle Size

Целевые показатели:
- Initial JS: < 200KB (gzipped)
- CSS: < 50KB (gzipped)
- LCP: < 2.5s
- FID: < 100ms

---

## Безопасность

### Frontend

- Нет хранения секретов в клиентском коде
- XSS защита через React DOM escaping
- CSP headers (настраиваются на сервере)

### Backend

- Input validation через Zod
- SQL injection защита через Drizzle ORM
- Rate limiting (может быть добавлен)
- CORS настройка

---

## Расширяемость

### Добавление новой секции

1. Создать компонент в `client/src/components/landing/`
2. Добавить в `pages/home.tsx`
3. Опционально: добавить якорную навигацию

### Добавление API endpoint

1. Добавить route в `server/routes.ts`
2. Добавить метод в `IStorage` интерфейс
3. Реализовать в `MemStorage` или `DatabaseStorage`

### Добавление UI компонента

1. Использовать `npx shadcn@latest add <component>`
2. Компонент появится в `client/src/components/ui/`
3. Кастомизировать при необходимости

---

## Диаграмма зависимостей модулей

```
client/src/
│
├── main.tsx ─────────────┐
│                         │
├── App.tsx ◄─────────────┤
│   │                     │
│   ├── lib/queryClient   │
│   │                     │
│   ├── components/ui/────┼─── @radix-ui/*
│   │                     │    class-variance-authority
│   │                     │    tailwind-merge
│   │                     │
│   └── pages/home ◄──────┘
│       │
│       └── components/landing/* ───── framer-motion
│                                      lucide-react
│                                      react-icons
```
