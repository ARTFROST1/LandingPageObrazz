import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, Crown, Zap, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Бесплатно",
    monthlyPrice: "0",
    yearlyPrice: "0",
    features: [
      "До 100 вещей в каталоге",
      "Ручной конструктор образов",
      "50 удалений фона/мес",
      "1 ИИ-подбор в день",
      "5 ИИ-примерок (бонус)",
    ],
    limitations: [
      "Реклама в приложении",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "PRO",
    monthlyPrice: "399",
    yearlyPrice: "275",
    yearlyTotal: "3,299",
    discount: "17%",
    features: [
      "До 250 вещей в каталоге",
      "100 удалений фона/мес",
      "60 ИИ-подборов/мес",
      "30 ИИ-примерок/мес",
      "Без рекламы",
      "Приоритетная поддержка",
    ],
    limitations: [],
    highlighted: true,
    badge: "Популярный",
  },
  {
    name: "MAX",
    monthlyPrice: "799",
    yearlyPrice: "475",
    yearlyTotal: "5,699",
    discount: "41%",
    features: [
      "До 500 вещей в каталоге",
      "200 удалений фона/мес",
      "100 ИИ-подборов/мес",
      "50 ИИ-примерок/мес",
      "Без рекламы",
      "VIP-поддержка",
      "Ранний доступ к функциям",
    ],
    limitations: [],
    highlighted: false,
    badge: "Максимум",
  },
];

const funnel = [
  { step: "Установка", percent: "3,400", note: "/мес" },
  { step: "Регистрация", percent: "2,400", note: "70%" },
  { step: "Активные", percent: "1,450", note: "60%" },
  { step: "Платящие", percent: "145", note: "10%", highlight: true },
];

const unitEconomics = [
  { label: "Ценность клиента", value: "5,880₽", description: "20 мес. средний срок жизни" },
  { label: "Стоимость привлечения", value: "500₽", description: "Маркетинг 250К₽/мес" },
  { label: "Соотношение ЦК/СП", value: "10:1", description: "Отличный показатель!" },
  { label: "Маржа", value: "60-70%", description: "После комиссий и расходов" },
];

export function BusinessModelSection() {
  const [isYearly, setIsYearly] = useState(true);

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
            Freemium → Premium подписка
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Бесплатный старт, платные расширенные возможности
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-4 mb-10 relative"
        >
          <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Месяц
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              isYearly ? 'bg-black' : 'bg-gray-300'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                isYearly ? 'translate-x-[26px]' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
            Год
          </span>
          {isYearly && (
            <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap">
              до -41%
            </span>
          )}
        </motion.div>

        {/* Pricing plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                className={`p-6 h-full flex flex-col relative overflow-hidden ${
                  plan.highlighted
                    ? "bg-black text-white ring-2 ring-black"
                    : "bg-background/80 backdrop-blur-sm glass-card"
                }`}
              >
                {plan.badge && (
                  <div className={`absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full ${
                    plan.highlighted ? 'bg-white text-black' : 'bg-black/10 text-foreground'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      {plan.monthlyPrice === "0" 
                        ? "Бесплатно" 
                        : `${isYearly ? plan.yearlyPrice : plan.monthlyPrice}₽`}
                    </span>
                    {plan.monthlyPrice !== "0" && (
                      <span className={plan.highlighted ? "text-white/70" : "text-muted-foreground"}>
                        /мес
                      </span>
                    )}
                  </div>
                  {plan.monthlyPrice !== "0" && (
                    <div className="mt-2">
                      {isYearly ? (
                        <p className={`text-sm ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                          {plan.yearlyTotal}₽/год · <span className="text-green-500">-{plan.discount}</span>
                        </p>
                      ) : (
                        <p className={`text-sm ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                          или {plan.yearlyPrice}₽/мес при оплате за год
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-green-400' : 'text-green-600'}`} strokeWidth={2.5} />
                      <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <li key={`lim-${limitIndex}`} className="flex items-center gap-3">
                      <span className={`w-4 h-4 flex-shrink-0 text-center text-xs ${plan.highlighted ? 'text-white/40' : 'text-muted-foreground/60'}`}>•</span>
                      <span className={`text-sm ${plan.highlighted ? "text-white/60" : "text-muted-foreground/80"}`}>
                        {limitation}
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
            <h3 className="text-xl font-semibold text-foreground text-center mb-2">
              Воронка привлечения
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-8">
              При бюджете 250К₽/мес на маркетинг
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {funnel.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`text-center px-4 py-3 rounded-xl ${step.highlight ? "bg-black text-white" : ""}`}>
                    <p className={`text-2xl font-bold ${step.highlight ? "text-white" : "text-foreground"}`}>
                      {step.percent}
                    </p>
                    <p className={`text-sm font-medium ${step.highlight ? "text-white/90" : "text-foreground"}`}>
                      {step.step}
                    </p>
                    <p className={`text-xs ${step.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                      {step.note}
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
