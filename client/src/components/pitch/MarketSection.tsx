import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Globe, TrendingUp, MapPin, Users } from "lucide-react";

const marketData = [
  {
    icon: Globe,
    title: "$3.5 млрд",
    subtitle: "Глобальный рынок",
    description: "Fashion-tech приложения (2025)",
  },
  {
    icon: TrendingUp,
    title: "+25-30%",
    subtitle: "Ежегодный рост",
    description: "Ускоренный ИИ-фокус в моде",
  },
  {
    icon: MapPin,
    title: "50M+",
    subtitle: "Потенциал в России",
    description: "Женщины 14-55 лет (Росстат)",
  },
  {
    icon: Users,
    title: "85-90%",
    subtitle: "Женская аудитория",
    description: "Основной сегмент пользователей",
  },
];

const targetAudience = {
  demographics: [
    { label: "Пол", value: "Женский (80%)" },
    { label: "Возраст", value: "14-55 лет" },
    { label: "География", value: "Россия, СНГ" },
    { label: "Интересы", value: "Мода, Instagram, Pinterest, TikTok" },
  ],
  persona: {
    name: "Анна, 24 года",
    location: "Москва",
    job: "Маркетолог",
    traits: [
      "Активна в Instagram, TikTok, Pinterest",
      "Покупает онлайн (Lamoda, Asos)",
      "Следит за трендами",
      "Средний чек покупки: 3-5K₽",
    ],
    pain: "Полный шкаф, но нечего надеть. Хочу организовать гардероб и найти новые сочетания",
  },
};

export function MarketSection() {
  return (
    <section
      id="market"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-subtle"
      data-testid="pitch-market-section"
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
            РЫНОК
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Свободная ниша в России
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Нет сильного русскоязычного конкурента с современным ИИ
          </p>
        </motion.div>

        {/* Market metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {marketData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                  <item.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {item.title}
                </p>
                <p className="text-sm font-medium text-foreground mb-1">
                  {item.subtitle}
                </p>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Объём рынка: Общий → Доступный → Целевой */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 bg-black text-white">
            <h3 className="text-xl font-semibold mb-2 text-center">Объём рынка</h3>
            <p className="text-sm text-white/60 text-center mb-6">Общий → Доступный → Целевой</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white/20 flex items-center justify-center">
                  <span className="text-sm font-bold">Общий</span>
                </div>
                <p className="text-2xl font-bold mb-1">50M+</p>
                <p className="text-sm text-white/70">Женщины 14-55 лет в РФ</p>
                <p className="text-xs text-white/50 mt-1">Данные Росстат 2024</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white/40 flex items-center justify-center">
                  <span className="text-sm font-bold">Доступный</span>
                </div>
                <p className="text-2xl font-bold mb-1">2-3M</p>
                <p className="text-sm text-white/70">Активные пользователи fashion-приложений</p>
                <p className="text-xs text-white/50 mt-1">~5% от общего рынка</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white/60 flex items-center justify-center">
                  <span className="text-sm font-bold">Целевой</span>
                </div>
                <p className="text-2xl font-bold mb-1">33K</p>
                <p className="text-sm text-white/70">Цель первого года</p>
                <p className="text-xs text-white/50 mt-1">~1% от доступного рынка</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Target Audience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Demographics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card">
              <h3 className="text-lg font-semibold mb-4">Демография</h3>
              <div className="space-y-4">
                {targetAudience.demographics.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Persona */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card">
              <h3 className="text-lg font-semibold mb-4">Портрет пользователя</h3>
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Users className="w-7 h-7 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{targetAudience.persona.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {targetAudience.persona.location} • {targetAudience.persona.job}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {targetAudience.persona.traits.map((trait, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                    {trait}
                  </li>
                ))}
              </ul>
              <div className="p-3 bg-black/5 rounded-lg">
                <p className="text-sm text-foreground italic">"{targetAudience.persona.pain}"</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
