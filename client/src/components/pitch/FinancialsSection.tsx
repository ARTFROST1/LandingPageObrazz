import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, Rocket, CheckCircle } from "lucide-react";

const financialProjections = [
  {
    period: "Месяц 1-3",
    users: "4,700",
    paying: "482",
    mrr: "222K₽",
    status: "Инвестиции",
    statusColor: "text-yellow-600",
  },
  {
    period: "Месяц 4-6",
    users: "11,100",
    paying: "1,147",
    mrr: "528K₽",
    status: "✅ Прибыль",
    statusColor: "text-green-600",
  },
  {
    period: "Месяц 7-12",
    users: "33,200",
    paying: "3,434",
    mrr: "1.58M₽",
    status: "Масштабирование",
    statusColor: "text-blue-500",
  },
];

const yearSummary = [
  { label: "Стартовые инвестиции", value: "187.4K₽" },
  { label: "Чистая прибыль за год", value: "1.52M₽" },
  { label: "ROI за год", value: "813%" },
  { label: "Окупаемость", value: "5 мес" },
];

const costs = {
  startup: [
    { item: "Разработчик (единоразово)", cost: "100,000₽" },
    { item: "Дизайнер (единоразово)", cost: "75,000₽" },
    { item: "Apple Developer Account", cost: "9,900₽" },
    { item: "Google Play Developer", cost: "2,500₽" },
  ],
  monthly: [
    { item: "Маркетолог (ЗП)", cost: "50,000₽" },
    { item: "Supabase (хостинг)", cost: "2,500₽" },
    { item: "Apple Developer (амортизация)", cost: "825₽" },
    { item: "Соцсети: инфлюенсеры", cost: "145,000₽" },
    { item: "Таргетированная реклама", cost: "50,000₽" }
  ],
};

const keyMetrics = [
  { label: "Точка безубыточности", value: "~845", unit: "платящих" },
  { label: "Средняя прибыль/подписчик", value: "294₽", unit: "/мес" },
  { label: "Комиссия YooMoney", value: "~4%", unit: "от MRR" },
  { label: "Конверсия Free→Paid", value: "10%", unit: "цель" },
];

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
            Выход на прибыль к 5 месяцу, ROI 813% за первый год
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

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="p-4 bg-background/80 backdrop-blur-sm glass-card text-center">
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.unit}</p>
                <p className="text-sm font-medium text-foreground mt-1">{metric.label}</p>
              </Card>
            ))}
          </div>
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
                Прогноз роста выручки (MRR)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-black/5">
                    <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Период</th>
                    <th className="px-4 py-3 text-center text-sm font-medium text-foreground">Всего польз.</th>
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
                Точка безубыточности: Месяц 5 (~845 платящих)
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Costs breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
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
                <span className="font-bold text-foreground">~187,400₽</span>
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
                <span className="font-bold text-foreground">~248,325₽/мес</span>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* API Costs - Pay as you go */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 bg-background/60 backdrop-blur-sm border-border/50">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Переменные затраты — API (по мере использования)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 rounded-lg bg-black/5">
                <p className="text-xs text-muted-foreground mb-1">Mistral Small</p>
                <p className="text-lg font-bold text-foreground">0.0018₽</p>
                <p className="text-xs text-muted-foreground">описание вещи</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-black/5">
                <p className="text-xs text-muted-foreground mb-1">Pixian API</p>
                <p className="text-lg font-bold text-foreground">0.08₽</p>
                <p className="text-xs text-muted-foreground">удаление фона</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-black/5">
                <p className="text-xs text-muted-foreground mb-1">Mistral Nemo</p>
                <p className="text-lg font-bold text-foreground">0.03₽</p>
                <p className="text-xs text-muted-foreground">ИИ-стилист (100 вещей)</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-black/5">
                <p className="text-xs text-muted-foreground mb-1">Gemini 2.5 Flash</p>
                <p className="text-lg font-bold text-foreground">3.00₽</p>
                <p className="text-xs text-muted-foreground">ИИ-примерка</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
