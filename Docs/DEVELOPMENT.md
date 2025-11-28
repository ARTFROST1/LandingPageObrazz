# Руководство по разработке

Полное руководство для разработчиков OBRAZZ Landing Page.

---

## Содержание

1. [Начало работы](#начало-работы)
2. [Структура разработки](#структура-разработки)
3. [Добавление компонентов](#добавление-компонентов)
4. [Стилизация](#стилизация)
5. [Анимации](#анимации)
6. [Работа с данными](#работа-с-данными)
7. [Тестирование](#тестирование)
8. [Отладка](#отладка)

---

## Начало работы

### Требования

- **Node.js** 18.x или выше
- **npm** 9.x или выше
- **Git** для контроля версий
- **VS Code** (рекомендуется)

### Установка

```bash
# Клонирование репозитория
git clone <repository-url>
cd LandingPageObrazz

# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev
```

### Доступ к приложению

После запуска:
- **Frontend**: http://localhost:5000
- **API**: http://localhost:5000/api

---

## Структура разработки

### Рабочий процесс

```
1. Создать feature branch
2. Внести изменения
3. Проверить TypeScript: npm run check
4. Протестировать локально
5. Создать Pull Request
```

### Команды разработки

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev сервер с HMR |
| `npm run check` | TypeScript проверка |
| `npm run build` | Production сборка |
| `npm run start` | Запуск production |
| `npm run db:push` | Применить схему к БД |

---

## Добавление компонентов

### Создание секции лендинга

1. Создайте файл в `client/src/components/landing/`:

```tsx
// NewSection.tsx
import { motion } from "framer-motion";

export function NewSection() {
  return (
    <section
      id="new-section"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-background"
      data-testid="new-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Заголовок секции
          </h2>
          <p className="mt-4 text-muted-foreground">
            Описание секции
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

2. Добавьте в `pages/home.tsx`:

```tsx
import { NewSection } from "@/components/landing/NewSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Существующие секции */}
      <NewSection />
      {/* Остальные секции */}
    </div>
  );
}
```

### Добавление UI компонента Shadcn

```bash
# Добавление компонента
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Компоненты появятся в `client/src/components/ui/`

### Создание custom хука

```tsx
// hooks/use-custom.ts
import { useState, useEffect } from "react";

export function useCustomHook(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  
  useEffect(() => {
    // Логика хука
  }, []);
  
  return { value, setValue };
}
```

---

## Стилизация

### Tailwind CSS

#### Основные утилиты

```tsx
// Отступы
className="px-6 lg:px-12 py-section"

// Типографика
className="text-5xl font-bold tracking-tight"

// Flexbox
className="flex items-center justify-center gap-4"

// Grid
className="grid grid-cols-1 md:grid-cols-3 gap-8"

// Responsive
className="text-lg md:text-xl lg:text-2xl"
```

#### Кастомные классы

Определены в `tailwind.config.ts`:

```tsx
// Border radius (iOS-style)
className="rounded-lg"    // 26px
className="rounded-md"    // 20px
className="rounded-ios"   // 40px

// Spacing
className="py-section"     // 128px
className="py-section-lg"  // 160px
```

### CSS переменные

Определены в `client/src/index.css`:

```css
:root {
  --background: 0 0% 100%;        /* Белый */
  --foreground: 0 0% 9%;          /* Почти чёрный */
  --muted: 0 0% 94.5%;            /* Светло-серый */
  --muted-foreground: 0 0% 46%;   /* Серый текст */
  --primary: 0 0% 9%;             /* Чёрный */
  --primary-foreground: 0 0% 98%; /* Белый */
}
```

Использование:

```tsx
className="bg-background text-foreground"
className="bg-muted text-muted-foreground"
className="bg-primary text-primary-foreground"
```

### Утилита cn()

Объединение классов:

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-styles",
  isActive && "active-styles",
  className
)} />
```

---

## Анимации

### Framer Motion

#### Fade In Up (основная)

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Контент
</motion.div>
```

#### Stagger (для списков)

```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.15 
    }}
  >
    {item}
  </motion.div>
))}
```

#### AnimatePresence

```tsx
import { AnimatePresence } from "framer-motion";

<AnimatePresence mode="wait">
  <motion.div
    key={activeIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {content}
  </motion.div>
</AnimatePresence>
```

### CSS анимации

Определены в `tailwind.config.ts`:

```tsx
className="animate-accordion-down"
className="animate-accordion-up"
```

---

## Работа с данными

### TanStack Query

#### Настройка

```tsx
// lib/queryClient.ts
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 минут
      retry: 3,
    },
  },
});
```

#### Использование

```tsx
import { useQuery } from "@tanstack/react-query";

function Component() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data-key"],
    queryFn: () => fetch("/api/data").then(r => r.json()),
  });
  
  if (isLoading) return <Skeleton />;
  if (error) return <Error />;
  
  return <div>{data}</div>;
}
```

### Формы (React Hook Form)

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  });
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <input {...form.register("email")} />
      <input {...form.register("name")} />
      <button type="submit">Отправить</button>
    </form>
  );
}
```

---

## Тестирование

### Data-testid атрибуты

Все интерактивные элементы должны иметь `data-testid`:

```tsx
<section data-testid="hero-section">
  <h1 data-testid="text-brand-name">OBRAZZ</h1>
  <button data-testid="button-download">Скачать</button>
</section>
```

### Именование

| Элемент | Формат |
|---------|--------|
| Секция | `{section-name}-section` |
| Текст | `text-{description}` |
| Кнопка | `button-{action}` |
| Карточка | `card-{type}-{index}` |
| Input | `input-{field}` |

### Проверка TypeScript

```bash
# Проверка типов
npm run check

# Должна быть без ошибок перед коммитом
```

---

## Отладка

### React Developer Tools

1. Установите расширение React DevTools
2. Откройте DevTools → Components
3. Исследуйте дерево компонентов

### Vite HMR

При изменении файлов страница обновляется автоматически.

Если HMR не работает:
```bash
# Перезапустите dev сервер
npm run dev
```

### Логирование сервера

Все API запросы логируются:

```
10:30:45 AM [express] GET /api/health 200 in 5ms
```

### Отладка стилей

```tsx
// Временная граница для отладки
className="border border-red-500"

// Или
style={{ outline: "1px solid red" }}
```

---

## VS Code настройки

### Рекомендуемые расширения

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "formulahendry.auto-rename-tag",
    "dsznajder.es7-react-js-snippets"
  ]
}
```

### settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

---

## Чек-лист перед коммитом

- [ ] `npm run check` проходит без ошибок
- [ ] Компоненты имеют `data-testid`
- [ ] Стили responsive (проверка на mobile)
- [ ] Анимации работают корректно
- [ ] Нет console.log в production коде
- [ ] Нет хардкоженных значений
- [ ] Код отформатирован
