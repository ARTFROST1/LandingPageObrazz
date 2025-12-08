import { motion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";
import { Button } from "@/components/ui/button";
import { ChevronDown, Presentation, Star, Download, Users } from "lucide-react";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { Link } from "wouter";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-20 gradient-hero relative"
      data-testid="hero-section"
    >
      {/* Pitch page link */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 right-6"
      >
        <Link href="/pitch">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-2">
            <Presentation className="w-4 h-4" />
            <span className="hidden sm:inline">Pitch Deck</span>
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
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm mb-8"
        >
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">Рейтинг 4.9</span>
          <span className="w-px h-4 bg-black/10" />
          <span className="text-sm text-muted-foreground">1K+ скачиваний</span>
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
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            data-testid="text-brand-name"
          >
            OBRAZZ
          </h1>
        </div>
        
        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4"
          data-testid="text-tagline"
        >
          AI в твой гардероб
        </h2>
        <p
          className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          data-testid="text-description"
        >
          Создавай стильные образы вручную или с помощью AI за секунды.
          <br className="hidden sm:block" />
          Организуй гардероб. Вдохновляйся лентой.
        </p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <IPhoneMockup
          screenshots={[
            "/screenshots/hero-1.png",
            "/screenshots/hero-2.png",
            "/screenshots/hero-3.png"
          ]}
          autoScroll={true}
          interval={3500}
          size="xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            size="lg"
            className="gap-2 px-6"
            data-testid="button-download-ios"
          >
            <SiApple className="w-5 h-5" />
            App Store
          </Button>
          <Button
            size="lg"
            className="gap-2 px-6"
            data-testid="button-download-android"
          >
            <SiGoogleplay className="w-5 h-5" />
            Google Play
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 px-6"
            data-testid="button-download-rustore"
          >
            <Download className="w-5 h-5" />
            RuStore
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection("problem")}
          className="gap-2 text-muted-foreground hover:text-foreground"
          data-testid="button-learn-more"
        >
          Узнать больше
          <ChevronDown className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
