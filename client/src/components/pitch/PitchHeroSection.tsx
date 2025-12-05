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
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">Презентация 2025</span>
        </motion.div>

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
          ИИ-powered персональный гардероб
        </p>
        
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
          Где каждая вещь находит свой идеальный образ
        </p>

        <p className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">
          Мобильное приложение для создания и организации персонального гардероба 
          с функциями ручного и ИИ-подбора стильных образов
        </p>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
        >
          {[
            { label: "Старт MVP", value: "Январь 2026" },
            { label: "Целевая аудитория", value: "2-3M" },
            { label: "Бизнес-модель", value: "Freemium → Premium" },
            { label: "Окупаемость", value: "~7 мес" },
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{metric.value}</p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
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
      </motion.div>
    </section>
  );
}
