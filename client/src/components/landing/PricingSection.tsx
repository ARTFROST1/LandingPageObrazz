import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
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
    buttonText: "Начать бесплатно",
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
    buttonText: "Попробовать PRO",
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
    buttonText: "Выбрать MAX",
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-pricing"
      data-testid="pricing-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-4">
            ТАРИФЫ
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4"
            data-testid="text-pricing-title"
          >
            Выберите свой план
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Начните бесплатно, улучшите при необходимости
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
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
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Год
            </span>
            {isYearly && (
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full whitespace-nowrap">
                до -41%
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 max-w-5xl mx-auto">
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
                    ? "bg-black text-white ring-2 ring-black scale-[1.02]"
                    : "bg-background/80 backdrop-blur-sm glass-card"
                }`}
                data-testid={`card-pricing-${index}`}
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

                <ul className="space-y-3 mb-6 flex-grow">
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

                <Button
                  size="lg"
                  variant={plan.highlighted ? "secondary" : "default"}
                  className="w-full"
                  data-testid={`button-pricing-${index}`}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
