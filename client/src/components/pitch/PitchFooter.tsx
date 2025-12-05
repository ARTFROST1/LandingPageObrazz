import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { SiVk, SiTelegram } from "react-icons/si";
import { Mail, ExternalLink, Target, Users, Handshake, Rocket } from "lucide-react";

const goals = [
  {
    icon: Rocket,
    title: "Успешный запуск MVP",
    description: "01.01.2026",
  },
  {
    icon: Target,
    title: "Подача на гранты",
    description: "ФРИИ, РФРИТ, Skolkovo",
  },
  {
    icon: Users,
    title: "1000 пользователей",
    description: "В первые 6 месяцев",
  },
];

const lookingFor = [
  "Менторинг от fashion-tech экспертов",
  "Партнерства с инфлюенсерами",
  "Инвесторов после PMF (Q2-Q3 2026)",
];

export function PitchFooter() {
  return (
    <footer
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-footer"
      data-testid="pitch-footer"
    >
      <div className="max-w-6xl mx-auto">
        {/* The Ask */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-4">
            НАШИ ЦЕЛИ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Что нам нужно сейчас
          </h2>
        </motion.div>

        {/* Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-background/80 backdrop-blur-sm glass-card text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm">
                  <goal.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {goal.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {goal.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Looking for */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 bg-black text-white">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Handshake className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Ищем</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {lookingFor.map((item, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-white/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Card className="p-8 lg:p-12 bg-background/80 backdrop-blur-sm glass-card max-w-3xl mx-auto">
            <p className="text-2xl lg:text-3xl font-medium text-foreground mb-6 leading-relaxed">
              "Каждый заслуживает гардероб, который вдохновляет его каждый день"
            </p>
            <div className="w-16 h-0.5 bg-foreground/20 mx-auto mb-6" />
            <p className="text-muted-foreground mb-2">Наша миссия:</p>
            <p className="text-foreground font-medium">
              Сделать моду доступной, организованной и вдохновляющей для каждого
            </p>
          </Card>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/logo.png" 
              alt="OBRAZZ Logo" 
              className="w-12 h-12 rounded-xl shadow-md"
            />
            <h3 className="text-3xl font-bold tracking-tight text-foreground">
              OBRAZZ
            </h3>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Давайте создадим будущее моды вместе
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href="mailto:frostmoontech@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-black/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              frostmoontech@gmail.com
            </a>
            <a
              href="https://vk.com/obrazzapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-sm font-medium hover:bg-black/10 transition-colors"
            >
              <SiVk className="w-4 h-4" />
              VK
            </a>
            <a
              href="https://t.me/MaykopTech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full text-sm font-medium hover:bg-black/10 transition-colors"
            >
              <SiTelegram className="w-4 h-4" />
              Telegram
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link href="/">
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                На главную страницу
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">
            Спасибо за внимание! 🚀
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} OBRAZZ. Разработано{" "}
            <a
              href="https://frostmoon-tech.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              FrostMoon Tech
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
