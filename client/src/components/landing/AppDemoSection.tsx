import { motion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";
import { Package, Sparkles, Camera } from "lucide-react";

const demos = [
  {
    screen: "/screenshots/demo-wardrobe.png",
    label: "Цифровой гардероб",
    description: "Добавление, хранение, ручной режим",
    icon: Package,
  },
  {
    screen: "/screenshots/demo-constructor.png",
    label: "AI стилист",
    description: "Автоматические луки, помощь со стилем",
    icon: Sparkles,
  },
  {
    screen: "/screenshots/demo-ai.png",
    label: "Виртуальная примерка",
    description: "Примерка образа перед покупкой",
    icon: Camera,
  },
];

export function AppDemoSection() {
  return (
    <section
      id="demo"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-mesh"
      data-testid="app-demo-section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-4">
            ВОЗМОЖНОСТИ
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4"
            data-testid="text-demo-title"
          >
            Всё для идеального образа
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Три главные функции в одном приложении
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
              data-testid={`card-demo-${index}`}
            >
              <IPhoneMockup
                screenshots={[demo.screen]}
                size="lg"
                className="mb-6"
              />
              <div className="flex items-center justify-center gap-2 mb-2">
                <demo.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                <p className="text-lg font-semibold text-foreground">
                  {demo.label}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                {demo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
