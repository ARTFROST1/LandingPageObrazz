import { motion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";

const demos = [
  {
    screen: "/screenshots/demo-wardrobe.png",
    label: "Каталог вещей",
  },
  {
    screen: "/screenshots/demo-constructor.png",
    label: "Drag & Drop редактор",
  },
  {
    screen: "/screenshots/demo-ai.png",
    label: "AI-стилист",
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
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
            data-testid="text-demo-title"
          >
            Приложение, созданное для
            <br />
            визуального мышления
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
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
              <p className="text-base font-medium text-muted-foreground">
                {demo.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
