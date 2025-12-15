import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Mockup {
  image: string;
  description: string;
}

interface MockupSubsection {
  title: string;
  mockups: Mockup[];
}

interface Section {
  title: string;
  subtitle: string;
  subsections?: MockupSubsection[];
  mockups?: Mockup[];
}

const sections: Section[] = [
  {
    title: "Управление гардеробом",
    subtitle: "Добавляйте одежду в цифровой гардероб удобным способом",
    mockups: [
      {
        image: "/screenshots/new/mockap_1.png",
        description: "Сканирование через камеру смартфона",
      },
      {
        image: "/screenshots/new/mockap_2.png",
        description: "Загрузка изображений из галереи",
      },
      {
        image: "/screenshots/new/mockap_3.png",
        description: "Добавление вещей с любого сайта",
      },
    ],
  },
  {
    title: "Сборка образов",
    subtitle: "Создавайте образы из своего гардероба",
    mockups: [
      {
        image: "/screenshots/new/mockup_4.png",
        description: "Карусель выбора элементов",
      },
      {
        image: "/screenshots/new/mockup_5.png",
        description: "Рабочая область образа и фон",
      },
      {
        image: "/screenshots/new/mockup_6.png", // Placeholder for future mockup
        description: "Параметры для удобного поиска",
      },
    ],
  },
  {
    title: "Возможности искусственного интеллекта",
    subtitle: "Используйте искусственный интеллект, чтобы получить готовый образ и увидеть результат заранее",
    subsections: [
      {
        title: "Визуальная примерка",
        mockups: [
          {
            image: "/screenshots/new/mockup_7.png",
            description: "Загрузка фотографии пользователя",
          },
          {
            image: "/screenshots/new/mockup_8.png",
            description: "Выбор готового образа",
          },
          {
            image: "/screenshots/new/mockup_9.png",
            description: "Финальный результат",
          },
        ],
      },
      {
        title: "AI-стилист",
        mockups: [
          {
            image: "/screenshots/new/mockup_10.png",
            description: "Настройка параметров",
          },
          {
            image: "/screenshots/new/mockup_11.png",
            description: "Готовый образ от AI",
          },
          {
            image: "/screenshots/new/mockup_12.png",
            description: "Визуализация результата",
          },
        ],
      },
    ],
  },
];

export function MockupsSection() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="py-section lg:py-section-lg px-6 lg:px-12 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            onClick={() => setIsVisible(!isVisible)}
            className="gap-2"
          >
            {isVisible ? (
              <>
                Скрыть скриншоты
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Показать скриншоты
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>

        {/* Collapsible Content */}
        <motion.div
          initial={false}
          animate={{
            height: isVisible ? "auto" : 0,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="space-y-24">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
                    {section.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {section.subtitle}
                  </p>
                </div>

                {/* If section has subsections (like AI section) */}
                {section.subsections ? (
                  <div className="space-y-16">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        {/* Subsection Title */}
                        <h3 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-8">
                          {subsection.title}
                        </h3>

                        {/* Mockups Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                          {subsection.mockups.map((mockup, mockupIndex) => (
                            <motion.div
                              key={mockupIndex}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: mockupIndex * 0.1 }}
                              className="flex flex-col items-center"
                            >
                              {/* Mockup Image */}
                              <div className="relative w-full max-w-[220px] mb-4">
                                <img
                                  src={mockup.image}
                                  alt={mockup.description}
                                  className="w-full h-auto"
                                  loading="lazy"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                  }}
                                />
                              </div>

                              {/* Mockup Description */}
                              <p className="text-center text-sm text-muted-foreground max-w-xs">
                                {mockup.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Regular section without subsections
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {section.mockups?.map((mockup, mockupIndex) => (
                      <motion.div
                        key={mockupIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: mockupIndex * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        {/* Mockup Image */}
                        <div className="relative w-full max-w-[220px] mb-4">
                          <img
                            src={mockup.image}
                            alt={mockup.description}
                            className="w-full h-auto"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                        </div>

                        {/* Mockup Description */}
                        <p className="text-center text-sm text-muted-foreground max-w-xs">
                          {mockup.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
