import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Бесплатно",
    price: "0",
    features: [
      "Безлимит вещей",
      "Ручной редактор",
      "3 образа",
      "3 AI-подборки",
    ],
    buttonText: "Начать бесплатно",
    highlighted: false,
  },
  {
    name: "Премиум",
    price: "299",
    period: "/мес",
    features: [
      "Всё из бесплатного",
      "Безлимит образов",
      "Безлимит AI",
      "Расширенные фоны",
    ],
    buttonText: "Попробовать Премиум",
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-pricing"
      data-testid="pricing-section"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
            data-testid="text-pricing-title"
          >
            Прозрачная модель подписки
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                data-testid={`card-pricing-${index}`}
              >
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      {plan.price === "0" ? "Бесплатно" : `${plan.price}₽`}
                    </span>
                    {plan.period && (
                      <span className={`ml-1 ${plan.highlighted ? "opacity-70" : "text-muted-foreground"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
                      <span className={plan.highlighted ? "opacity-80" : "text-muted-foreground"}>
                        {feature}
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
