import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

const teamStrengths = [
  {
    icon: Lightbulb,
    title: "Видение продукта",
    description: "Глубокое понимание проблемы и пути решения",
  },
  {
    icon: Target,
    title: "Фокус на результат",
    description: "Четкие цели и метрики успеха",
  },
  {
    icon: Users,
    title: "Привлечение экспертов",
    description: "Работа с профессионалами в разработке и дизайне",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-section"
      data-testid="pitch-team-section"
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
            КОМАНДА
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Команда основателей
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            3 целеустремленных студента с четким видением будущего продукта
          </p>
        </motion.div>

        {/* Team strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {teamStrengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                  <item.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-black text-white text-center">
            <p className="text-xl font-medium mb-2">
              Наш подход
            </p>
            <p className="text-white/70 max-w-2xl mx-auto">
              Мы управляем проектом, привлекая профессиональных разработчиков и дизайнеров для реализации. Фокусируемся на стратегии, метриках и достижении целей.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
