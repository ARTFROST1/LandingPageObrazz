import { motion } from "framer-motion";
import { Wand2, Image, Shield, Smartphone, Camera, User, Package, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Package,
    title: "Цифровой гардероб",
    description: "Добавляйте и храните все вещи в одном месте с умной категоризацией",
  },
  {
    icon: Layers,
    title: "Визуальный конструктор",
    description: "Создавайте и сохраняйте образы с помощью drag & drop редактора",
  },
  {
    icon: Wand2,
    title: "AI подборка образа",
    description: "Автоматическая генерация луков на основе вещей из вашего гардероба",
  },
  {
    icon: User,
    title: "AI примерка на фото",
    description: "Виртуальная примерка образов на вашем фото перед покупкой",
  },
  {
    icon: Camera,
    title: "Умное удаление фона",
    description: "AI автоматически удаляет фон при добавлении вещей",
  },
  {
    icon: Shield,
    title: "Приватность данных",
    description: "Все изображения хранятся локально на вашем устройстве",
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
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-4">
            ПРЕИМУЩЕСТВА
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4"
            data-testid="text-benefits-title"
          >
            Почему Obrazz
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Всё, что нужно для стильных образов — в одном приложении
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card hover:shadow-lg transition-shadow duration-300"
                data-testid={`card-benefit-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-100">
                    <benefit.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
