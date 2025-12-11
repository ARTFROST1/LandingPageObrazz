import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { IPhoneMockup } from "@/components/landing/IPhoneMockup";
import { 
  Camera, 
  Wand2, 
  LayoutGrid, 
  Sparkles, 
  User,
  Check
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Управление гардеробом",
    description: "Добавление вещей, автоудаление фона, умная категоризация",
  },
  {
    icon: LayoutGrid,
    title: "Ручной конструктор",
    description: "Drag & drop, карусели категорий, рандомайзер, кастомные фоны",
  },
  {
    icon: Sparkles,
    title: "ИИ-подборка образов",
    description: "Автоматическая генерация луков на основе стиля и сезона",
  },
  {
    icon: User,
    title: "ИИ-примерка",
    description: "Примерка образов на вашем фото с помощью искусственного интеллекта",
  },
];

const advantages = [
  "Комбинация ручного и ИИ-подбора в одном приложении",
  "Локальное хранение изображений (конфиденциальность)",
  "Минималистичный дизайн в стиле Pinterest",
  "Низкий порог входа (бесплатный функционал)",
  "Доступность на iOS и Android",
  "ИИ примерка на фото пользователя",
];

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-section"
      data-testid="pitch-solution-section"
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
            РЕШЕНИЕ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Obrazz = Карманный гардероб + ИИ-стилист
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Создавай стильные образы за секунды с помощью ИИ или вручную — 
            твой личный гардероб превращается в бесконечный источник вдохновения
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <IPhoneMockup
              screenshots={[
                "/screenshots/hero-1.png",
                "/screenshots/hero-2.png",
                "/screenshots/hero-3.png"
              ]}
              autoScroll={true}
              interval={3500}
              size="xl"
            />
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <Card key={index} className="p-5 bg-background/80 backdrop-blur-sm glass-card">
                <div className="w-10 h-10 mb-3 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                  <feature.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Competitive advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-black text-white">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Конкурентные преимущества
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-white/80">{advantage}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
