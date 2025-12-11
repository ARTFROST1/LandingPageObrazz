import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Megaphone, Handshake, ArrowRight } from "lucide-react";

const strategies = [
  {
    icon: Target,
    title: "Контент-маркетинг",
    description: "Органический охват через ценный контент",
    items: [
      "Короткие видео про стиль и лайфхаки",
      "Челллендж #ОбраззДня",
      "YouTube гайды: как собрать капсульный гардероб",
      "Pinterest доски с образами и трендами",
    ],
  },
  {
    icon: Megaphone,
    title: "Целевая реклама",
    description: "Таргетированное привлечение пользователей",
    items: [
      "VK/Yandex Ads: активные онлайн-покупатели",
      "YouTube Pre-roll для fashion-каналов",
      "Ретаргетинг установивших, но не зарегистрированных",
    ],
  },
  {
    icon: Handshake,
    title: "Коллаборации",
    description: "Партнерства для ускоренного роста",
    items: [
      "Fashion-блогеры (50К+ подписчиков)",
      "Бренды одежды для совместных акций",
      "Стилисты и шоурумы (реферальная программа)",
      "Telegram-каналы о моде и шопинге",
    ],
  },
];

export function GoToMarketSection() {
  return (
    <section
      id="go-to-market"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-subtle"
      data-testid="pitch-go-to-market-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-4">
            ВЫХОД НА РЫНОК
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Стратегия привлечения пользователей
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексный подход через контент, рекламу и партнерства
          </p>
        </motion.div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card">
                {/* Icon & Title */}
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                  <strategy.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{strategy.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{strategy.description}</p>

                {/* Items List */}
                <ul className="space-y-3">
                  {strategy.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                      <ArrowRight className="w-4 h-4 text-foreground/60 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
