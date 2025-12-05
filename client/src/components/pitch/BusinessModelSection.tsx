import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, Crown, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Бесплатно",
    price: "0",
    features: [
      "Безлимит вещей в гардеробе",
      "Ручной конструктор образов",
      "3 сохраненных образа",
      "3 ИИ-подборки",
      "3 ИИ-примерки на фото",
    ],
    highlighted: false,
  },
  {
    name: "Премиум",
    price: "299",
    period: "/мес",
    yearlyPrice: "2,990₽/год",
    features: [
      "Всё из бесплатного",
      "Безлимит образов",
      "Безлимит ИИ-подборок",
      "30 ИИ-примерок в месяц",
      "Расширенная статистика",
      "Early access к новым функциям",
    ],
    highlighted: true,
  },
];

const funnel = [
  { step: "Просмотр рекламы", percent: 100 },
  { step: "Клик по рекламе", percent: 15 },
  { step: "Скачивание", percent: 10 },
  { step: "Регистрация", percent: 7 },
  { step: "Добавили вещи", percent: 5 },
  { step: "Создали образ", percent: 3 },
  { step: "Купили подписку", percent: 0.5, highlight: true },
];

const unitEconomics = [
  { label: "Ценность клиента", value: "4,200₽", description: "6 мес средняя жизнь подписки" },
  { label: "Стоимость привлечения", value: "75₽", description: "Маркетинг 10K₽/мес" },
  { label: "Соотношение", value: "56:1", description: "Отличный показатель!" },
  { label: "Маржа", value: "70-80%", description: "Типично для подписок" },
];

export function BusinessModelSection() {
  return (
    <section
      id="business"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-pricing"
      data-testid="pitch-business-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-4">
            БИЗНЕС-МОДЕЛЬ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Условно-бесплатная → Премиум подписка
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Понятная монетизация с проверенной моделью
          </p>
        </motion.div>

        {/* Pricing plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className={`p-8 h-full flex flex-col glow-subtle ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground"
                    : "bg-background/80 backdrop-blur-sm glass-card"
                }`}
              >
                {plan.highlighted && (
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="w-5 h-5" />
                    <span className="text-sm font-medium">Рекомендуем</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      {plan.price === "0" ? "Бесплатно" : `${plan.price}₽`}
                    </span>
                    {plan.period && (
                      <span className={plan.highlighted ? "opacity-70" : "text-muted-foreground"}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.yearlyPrice && (
                    <p className={`text-sm mt-1 ${plan.highlighted ? "opacity-70" : "text-muted-foreground"}`}>
                      или {plan.yearlyPrice}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                      <span className={plan.highlighted ? "opacity-80" : "text-muted-foreground"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Conversion funnel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 bg-background/80 backdrop-blur-sm glass-card">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              Воронка конверсии
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {funnel.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`text-center ${step.highlight ? "bg-black text-white px-4 py-2 rounded-lg" : ""}`}>
                    <p className={`text-2xl font-bold ${step.highlight ? "text-white" : "text-foreground"}`}>
                      {step.percent}%
                    </p>
                    <p className={`text-sm ${step.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                      {step.step}
                    </p>
                  </div>
                  {index < funnel.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Unit Economics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-black text-white">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Zap className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Экономика продукта</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {unitEconomics.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold mb-1">{metric.value}</p>
                  <p className="text-lg font-medium text-white/90 mb-1">{metric.label}</p>
                  <p className="text-xs text-white/60">{metric.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
