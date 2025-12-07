import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  Smartphone,
  TrendingUp,
  Target,
  CheckCircle2,
  BarChart3
} from "lucide-react";

// Данные получены из реального опроса 67 респондентов (декабрь 2025)
const surveyData = {
  totalRespondents: 67,
  demographics: {
    age18to24: 85,
    female: 79,
  },
  timeSpent: {
    lessThan5: 21,
    from5to15: 12,
    from15to30: 54,
    from30to60: 13,
  },
  problems: [
    { text: "Не уверен(а), подойдёт ли по стилю", percent: 40 },
    { text: "Не знаю, как сочетать вещи", percent: 37 },
    { text: "Сомнения в посадке/размере", percent: 25 },
    { text: "Не хватает времени на подбор", percent: 16 },
  ],
  neverUsedApp: 78,
  wantedFeatures: [
    { text: "Помощь со стилем", percent: 58 },
    { text: "Виртуальная примерка на фото", percent: 48 },
    { text: "Автоматические образы от ИИ", percent: 42 },
    { text: "Хранение и поиск по гардеробу", percent: 30 },
  ],
  mainTasks: [
    "Помогать видеть итоговый образ перед покупкой",
    "Экономить время при сборе образа",
    "Не покупать лишние вещи",
  ],
  inspirationSources: {
    socialMedia: 81,
    onlineStores: 45,
    friends: 31,
  },
};

function ProgressBar({ percent, color = "bg-black" }: { percent: number; color?: string }) {
  return (
    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`h-full ${color} rounded-full`}
      />
    </div>
  );
}

export function SurveyResultsSection() {
  return (
    <section
      id="survey"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-gradient-to-b from-background to-muted/20"
      data-testid="pitch-survey-section"
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
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-4">
            <BarChart3 className="w-3 h-3" />
            ИССЛЕДОВАНИЕ РЫНКА
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Результаты опроса целевой аудитории
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы провели опрос среди {surveyData.totalRespondents} представителей нашей целевой аудитории,
            чтобы подтвердить гипотезы и понять реальные боли пользователей
          </p>
        </motion.div>

        {/* Демография - hero карточка */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <Card className="relative overflow-hidden bg-black text-white p-6 lg:p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-white/80 mb-1">Участники опроса</p>
                  <p className="text-4xl font-bold">{surveyData.totalRespondents} человек</p>
                </div>
              </div>
              
              <div className="w-px h-16 bg-white/20 hidden lg:block" />
              
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold">{surveyData.demographics.age18to24}%</p>
                  <p className="text-sm text-white/70">возраст 18-24</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{surveyData.demographics.female}%</p>
                  <p className="text-sm text-white/70">женщины</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 mb-8">
          {/* Время на выбор одежды */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <Card className="h-full p-6 bg-background/80 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100">
                  <Clock className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground">Время на выбор одежды утром</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">15-30 минут</span>
                    <span className="font-medium">{surveyData.timeSpent.from15to30}%</span>
                  </div>
                  <ProgressBar percent={surveyData.timeSpent.from15to30} color="bg-black" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">5-15 минут</span>
                    <span className="font-medium">{surveyData.timeSpent.from5to15}%</span>
                  </div>
                  <ProgressBar percent={surveyData.timeSpent.from5to15} color="bg-gray-600" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">30-60 минут</span>
                    <span className="font-medium">{surveyData.timeSpent.from30to60}%</span>
                  </div>
                  <ProgressBar percent={surveyData.timeSpent.from30to60} color="bg-gray-400" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Менее 5 минут</span>
                    <span className="font-medium">{surveyData.timeSpent.lessThan5}%</span>
                  </div>
                  <ProgressBar percent={surveyData.timeSpent.lessThan5} color="bg-gray-300" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 pt-4 border-t">
                <span className="font-semibold text-foreground">67%</span> тратят более 15 минут каждое утро
              </p>
            </Card>
          </motion.div>

          {/* Главная проблема - большая карточка */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <Card className="h-full p-6 bg-black text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10">
                  <Smartphone className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold">Рыночная возможность</h3>
              </div>
              <div className="text-center py-6">
                <p className="text-6xl font-bold mb-2">{surveyData.neverUsedApp}%</p>
                <p className="text-white/70">никогда не использовали<br />приложения для гардероба</p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-white/60">
                  Огромный неосвоенный рынок — пользователи просто не знают о существующих решениях
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Основные проблемы */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-4"
          >
            <Card className="h-full p-6 bg-background/80 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100">
                  <HelpCircle className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-foreground">Основные трудности при выборе одежды</h3>
              </div>
              <div className="space-y-4">
                {surveyData.problems.map((problem, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{problem.text}</span>
                      <span className="font-medium">{problem.percent}%</span>
                    </div>
                    <ProgressBar percent={problem.percent} color={index === 0 ? "bg-black" : "bg-gray-600"} />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Главная задача */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card className="h-full p-6 bg-gray-50 border-gray-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-200 mb-4">
                <Target className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-foreground mb-4">Что хотят от приложения</h3>
              <ul className="space-y-3">
                {surveyData.mainTasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Желаемые функции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <Card className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-200">
                <Sparkles className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Самые желанные функции</h3>
                <p className="text-sm text-muted-foreground">Что респонденты хотят видеть в приложении</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {surveyData.wantedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/60 rounded-xl p-4 text-center"
                >
                  <p className="text-3xl font-bold text-foreground mb-2">{feature.percent}%</p>
                  <p className="text-sm text-muted-foreground leading-snug">{feature.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Вывод */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card className="p-6 lg:p-8 bg-black text-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 flex-shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold mb-2 text-white/90">Вывод исследования</p>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  Опрос 67 респондентов подтвердил нашу гипотезу: <span className="text-white font-medium">78% целевой аудитории никогда не использовали приложения для управления гардеробом</span>, 
                  при этом 67% тратят более 15 минут каждое утро на выбор одежды. Главные боли — неуверенность в стиле (40%) и неумение сочетать вещи (37%).
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs">
                    ✓ Проблема подтверждена
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs">
                    ✓ 78% — неосвоенный рынок
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs">
                    ✓ 81% вдохновляются соцсетями
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
