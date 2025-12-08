import { motion } from "framer-motion";
import { Shirt, LayoutGrid, Sparkles, Lightbulb, X, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Shirt,
    title: '"Нечего надеть"',
    description: "при полном шкафу вещей",
  },
  {
    icon: LayoutGrid,
    title: "Хаос в гардеробе",
    description: "и отсутствие структуры",
  },
  {
    icon: Lightbulb,
    title: "Недостаток идей",
    description: "и вдохновения для образов",
  },
];

const solutions = [
  "Умная каталогизация всех вещей",
  "Визуальный конструктор образов",
  "AI-стилист всегда под рукой",
  "ИИ-примерка на твоём фото",
];

export function ProblemSolutionSection() {
  return (
    <section
      id="problem"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-subtle"
      data-testid="problem-solution-section"
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3 tracking-tight"
            data-testid="text-problem-title"
          >
            "Нечего надеть"
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-2">
            Знакомо?
          </p>
          <p className="text-base text-muted-foreground/70 max-w-xl mx-auto">
            80% людей не используют 50% своего гардероба
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              data-testid={`card-problem-${index}`}
            >
              <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card text-center">
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-gray-100">
                  <problem.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                  <h3 className="text-lg font-semibold text-foreground">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 lg:p-10 bg-black text-white">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />
                <span className="text-xs font-medium bg-white/10 px-3 py-1 rounded-full">
                  РЕШЕНИЕ
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight"
                data-testid="text-solution-title"
              >
                AI-стилист в твоем кармане
              </h3>
              <p
                className="text-white/70 max-w-xl mx-auto"
                data-testid="text-solution-description"
              >
                Цифровой гардероб + визуальный конструктор + AI-стилист в одном приложении
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-white/90">{solution}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
