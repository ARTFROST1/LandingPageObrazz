import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Rocket, Target, Globe, TrendingUp, Check } from "lucide-react";

const roadmapItems = [
  {
    quarter: "2026 Q1",
    title: "ЗАПУСК MVP",
    date: "01.01.2026",
    icon: Rocket,
    items: [
      "Публикация в App Store и Google Play",
      "Привлечение первых 100 пользователей",
      "Сбор фидбека и исправление багов",
    ],
    current: true,
  },
  {
    quarter: "2026 Q2",
    title: "МАСШТАБИРОВАНИЕ",
    date: "Апрель - Июнь 2026",
    icon: TrendingUp,
    items: [
      "1,000 пользователей",
      "Точка безубыточности",
      "Product-Market Fit",
      "Подача на гранты",
    ],
    current: false,
  },
  {
    quarter: "2026 Q3-Q4",
    title: "РАСШИРЕНИЕ",
    date: "Июль - Декабрь 2026",
    icon: Globe,
    items: [
      "English версия",
      "10K+ пользователей",
      "Привлечение инвесторов",
      "V2.0 функции",
    ],
    current: false,
  },
  {
    quarter: "2027+",
    title: "СТРАТЕГИЯ ВЫХОДА",
    date: "Опционально",
    icon: Target,
    items: [
      "Оценка: $500K-1M",
      "Продажа бизнеса",
      "Международная экспансия",
    ],
    current: false,
  },
];

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-subtle"
      data-testid="pitch-roadmap-section"
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
            ДОРОЖНАЯ КАРТА
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Путь к успеху
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Четкий план с реалистичными этапами
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`p-6 h-full ${
                  item.current
                    ? "bg-black text-white"
                    : "bg-background/80 backdrop-blur-sm glass-card"
                }`}
              >
                <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-xl ${
                  item.current 
                    ? "bg-white/10" 
                    : "bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm"
                }`}>
                  <item.icon className={`w-6 h-6 ${item.current ? "text-white" : "text-foreground"}`} strokeWidth={1.5} />
                </div>
                
                <div className="mb-4">
                  <p className={`text-xs font-medium mb-1 ${item.current ? "text-white/60" : "text-muted-foreground"}`}>
                    {item.quarter}
                  </p>
                  <h3 className={`text-lg font-semibold ${item.current ? "text-white" : "text-foreground"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm ${item.current ? "text-white/70" : "text-muted-foreground"}`}>
                    {item.date}
                  </p>
                </div>

                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${item.current ? "text-white/80" : "text-muted-foreground"}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${item.current ? "text-white/60" : "text-foreground/40"}`} />
                      {listItem}
                    </li>
                  ))}
                </ul>

                {item.current && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-white/70">Текущий этап</span>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
