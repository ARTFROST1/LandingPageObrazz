import { motion } from "framer-motion";
import { Wand2, Image, Shield, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Wand2,
    title: "Гибрид: ручной редактор + AI",
    description: "Создавайте образы вручную или доверьтесь искусственному интеллекту",
  },
  {
    icon: Image,
    title: "Эстетичные Pinterest-фоны",
    description: "Красивые фоны для ваших образов в стиле Pinterest",
  },
  {
    icon: Shield,
    title: "Приватность: локальное хранение",
    description: "Изображения хранятся локально на вашем устройстве",
  },
  {
    icon: Smartphone,
    title: "Минималистичный iOS-стиль",
    description: "Чистый и понятный интерфейс в лучших традициях Apple",
  },
];

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-section"
      data-testid="benefits-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
            data-testid="text-benefits-title"
          >
            Почему Obrazz — особенный
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="p-8 bg-background"
                data-testid={`card-benefit-${index}`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-muted">
                    <benefit.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
