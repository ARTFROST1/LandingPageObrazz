# Contributing to OBRAZZ Landing Page

Спасибо за интерес к проекту! Этот документ описывает процесс внесения изменений.

---

## Содержание

1. [Code of Conduct](#code-of-conduct)
2. [Как внести вклад](#как-внести-вклад)
3. [Стиль кода](#стиль-кода)
4. [Commit Messages](#commit-messages)
5. [Pull Request процесс](#pull-request-процесс)

---

## Code of Conduct

### Наши принципы

- Уважение к каждому участнику
- Конструктивная критика
- Открытость к новым идеям
- Фокус на качестве кода

---

## Как внести вклад

### 1. Подготовка

```bash
# Fork репозитория через GitHub

# Клонирование вашего fork
git clone https://github.com/YOUR_USERNAME/obrazz-landing.git
cd obrazz-landing

# Добавление upstream
git remote add upstream https://github.com/ORIGINAL_OWNER/obrazz-landing.git

# Установка зависимостей
npm install
```

### 2. Создание ветки

```bash
# Обновление main
git checkout main
git pull upstream main

# Создание feature ветки
git checkout -b feature/amazing-feature
```

### Именование веток

| Тип | Формат | Пример |
|-----|--------|--------|
| Фича | `feature/description` | `feature/add-newsletter` |
| Баг | `fix/description` | `fix/mobile-layout` |
| Документация | `docs/description` | `docs/update-readme` |
| Рефакторинг | `refactor/description` | `refactor/hero-section` |

### 3. Разработка

```bash
# Запуск dev сервера
npm run dev

# Проверка TypeScript
npm run check

# Проверка перед коммитом
npm run check && npm run build
```

### 4. Коммит изменений

```bash
git add .
git commit -m "feat: добавить секцию новостей"
git push origin feature/amazing-feature
```

### 5. Создание Pull Request

1. Откройте GitHub
2. Нажмите "Compare & pull request"
3. Заполните описание
4. Дождитесь review

---

## Стиль кода

### TypeScript

```typescript
// ✅ Хорошо
interface Props {
  title: string;
  onClick: () => void;
}

function Component({ title, onClick }: Props) {
  return <button onClick={onClick}>{title}</button>;
}

// ❌ Плохо
function Component(props: any) {
  return <button onClick={props.onClick}>{props.title}</button>;
}
```

### React компоненты

```tsx
// ✅ Хорошо - именованный экспорт
export function HeroSection() {
  return <section>...</section>;
}

// ✅ Хорошо - data-testid для тестирования
<button data-testid="button-submit">
  Отправить
</button>

// ✅ Хорошо - разбиение на подкомпоненты
function FeatureCard({ icon, title }: FeatureCardProps) {
  return <Card>...</Card>;
}
```

### CSS/Tailwind

```tsx
// ✅ Хорошо - использование cn() для условных классов
<div className={cn(
  "base-class",
  isActive && "active-class",
  className
)} />

// ✅ Хорошо - responsive дизайн
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// ❌ Плохо - inline styles
<div style={{ color: "red" }}>
```

### Именование

| Элемент | Стиль | Пример |
|---------|-------|--------|
| Компоненты | PascalCase | `HeroSection.tsx` |
| Хуки | camelCase с `use` | `useToast.ts` |
| Утилиты | camelCase | `formatDate.ts` |
| Константы | UPPER_SNAKE | `MAX_ITEMS` |
| CSS переменные | kebab-case | `--primary-color` |

---

## Commit Messages

Мы используем [Conventional Commits](https://www.conventionalcommits.org/).

### Формат

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Типы

| Тип | Описание |
|-----|----------|
| `feat` | Новая функциональность |
| `fix` | Исправление бага |
| `docs` | Документация |
| `style` | Форматирование, без изменения логики |
| `refactor` | Рефакторинг кода |
| `test` | Добавление тестов |
| `chore` | Обновление зависимостей и т.п. |

### Примеры

```bash
# Фича
git commit -m "feat(landing): добавить секцию FAQ"

# Баг
git commit -m "fix(hero): исправить анимацию на мобильных"

# Документация
git commit -m "docs: обновить README"

# Рефакторинг
git commit -m "refactor(components): упростить IPhoneMockup"
```

---

## Pull Request процесс

### Шаблон PR

```markdown
## Описание

Краткое описание изменений.

## Тип изменений

- [ ] Баг фикс
- [ ] Новая функциональность
- [ ] Breaking change
- [ ] Документация

## Чек-лист

- [ ] Код соответствует стилю проекта
- [ ] npm run check проходит успешно
- [ ] Добавлены data-testid атрибуты
- [ ] Проверено на мобильных устройствах
- [ ] Документация обновлена (при необходимости)

## Скриншоты

(если применимо)
```

### Критерии приёма

1. **TypeScript** — нет ошибок типизации
2. **Стиль** — соответствие code style
3. **Тесты** — data-testid на интерактивных элементах
4. **Responsive** — работает на mobile/tablet/desktop
5. **Анимации** — плавные, не ломают производительность

### Code Review

- Минимум 1 approve для merge
- Все комментарии должны быть resolved
- CI/CD проверки должны пройти

---

## Разработка секций

### Добавление новой секции

1. Создайте компонент в `client/src/components/landing/`
2. Следуйте структуре существующих секций
3. Добавьте анимации Framer Motion
4. Добавьте в `pages/home.tsx`

### Шаблон секции

```tsx
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
        >
          {/* Content */}
        </motion.div>
      </div>
    </section>
  );
}
```

---

## Вопросы?

- Создайте [Issue](https://github.com/OWNER/obrazz-landing/issues)
- Email: team@obrazz.app

---

Спасибо за ваш вклад! 🎉
