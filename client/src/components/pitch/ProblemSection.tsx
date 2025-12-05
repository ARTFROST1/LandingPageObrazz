import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shirt, Clock, Heart, AlertCircle, Package, Calendar, Zap } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "17 минут каждое утро",
    description: "Среднее время на выбор одежды",
    stat: "6 месяцев",
    statLabel: "потрачено за жизнь (18-60 лет)",
  },
  {
    icon: Heart,
    title: "62% испытывают стресс",
    description: "Гнев и ярость при выборе",
    stat: "Эмоциональное",
    statLabel: "истощение",
  },
  {
    icon: AlertCircle,
    title: "Влияет на повседневность",
    description: "Проблемы в личной жизни",
    stat: "14%",
    statLabel: "меняют планы из-за одежды",
  },
];

const researchStats = [
  {
    icon: Package,
    title: "152 предмета",
    description: "В среднем в гардеробе",
    detail: "Но используется только 44% регулярно",
  },
  {
    icon: Shirt,
    title: "11 вещей с бирками",
    description: "Никогда не надевались",
    detail: "Потраченные деньги впустую",
  },
  {
    icon: Zap,
    title: "1 из 5 ссорится",
    description: "С партнером из-за выбора",
    detail: "Долгие раздумья перед гардеробом",
  },
  {
    icon: Calendar,
    title: "10% опаздывают",
    description: "На работу из-за выбора одежды",
    detail: "Временные затраты приводят к последствиям",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-subtle"
      data-testid="pitch-problem-section"
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
            ПРОБЛЕМА
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Ученые подсчитали: женщины тратят 6 месяцев жизни на выбор одежды
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Исследование Marks & Spencer показало масштаб проблемы, с которой сталкивается каждая женщина
          </p>
        </motion.div>

        {/* Main problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-8 h-full bg-background/80 backdrop-blur-sm glass-card glow-subtle text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                  <problem.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground mb-6">{problem.description}</p>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-3xl font-bold text-foreground mb-1">{problem.stat}</p>
                  <p className="text-sm text-muted-foreground">{problem.statLabel}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Research findings grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {researchStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card">
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                  <stat.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.title}</p>
                <p className="text-sm font-medium text-muted-foreground mb-2">{stat.description}</p>
                <p className="text-xs text-muted-foreground/70 leading-relaxed">{stat.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4"
        >
          <Card className="p-6 bg-black text-white">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-3">Вывод исследования:</p>
                <p className="text-sm text-white/80 leading-relaxed">
                  Несмотря на полный шкаф (152 предмета), женщины ежедневно сталкиваются с парадоксом — они не находят подходящей одежды. Это не только тратит время, но и вызывает эмоциональный стресс, влияет на отношения и даже приводит к опозданиям на работу.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
