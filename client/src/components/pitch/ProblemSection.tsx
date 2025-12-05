import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shirt, Clock, Heart, AlertCircle, Package, Calendar, Zap, TrendingDown } from "lucide-react";

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-subtle"
      data-testid="pitch-problem-section"
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
            ПРОБЛЕМА
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Ученые подсчитали: женщины тратят 6 месяцев жизни на выбор одежды
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Исследование Marks & Spencer показало масштаб проблемы, с которой сталкивается каждая женщина
          </p>
        </motion.div>

        {/* Hero stat - большая карточка */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <Card className="relative overflow-hidden bg-black text-white p-6 lg:p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-3">
                  <Clock className="w-3 h-3" />
                  Главная статистика
                </div>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">17 мин</p>
                <p className="text-base text-white/70">каждое утро на выбор одежды</p>
              </div>
              
              <div className="w-px h-20 bg-white/20 hidden lg:block" />
              
              <div className="text-center lg:text-right">
                <p className="text-3xl sm:text-4xl font-bold text-white/90 mb-2">= 6 месяцев</p>
                <p className="text-sm text-white/60">потрачено за всю жизнь (18-60 лет)</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6 mb-8">
          {/* Большая карточка - стресс */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4"
          >
            <Card className="h-full p-8 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm border-border/50">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                  <Heart className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <p className="text-5xl font-bold text-foreground mb-2">62%</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    испытывают стресс и раздражение
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Гнев и ярость при выборе одежды — частые спутники утренних сборов. 
                    Эмоциональное истощение накапливается день за днём.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Маленькая карточка - опоздания */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="h-full p-6 bg-background/80 backdrop-blur-sm border-border/50 flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 mb-4">
                <Calendar className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground mb-1">10%</p>
                <p className="text-sm font-medium text-muted-foreground">опаздывают на работу</p>
                <p className="text-xs text-muted-foreground/70 mt-2">из-за выбора одежды</p>
              </div>
            </Card>
          </motion.div>

          {/* Маленькая карточка - планы */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="h-full p-6 bg-background/80 backdrop-blur-sm border-border/50 flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 mb-4">
                <AlertCircle className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground mb-1">14%</p>
                <p className="text-sm font-medium text-muted-foreground">меняют планы</p>
                <p className="text-xs text-muted-foreground/70 mt-2">из-за проблем с нарядом</p>
              </div>
            </Card>
          </motion.div>

          {/* Средняя карточка - ссоры */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card className="h-full p-6 bg-background/80 backdrop-blur-sm border-border/50 flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 mb-4">
                <Zap className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground mb-1">1 из 5</p>
                <p className="text-sm font-medium text-muted-foreground">ссорится с партнером</p>
                <p className="text-xs text-muted-foreground/70 mt-2">из-за долгих раздумий</p>
              </div>
            </Card>
          </motion.div>

          {/* Карточка с иконкой - неиспользуемые вещи */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2"
          >
            <Card className="h-full p-6 bg-background/80 backdrop-blur-sm border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                  <Shirt className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground mb-1">11 вещей</p>
                  <p className="text-sm text-muted-foreground">с бирками — никогда не надевались</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Горизонтальные карточки статистики */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-6 bg-background/60 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <Package className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-foreground">152</p>
                    <p className="text-sm text-muted-foreground">предмета в гардеробе</p>
                  </div>
                  <p className="text-xs text-muted-foreground/70 mt-1">Но используется только 44% регулярно</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="p-6 bg-background/60 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <TrendingDown className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-foreground">56%</p>
                    <p className="text-sm text-muted-foreground">вещей не используется</p>
                  </div>
                  <p className="text-xs text-muted-foreground/70 mt-1">Потраченные деньги и место впустую</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Key insight - вывод */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-6 lg:p-8 bg-black text-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 flex-shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold mb-2 text-white/90">Вывод исследования</p>
                <p className="text-sm text-white/70 leading-relaxed">
                  Несмотря на полный шкаф (152 предмета), женщины ежедневно сталкиваются с парадоксом — они не находят подходящей одежды. Это не только тратит время, но и вызывает эмоциональный стресс, влияет на отношения и даже приводит к опозданиям на работу.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
