import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

export function PitchHeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="pitch-hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-20 gradient-hero"
      data-testid="pitch-hero-section"
    >
      {/* Navigation back to main */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6"
      >
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            ← На главную
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Logo and Brand */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div 
              className="absolute inset-0 blur-2xl opacity-30 rounded-3xl"
              style={{ background: "radial-gradient(circle, rgba(0,0,0,0.3), transparent)" }}
            />
            <img 
              src="/logo.png" 
              alt="OBRAZZ Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-xl relative"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.1)"
              }}
            />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            OBRAZZ
          </h1>
        </div>
        
        <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4">
          ИИ персональный гардероб
        </p>
        
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          Где каждая вещь находит свой идеальный образ
        </p>

        <p className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-8 leading-relaxed">
          Мобильное приложение для создания и организации персонального гардероба 
          с функциями ручного и ИИ-подбора стильных образов
        </p>


        {/* Key metrics - hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
        >
          {[
            { 
              label: "Проблема", 
              value: "Нечего надеть", 
              detail: "женщины тратят на выбор одежды"
            },
            { 
              label: "Решение", 
              value: "ИИ + ручной подбор", 
              detail: "создание образов за секунды"
            },
            { 
              label: "Рынок", 
              value: "2-3 млн женщин", 
              detail: "без конкурента в России"
            },
          ].map((metric, index) => (
            <div key={index} className="text-center p-4 rounded-2xl bg-black/5">
              <span className="text-2xl mb-2 block">{metric.emoji}</span>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{metric.label}</p>
              <p className="text-xl sm:text-2xl font-bold text-foreground mb-1">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={() => scrollToSection("problem")}
          className="group"
        >
          Начать презентацию
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </Button>

        <div className="mb-20" />
      </motion.div>
<div className="mb-20" />
        {/* Team members */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-3">Презентуют</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-sm font-medium text-foreground/80">Артемий Морозов</span>
            <span className="w-1 h-1 bg-foreground/30 rounded-full hidden sm:block" />
            <span className="text-sm font-medium text-foreground/80">Салим Сокуров</span>
            <span className="w-1 h-1 bg-foreground/30 rounded-full hidden sm:block" />
            <span className="text-sm font-medium text-foreground/80">Магамед Энгиноев</span>
          </div>
        </motion.div>

    </section>
  );
}
