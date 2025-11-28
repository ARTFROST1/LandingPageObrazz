import { motion } from "framer-motion";
import { Shirt, LayoutGrid, Sparkles, Lightbulb } from "lucide-react";

const problems = [
  {
    icon: Shirt,
    title: '"Нечего надеть"',
    description: "при полном шкафу",
  },
  {
    icon: LayoutGrid,
    title: "Хаос и отсутствие",
    description: "структуры",
  },
  {
    icon: Lightbulb,
    title: "Недостаток",
    description: "вдохновения",
  },
];

export function ProblemSolutionSection() {
  return (
    <section
      id="problem"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-background"
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight"
            data-testid="text-problem-title"
          >
            Проблема, которую мы решаем
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
              data-testid={`card-problem-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <problem.icon className="w-10 h-10 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-foreground" strokeWidth={1.5} />
          </div>
          <h3
            className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight"
            data-testid="text-solution-title"
          >
            Наше решение
          </h3>
          <p
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="text-solution-description"
          >
            Obrazz сочетает в себе цифровой гардероб, визуальный конструктор
            образов и AI-стилиста. Это инструмент, который помогает навести
            порядок и находить новые сочетания каждый день.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
