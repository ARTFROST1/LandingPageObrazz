# FAQ — Часто задаваемые вопросы

## Общие вопросы

### Что такое OBRAZZ?

OBRAZZ — это iOS приложение с AI-помощником для персонального гардероба. Лендинг-страница представляет это приложение потенциальным пользователям.

### Какие технологии используются?

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Анимации**: Framer Motion
- **UI**: Shadcn/ui
- **Backend**: Express.js
- **База данных**: PostgreSQL (Neon) + Drizzle ORM

---

## Разработка

### Как запустить проект локально?

```bash
npm install
npm run dev
```

Приложение будет доступно на http://localhost:5000

### Как добавить новую секцию?

1. Создайте компонент в `client/src/components/landing/`
2. Добавьте его в `pages/home.tsx`
3. Следуйте структуре существующих секций

Подробнее: [DEVELOPMENT.md](./Docs/DEVELOPMENT.md)

### Как добавить UI компонент?

```bash
npx shadcn@latest add button
```

### Почему не работает HMR?

Попробуйте:
1. Перезапустить dev сервер (`npm run dev`)
2. Очистить кэш браузера
3. Удалить `node_modules` и переустановить

---

## Стилизация

### Как изменить цвета?

Цвета определены в `client/src/index.css` через CSS переменные:

```css
:root {
  --primary: 0 0% 9%;
  --background: 0 0% 100%;
}
```

### Как добавить кастомный класс Tailwind?

Добавьте в `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      custom: "#ff0000",
    },
  },
}
```

---

## Деплой

### Где можно задеплоить?

- Replit (проект уже настроен)
- Railway
- Vercel
- Docker
- VPS

Подробнее: [DEPLOYMENT.md](./Docs/DEPLOYMENT.md)

### Как сделать production сборку?

```bash
npm run build
npm run start
```

---

## Проблемы

### TypeScript ошибки

```bash
npm run check
```

Исправьте все ошибки перед коммитом.

### Ошибка при установке зависимостей

```bash
rm -rf node_modules package-lock.json
npm install
```

### База данных не подключается

1. Проверьте `DATABASE_URL` в `.env`
2. Убедитесь, что база данных доступна
3. Примените схему: `npm run db:push`

---

## Контакты

- Email: team@obrazz.app
- GitHub Issues: [репозиторий]/issues
