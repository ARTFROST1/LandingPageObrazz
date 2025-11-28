import { motion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";

const steps = [
  {
    number: "01",
    title: "Загрузите одежду",
    description: "Умное удаление фона и автоматическая категоризация.",
    screen: "/screenshots/step-upload.png",
  },
  {
    number: "02",
    title: "Создавайте образы",
    description: "Drag & Drop, масштабирование, кастомные фоны.",
    screen: "/screenshots/step-editor.png",
  },
  {
    number: "03",
    title: "Получайте подборки от AI",
    description: "Луки под ваш стиль, сезон и гардероб.",
    screen: "/screenshots/step-ai.png",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-subtle"
      data-testid="how-it-works-section"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
            data-testid="text-how-it-works-title"
          >
            Как это работает
          </h2>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-testid={`step-${index}`}
            >
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block text-6xl lg:text-7xl font-bold text-muted mb-4">
                  {step.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <IPhoneMockup screenshots={[step.screen]} size="lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
