# OBRAZZ Landing Page

> Проект в текущем виде — **Next.js 15 (App Router)** landing + user dashboard.

<p align="center">
  <strong>AI-powered персональный гардероб</strong>
</p>

<p align="center">
  <a href="#о-проекте">О проекте</a> •
  <a href="#технологии">Технологии</a> •
  <a href="#установка">Установка</a> •
  <a href="#разработка">Разработка</a> •
  <a href="#сборка">Сборка</a> •
  <a href="#документация">Документация</a>
</p>

---

## О проекте

**OBRAZZ** — это минималистичная одностраничная лендинг-страница для iOS мобильного приложения OBRAZZ — AI-помощника для персонального гардероба.

### Что такое OBRAZZ?

OBRAZZ — это мобильное приложение, которое сочетает в себе:
- 📱 **Цифровой гардероб** — каталог всех ваших вещей
- 🎨 **Визуальный конструктор образов** — Drag & Drop редактор для создания луков
- 🤖 **AI-стилист** — умные подборки образов под ваш стиль и сезон
- 🌐 **Социальная лента** — вдохновение от других пользователей

### Особенности лендинга

- ⚡ Быстрая загрузка благодаря Next.js
- 🎭 Плавные анимации с Framer Motion
- 📱 Полностью адаптивный дизайн (mobile-first)
- 🍎 iOS-inspired минималистичный дизайн
- 🌓 Поддержка светлой и тёмной темы
- ♿ Accessibility-friendly компоненты

## Технологии

### Frontend
| Технология | Описание |
|------------|----------|
| [React 19](https://react.dev/) | UI библиотека |
| [TypeScript](https://www.typescriptlang.org/) | Типизация |
| [Next.js](https://nextjs.org/) | Framework + сборка |
| [Tailwind CSS](https://tailwindcss.com/) | Утилитарный CSS |
| [Framer Motion](https://www.framer.com/motion/) | Анимации |
| [Shadcn/ui](https://ui.shadcn.com/) | UI компоненты |

### Backend
| Технология | Описание |
|------------|----------|
| [Supabase](https://supabase.com/) | Auth + DB + Storage |
| [obrazz-api](../obrazz-api/) | Опциональный Node.js backend (платежи/AI/webhooks) |

## Установка

### Требования

- Node.js 18+
- npm 9+

### Шаги

```bash
# Клонирование репозитория
git clone https://github.com/your-username/obrazz-landing.git
cd obrazz-landing

# Установка зависимостей
npm install

```bash
# Запуск в режиме разработки
npm run dev
```

Приложение будет доступно на `http://localhost:3001`

## Разработка

### Доступные команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Production сборка |
| `npm run start` | Запуск production сервера |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint (fix) |

### Структура проекта

```
LandingPageObrazz/
├── src/
│   ├── app/                # Next.js App Router (landing + dashboard)
│   ├── components/         # UI/components
│   ├── hooks/              # React hooks
│   └── lib/                # Supabase + API helpers
├── Docs/                   # Документация
└── (configs)               # next/tailwind/tsconfig и т.п.
```

Подробнее о структуре: [Docs/PROJECT_STRUCTURE.md](./Docs/PROJECT_STRUCTURE.md)

## Сборка

### Production сборка

```bash
# Сборка клиента и сервера
npm run build

# Запуск production версии
npm run start
```

### Docker

Dockerfile сейчас не основной путь деплоя (ориентируемся на Vercel/Render по необходимости).

## Секции лендинга

Лендинг состоит из 9 секций:

1. **Hero** — Главный экран с логотипом и iPhone mockup
2. **Problem/Solution** — Проблемы и решение
3. **App Demo** — Демонстрация приложения
4. **Benefits** — Преимущества продукта
5. **How It Works** — Как это работает
6. **Social Feed** — Социальная лента
7. **Pricing** — Тарифы
8. **CTA** — Призыв к действию
9. **Footer** — Подвал

## Документация

- [Структура проекта](./Docs/PROJECT_STRUCTURE.md)
- [Архитектура](./Docs/ARCHITECTURE.md)
- [Компоненты](./Docs/COMPONENTS.md)
- [API](./Docs/API.md)
- [Разработка](./Docs/DEVELOPMENT.md)
- [Деплой](./Docs/DEPLOYMENT.md)

## Дизайн

Дизайн следует iOS Human Interface Guidelines:

- **Цвета**: Чёрно-белая палитра (#000000, #FFFFFF, оттенки серого)
- **Типографика**: Inter (SF Pro-like)
- **Отступы**: Большие секционные отступы (128-160px)
- **Скругления**: iOS-style (20-26px)

Подробнее: [design_guidelines.md](./design_guidelines.md)

## Лицензия

MIT © OBRAZZ Team

---

<p align="center">
  Сделано с ❤️ командой OBRAZZ
</p>
