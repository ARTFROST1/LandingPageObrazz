import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, Rocket } from "lucide-react";

const financialProjections = [
  {
    period: "Месяц 1-3",
    users: "100",
    paying: "4",
    mrr: "2,000₽",
    status: "Убыток",
    statusColor: "text-red-500",
  },
  {
    period: "Месяц 4-6",
    users: "1,000",
    paying: "40",
    mrr: "19,500₽",
    status: "✅ Прибыль",
    statusColor: "text-green-600",
  },
  {
    period: "Месяц 7-12",
    users: "2,000",
    paying: "100",
    mrr: "48,500₽",
    status: "Рост",
    statusColor: "text-blue-500",
  },
];

const yearSummary = [
  { label: "Стартовый капитал", value: "15,000₽" },
  { label: "Чистая прибыль за год", value: "172,500₽" },
  { label: "ROI за год", value: "1,150%" },
  { label: "Окупаемость", value: "7 месяцев" },
];

const costs = {
  startup: [
    { item: "Apple Developer Account", cost: "9,900₽" },
    { item: "Google Play Developer", cost: "2,500₽" },
    { item: "Pixian API (удаление фона)", cost: "500₽" },
    { item: "Хостинг (2 месяца)", cost: "2,000₽" },
  ],
  monthly: [
    { item: "Apple Developer", cost: "825₽" },
    { item: "Google Play", cost: "208₽" },
    { item: "Хостинг (Supabase)", cost: "1,000₽" },
    { item: "DeepSeek ИИ API", cost: "500-1,000₽" },
    { item: "Google Nano Banana API (примерка)", cost: "1,000-2,000₽" },
    { item: "Pixian API", cost: "500₽" },
    { item: "Маркетинг", cost: "10,000₽" },
  ],
};

export function FinancialsSection() {
  return (
    <section
      id="financials"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-section"
      data-testid="pitch-financials-section"
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
            ФИНАНСЫ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Быстрый рост, ранняя окупаемость
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Минимальные вложения, быстрая отдача
          </p>
        </motion.div>

        {/* Year summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="p-8 bg-black text-white">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Rocket className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Год 1 — Прогноз</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {yearSummary.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl lg:text-4xl font-bold mb-1">{item.value}</p>
                  <p className="text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Financial projections table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="overflow-hidden bg-background/80 backdrop-blur-sm glass-card">
            <div className="p-6 border-b border-border flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">
                Прогноз роста MRR
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-black/5">
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Период</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-foreground">Пользователи</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-foreground">Платных</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-foreground">MRR</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-foreground">Статус</th>
                  </tr>
                </thead>
                <tbody>
                  {financialProjections.map((row, index) => (
                    <tr key={index} className="border-b border-border last:border-0">
                      <td className="px-4 py-4 text-sm font-medium text-foreground">{row.period}</td>
                      <td className="px-4 py-4 text-center text-sm text-muted-foreground">{row.users}</td>
                      <td className="px-4 py-4 text-center text-sm text-muted-foreground">{row.paying}</td>
                      <td className="px-4 py-4 text-center text-sm font-semibold text-foreground">{row.mrr}</td>
                      <td className={`px-4 py-4 text-center text-sm font-medium ${row.statusColor}`}>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-black/5 text-center">
              <p className="text-sm text-foreground font-medium">
                <Target className="w-4 h-4 inline mr-2" />
                Точка безубыточности: Месяц 4 (Апрель 2026)
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Costs breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Стартовые затраты</h3>
              </div>
              <div className="space-y-3">
                {costs.startup.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{item.item}</span>
                    <span className="text-sm font-medium text-foreground">{item.cost}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                <span className="font-semibold text-foreground">Итого</span>
                <span className="font-bold text-foreground">~15,000₽</span>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-foreground" />
                <h3 className="text-lg font-semibold text-foreground">Ежемесячные расходы</h3>
              </div>
              <div className="space-y-3">
                {costs.monthly.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{item.item}</span>
                    <span className="text-sm font-medium text-foreground">{item.cost}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                <span className="font-semibold text-foreground">Итого</span>
                <span className="font-bold text-foreground">~15,000₽/мес</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
