import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Check, X, Minus } from "lucide-react";

const competitors = [
  {
    name: "Whering",
    country: "🇬🇧 UK",
    users: "9M+",
    rating: "4.7/5",
    price: "Бесплатно",
    pros: ["Социальная сеть", "Shuffle функция", "Batch upload"],
    cons: ["Устаревший UI", "Нет ИИ-генерации", "Только английский"],
  },
  {
    name: "Acloset",
    country: "🇨🇳 China",
    users: "4M+",
    rating: "4.3/5",
    price: "£30-120/год",
    pros: ["ИИ через чат", "Персональный цветовой анализ", "Рекомендации по погоде"],
    cons: ["Лимит 100 вещей", "Очень дорого", "Сложный UX"],
  },
  {
    name: "Fits",
    country: "🇩🇪 Germany",
    users: "50K+",
    rating: "4.7/5",
    price: "$3.33/мес",
    pros: ["Современный UI", "Отличное удаление фона", "26 языков"],
    cons: ["Нет ИИ-подборки", "Нет социальной сети", "Ограниченная статистика"],
  },
];

const comparisonMatrix = [
  { feature: "ИИ-генерация образов", obrazz: true, whering: false, acloset: "partial", fits: false },
  { feature: "ИИ-примерка на фото", obrazz: true, whering: false, acloset: false, fits: false },
  { feature: "Ручной конструктор", obrazz: true, whering: true, acloset: true, fits: true },
  { feature: "Кастомные фоны", obrazz: true, whering: false, acloset: false, fits: false },
  { feature: "Современный UI", obrazz: true, whering: false, acloset: "partial", fits: true },
  { feature: "Русский язык", obrazz: true, whering: false, acloset: false, fits: true },
  { feature: "Локальное хранение", obrazz: true, whering: false, acloset: false, fits: false },
  { feature: "Доступная цена", obrazz: true, whering: true, acloset: false, fits: true },
  { feature: "iOS + Android", obrazz: true, whering: true, acloset: true, fits: true },
];

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="w-4 h-4 text-green-600" />;
  }
  if (value === false) {
    return <X className="w-4 h-4 text-red-500" />;
  }
  return <Minus className="w-4 h-4 text-yellow-500" />;
}

export function CompetitorsSection() {
  return (
    <section
      id="competitors"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-section"
      data-testid="pitch-competitors-section"
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
            КОНКУРЕНТЫ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Анализ топ-конкурентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы изучили слабости конкурентов и устранили их в нашем продукте
          </p>
        </motion.div>

        {/* Competitor cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {competitors.map((competitor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{competitor.name}</h3>
                    <p className="text-sm text-muted-foreground">{competitor.country}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{competitor.users}</p>
                    <p className="text-xs text-muted-foreground">⭐ {competitor.rating}</p>
                  </div>
                </div>
                
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-sm text-muted-foreground">Цена:</p>
                  <p className="font-medium text-foreground">{competitor.price}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-green-600 mb-2">Плюсы</p>
                    <ul className="space-y-1">
                      {competitor.pros.map((pro, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-600 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-red-500 mb-2">Минусы</p>
                    <ul className="space-y-1">
                      {competitor.cons.map((con, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                          <X className="w-3 h-3 text-red-500 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison matrix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden bg-background/80 backdrop-blur-sm glass-card">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground text-center">
                Сравнительная таблица функций
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-black/5">
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Функция</th>
                    <th className="px-4 py-3 text-center text-sm font-bold text-foreground bg-black/10">OBRAZZ</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Whering</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Acloset</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">Fits</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonMatrix.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-black/5">
                      <td className="px-4 py-3 text-sm text-foreground">{row.feature}</td>
                      <td className="px-4 py-3 text-center bg-black/5">
                        <div className="flex justify-center">
                          <FeatureIcon value={row.obrazz} />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={row.whering} />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={row.acloset} />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center">
                          <FeatureIcon value={row.fits} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-black/5">
                    <td className="px-4 py-3 text-sm font-semibold text-foreground">Итого</td>
                    <td className="px-4 py-3 text-center font-bold text-foreground bg-black/10">9/9 ✅</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">4/9</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">3/9</td>
                    <td className="px-4 py-3 text-center text-sm text-muted-foreground">5/9</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
