# Руководство по деплою

Инструкции по развёртыванию OBRAZZ Landing Page в production.

---

## Содержание

1. [Подготовка к деплою](#подготовка-к-деплою)
2. [Сборка проекта](#сборка-проекта)
3. [Варианты деплоя](#варианты-деплоя)
4. [Настройка окружения](#настройка-окружения)
5. [Мониторинг](#мониторинг)

---

## Подготовка к деплою

### Чек-лист

- [ ] Все TypeScript ошибки исправлены (`npm run check`)
- [ ] Production переменные окружения настроены
- [ ] База данных создана и доступна
- [ ] Домен и SSL сертификат готовы

### Переменные окружения

Создайте `.env.production`:

```env
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://user:password@host:5432/obrazz
```

---

## Сборка проекта

### Команды сборки

```bash
# Сборка клиента и сервера
npm run build

# Структура после сборки
dist/
├── index.cjs       # Собранный сервер
└── public/         # Собранный клиент
    ├── index.html
    └── assets/
        ├── index-[hash].js
        └── index-[hash].css
```

### Процесс сборки

1. **Vite** собирает клиент в `dist/public`
2. **esbuild** собирает сервер в `dist/index.cjs`

### Запуск production

```bash
# Локальная проверка
npm run start
```

---

## Варианты деплоя

### 1. Replit

Проект уже настроен для Replit.

```bash
# Автоматический деплой при push
# Или ручной через Replit UI
```

### 2. Railway

```bash
# Установите Railway CLI
npm install -g @railway/cli

# Логин
railway login

# Создание проекта
railway init

# Деплой
railway up
```

**railway.json:**
```json
{
  "build": {
    "builder": "nixpacks",
    "buildCommand": "npm run build"
  },
  "deploy": {
    "startCommand": "npm run start",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

### 3. Vercel

> Примечание: Требуется адаптация, так как проект использует Express.

```bash
# Установка Vercel CLI
npm install -g vercel

# Деплой
vercel
```

**vercel.json:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/index.cjs",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/index.cjs"
    }
  ]
}
```

### 4. Docker

**Dockerfile:**
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --production
EXPOSE 5000
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
    restart: unless-stopped
```

**Команды:**
```bash
# Сборка образа
docker build -t obrazz-landing .

# Запуск контейнера
docker run -p 5000:5000 -d obrazz-landing

# С docker-compose
docker-compose up -d
```

### 5. VPS (ручной деплой)

```bash
# На сервере
ssh user@your-server

# Клонирование
git clone <repo-url>
cd obrazz-landing

# Установка зависимостей
npm ci

# Сборка
npm run build

# Запуск с PM2
npm install -g pm2
pm2 start dist/index.cjs --name obrazz
pm2 save
pm2 startup
```

**Nginx конфигурация:**
```nginx
server {
    listen 80;
    server_name obrazz.app;
    
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Настройка окружения

### База данных (Neon PostgreSQL)

1. Создайте аккаунт на [neon.tech](https://neon.tech)
2. Создайте новый проект
3. Скопируйте connection string:

```env
DATABASE_URL=postgresql://user:pass@host.neon.tech:5432/neondb?sslmode=require
```

4. Примените схему:
```bash
npm run db:push
```

### SSL/HTTPS

#### Let's Encrypt с Certbot

```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx

# Получение сертификата
sudo certbot --nginx -d obrazz.app

# Автообновление
sudo certbot renew --dry-run
```

### CDN (опционально)

Для статических файлов рекомендуется использовать CDN:

- **Cloudflare** (бесплатный план)
- **AWS CloudFront**
- **Vercel Edge Network**

---

## Мониторинг

### Health Check

```bash
# Проверка работоспособности
curl https://obrazz.app/api/health
```

### PM2 мониторинг

```bash
# Статус процессов
pm2 status

# Логи
pm2 logs obrazz

# Мониторинг в реальном времени
pm2 monit
```

### Логирование

Сервер логирует все `/api` запросы:

```
10:30:45 AM [express] GET /api/health 200 in 5ms
```

Для production рекомендуется:
- **Winston** для структурированных логов
- **Sentry** для отслеживания ошибок

---

## Откат

### Git-based откат

```bash
# Найти предыдущий рабочий коммит
git log --oneline

# Откат к коммиту
git checkout <commit-hash>
npm run build
npm run start
```

### Docker откат

```bash
# Список образов
docker images

# Запуск предыдущей версии
docker run -p 5000:5000 obrazz-landing:<previous-tag>
```

---

## Performance оптимизации

### Сжатие

Добавьте compression middleware:

```typescript
import compression from "compression";
app.use(compression());
```

### Кэширование

Настройте cache headers:

```typescript
app.use("/assets", express.static("dist/public/assets", {
  maxAge: "1y",
  immutable: true,
}));
```

### Gzip/Brotli

Nginx конфигурация:

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
gzip_min_length 1000;

brotli on;
brotli_types text/plain text/css application/json application/javascript;
```

---

## Troubleshooting

### Порт уже занят

```bash
# Найти процесс
lsof -i :5000

# Убить процесс
kill -9 <PID>
```

### База данных недоступна

```bash
# Проверка подключения
psql $DATABASE_URL -c "SELECT 1"
```

### Ошибки сборки

```bash
# Очистка кэша
rm -rf node_modules dist
npm install
npm run build
```

---

## Автоматизация (CI/CD)

### GitHub Actions

**.github/workflows/deploy.yml:**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type check
        run: npm run check
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Railway
        uses: bervProject/railway-deploy@main
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
```

---

## Контакты поддержки

При проблемах с деплоем обращайтесь:
- Email: team@obrazz.app
- GitHub Issues: [repository]/issues
