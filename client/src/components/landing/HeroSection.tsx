import { motion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { SiApple, SiGoogleplay } from "react-icons/si";

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
      className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-20 bg-background"
      data-testid="hero-section"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
          data-testid="text-brand-name"
        >
          OBRAZZ
        </h1>
        <p
          className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4"
          data-testid="text-tagline"
        >
          AI-powered персональный гардероб
        </p>
        <p
          className="text-base sm:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          data-testid="text-description"
        >
          Создавай стильные образы вручную или с помощью AI, организуй гардероб,
          вдохновляйся лентой.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <IPhoneMockup
          screenshots={["Гардероб", "Конструктор образов", "AI-подборка"]}
          autoScroll={true}
          interval={3500}
          size="xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          size="lg"
          data-testid="button-download-ios"
        >
          <SiApple className="w-5 h-5" />
          App Store
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => scrollToSection("problem")}
          data-testid="button-learn-more"
        >
          Узнать больше
          <ChevronDown className="w-4 h-4" />
        </Button>
      </motion.div>
    </section>
  );
}
