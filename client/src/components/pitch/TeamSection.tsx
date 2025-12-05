import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Palette, BarChart3 } from "lucide-react";

const teamMembers = [
  {
    role: "Разработчик",
    icon: Code,
    skills: ["React Native", "Node.js", "TypeScript", "ИИ/ML"],
    focus: "Разработка приложения",
    description: "Архитектура, мобильная и серверная разработка, интеграция ИИ",
  },
  {
    role: "Дизайнер UI/UX",
    icon: Palette,
    skills: ["Figma", "Прототипирование", "Дизайн-системы"],
    focus: "Визуальный дизайн",
    description: "Создание интерфейсов, пользовательский опыт, брендинг",
  },
  {
    role: "Менеджер по маркетингу",
    icon: BarChart3,
    skills: ["SMM", "Growth Hacking", "Analytics", "Content"],
    focus: "Продвижение и рост",
    description: "Стратегия продвижения, работа с аудиторией, аналитика",
  },
];

const workModel = [
  { label: "Размер команды", value: "3 человека" },
  { label: "Модель работы", value: "Распределение прибыли" },
  { label: "Подход", value: "Бережливый стартап" },
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
            Команда, которая делает это возможным
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Компактная и эффективная команда
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                  <member.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.role}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {member.focus}
                </p>
                <p className="text-xs text-muted-foreground/80 mb-4">
                  {member.description}
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-black/5 rounded-full text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Work model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-black text-white">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Модель работы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workModel.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold mb-1">{item.value}</p>
                  <p className="text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
