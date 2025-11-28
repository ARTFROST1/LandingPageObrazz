# Компоненты OBRAZZ Landing Page

Полная документация всех React компонентов проекта.

---

## Содержание

1. [Секции лендинга](#секции-лендинга)
2. [Переиспользуемые компоненты](#переиспользуемые-компоненты)
3. [UI компоненты](#ui-компоненты)
4. [Хуки](#хуки)

---

## Секции лендинга

Все секции расположены в `client/src/components/landing/`

### HeroSection

Главный экран лендинга с брендом и призывом к действию.

**Файл**: `HeroSection.tsx`

**Содержимое**:
- Логотип "OBRAZZ"
- Слоган "AI-powered персональный гардероб"
- Описание приложения
- iPhone mockup с auto-scroll
- Кнопки "App Store" и "Узнать больше"

**Props**: Нет (статический компонент)

**Анимации**:
- Fade in up для текста (delay: 0s)
- Fade in up для mockup (delay: 0.2s)
- Fade in up для кнопок (delay: 0.4s)

**Data-testid атрибуты**:
- `hero-section`
- `text-brand-name`
- `text-tagline`
- `text-description`
- `button-download-ios`
- `button-learn-more`

---

### ProblemSolutionSection

Блок проблем и решения.

**Файл**: `ProblemSolutionSection.tsx`

**Содержимое**:
- Заголовок "Проблема, которую мы решаем"
- 3 карточки проблем:
  - "Нечего надеть" при полном шкафу
  - Хаос и отсутствие структуры
  - Недостаток вдохновения
- Блок "Наше решение" с описанием

**Props**: Нет

**Иконки**: `Shirt`, `LayoutGrid`, `Lightbulb`, `Sparkles` (lucide-react)

**Data-testid**:
- `problem-solution-section`
- `text-problem-title`
- `card-problem-0`, `card-problem-1`, `card-problem-2`
- `text-solution-title`
- `text-solution-description`

---

### AppDemoSection

Демонстрация приложения с тремя mockups.

**Файл**: `AppDemoSection.tsx`

**Содержимое**:
- Заголовок "Приложение, созданное для визуального мышления"
- 3 iPhone mockup:
  - Гардероб (каталог вещей)
  - Конструктор образов (Drag & Drop)
  - AI-подборка (AI-стилист)

**Props**: Нет

---

### BenefitsSection

Блок преимуществ продукта.

**Файл**: `BenefitsSection.tsx`

**Содержимое**:
- Заголовок "Почему Obrazz — особенный"
- 4 карточки преимуществ:
  - Гибрид: ручной редактор + AI
  - Эстетичные Pinterest-фоны
  - Приватность: локальное хранение
  - Минималистичный iOS-стиль

**Props**: Нет

**Иконки**: `Wand2`, `Image`, `Shield`, `Smartphone`

**Data-testid**:
- `benefits-section`
- `text-benefits-title`
- `card-benefit-0` ... `card-benefit-3`

---

### HowItWorksSection

Секция "Как это работает".

**Файл**: `HowItWorksSection.tsx`

**Содержимое**:
- Заголовок "Как это работает"
- 3 шага с alternating layout:
  1. Загрузите одежду
  2. Создавайте образы
  3. Получайте подборки от AI

**Props**: Нет

---

### SocialFeedSection

Демонстрация социальной ленты.

**Файл**: `SocialFeedSection.tsx`

**Содержимое**:
- Large iPhone mockup с лентой
- Описание функционала

**Props**: Нет

---

### PricingSection

Секция тарифов.

**Файл**: `PricingSection.tsx`

**Содержимое**:
- Заголовок "Прозрачная модель подписки"
- 2 карточки тарифов:

| Бесплатно | Премиум (299₽/мес) |
|-----------|-------------------|
| Безлимит вещей | Всё из бесплатного |
| Ручной редактор | Безлимит образов |
| 3 образа | Безлимит AI |
| 3 AI-подборки | Расширенные фоны |

**Props**: Нет

**Data-testid**:
- `pricing-section`
- `text-pricing-title`
- `card-pricing-0`, `card-pricing-1`
- `button-pricing-0`, `button-pricing-1`

---

### CTASection

Финальный призыв к действию.

**Файл**: `CTASection.tsx`

**Содержимое**:
- Заголовок "Создай свой стиль по-новому"
- Кнопки загрузки (iOS, Android)
- Large iPhone mockup

**Props**: Нет

---

### Footer

Подвал сайта.

**Файл**: `Footer.tsx`

**Содержимое**:
- Логотип OBRAZZ
- Ссылки: Политика, Условия, Поддержка
- Email: team@obrazz.app
- Copyright

**Props**: Нет

---

## Переиспользуемые компоненты

### IPhoneMockup

Компонент iPhone mockup с опциональной автопрокруткой скриншотов.

**Файл**: `IPhoneMockup.tsx`

**Props**:

| Prop | Тип | Default | Описание |
|------|-----|---------|----------|
| `screenshots` | `string[]` | required | Названия экранов |
| `autoScroll` | `boolean` | `false` | Автопрокрутка |
| `interval` | `number` | `3000` | Интервал прокрутки (ms) |
| `className` | `string` | `""` | Дополнительные классы |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"lg"` | Размер mockup |

**Размеры**:
- `sm`: 180px
- `md`: 220px
- `lg`: 280px
- `xl`: 320px

**Использование**:

```tsx
import { IPhoneMockup } from "@/components/landing/IPhoneMockup";

// Простой mockup
<IPhoneMockup screenshots={["Гардероб"]} size="lg" />

// С автопрокруткой
<IPhoneMockup 
  screenshots={["Гардероб", "Конструктор", "AI"]} 
  autoScroll={true}
  interval={3500}
  size="xl"
/>
```

**Особенности**:
- iOS-style дизайн (dynamic island)
- Плавные fade-переходы между экранами
- Индикаторы-точки для навигации
- Кликабельные индикаторы

**Data-testid**:
- `iphone-mockup`
- `mockup-indicator-0`, `mockup-indicator-1`, ...

---

## UI компоненты

Проект использует [Shadcn/ui](https://ui.shadcn.com/) — набор переиспользуемых компонентов на базе Radix UI.

### Основные компоненты

#### Button

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Скачать
</Button>

<Button variant="outline" size="sm">
  Узнать больше
</Button>
```

**Варианты**:
- `default` — основная кнопка (чёрная)
- `outline` — с рамкой
- `secondary` — серая
- `ghost` — прозрачная
- `link` — ссылка
- `destructive` — красная

**Размеры**: `default`, `sm`, `lg`, `icon`

---

#### Card

```tsx
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Заголовок</CardTitle>
    <CardDescription>Описание</CardDescription>
  </CardHeader>
  <CardContent>
    Контент
  </CardContent>
  <CardFooter>
    <Button>Действие</Button>
  </CardFooter>
</Card>
```

---

#### Toast

```tsx
import { useToast } from "@/hooks/use-toast";

function Component() {
  const { toast } = useToast();
  
  return (
    <Button onClick={() => toast({ title: "Успех!" })}>
      Показать уведомление
    </Button>
  );
}
```

---

### Полный список UI компонентов

| Компонент | Описание |
|-----------|----------|
| `accordion` | Аккордеон |
| `alert` | Алерт/уведомление |
| `alert-dialog` | Диалог подтверждения |
| `aspect-ratio` | Соотношение сторон |
| `avatar` | Аватар |
| `badge` | Бейдж/метка |
| `breadcrumb` | Хлебные крошки |
| `button` | Кнопка |
| `calendar` | Календарь |
| `card` | Карточка |
| `carousel` | Карусель |
| `chart` | Графики (Recharts) |
| `checkbox` | Чекбокс |
| `collapsible` | Сворачиваемый блок |
| `command` | Командная палитра |
| `context-menu` | Контекстное меню |
| `dialog` | Диалог/модальное окно |
| `drawer` | Выдвижная панель |
| `dropdown-menu` | Выпадающее меню |
| `form` | Форма (react-hook-form) |
| `hover-card` | Карточка при наведении |
| `input` | Текстовое поле |
| `input-otp` | OTP ввод |
| `label` | Метка |
| `menubar` | Меню-бар |
| `navigation-menu` | Навигационное меню |
| `pagination` | Пагинация |
| `popover` | Поповер |
| `progress` | Прогресс-бар |
| `radio-group` | Радио-группа |
| `resizable` | Изменяемый размер |
| `scroll-area` | Область прокрутки |
| `select` | Селект |
| `separator` | Разделитель |
| `sheet` | Боковая панель |
| `sidebar` | Сайдбар |
| `skeleton` | Скелетон загрузки |
| `slider` | Слайдер |
| `switch` | Переключатель |
| `table` | Таблица |
| `tabs` | Вкладки |
| `textarea` | Многострочный ввод |
| `toast` | Toast-уведомления |
| `toggle` | Тоггл |
| `toggle-group` | Группа тогглов |
| `tooltip` | Тултип |

---

## Хуки

### use-mobile

Определяет, является ли устройство мобильным.

**Файл**: `hooks/use-mobile.tsx`

```tsx
import { useIsMobile } from "@/hooks/use-mobile";

function Component() {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileView /> : <DesktopView />;
}
```

**Breakpoint**: 768px

---

### use-toast

Хук для управления toast-уведомлениями.

**Файл**: `hooks/use-toast.ts`

```tsx
import { useToast } from "@/hooks/use-toast";

function Component() {
  const { toast, dismiss, toasts } = useToast();
  
  // Показать уведомление
  toast({
    title: "Заголовок",
    description: "Описание",
    variant: "default", // или "destructive"
  });
  
  // Закрыть уведомление
  dismiss(toastId);
}
```

---

## Стилизация компонентов

### Утилита cn()

Для объединения классов используется `cn()`:

```tsx
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)}>
```

### CSS переменные

Компоненты используют CSS переменные для темизации:

```css
/* Доступны в index.css */
--background
--foreground
--primary
--primary-foreground
--muted
--muted-foreground
--border
/* ... */
```

### Tailwind классы

Кастомные классы из `tailwind.config.ts`:

```tsx
// iOS-style радиусы
className="rounded-lg"  // 26px
className="rounded-md"  // 20px
className="rounded-ios" // 40px

// Секционные отступы
className="py-section"     // 128px
className="py-section-lg"  // 160px
```
