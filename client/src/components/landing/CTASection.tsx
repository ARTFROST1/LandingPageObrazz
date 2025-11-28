import { motion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";
import { Button } from "@/components/ui/button";
import { SiApple, SiGoogleplay } from "react-icons/si";

export function CTASection() {
  return (
    <section
      id="cta"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-background"
      data-testid="cta-section"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-8"
            data-testid="text-cta-title"
          >
            Создай свой стиль по-новому
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              data-testid="button-cta-ios"
            >
              <SiApple className="w-5 h-5" />
              Скачать для iOS
            </Button>
            <Button
              variant="outline"
              size="lg"
              data-testid="button-cta-android"
            >
              <SiGoogleplay className="w-5 h-5" />
              Скачать для Android
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <IPhoneMockup
            screenshots={["OBRAZZ", "Ваш стиль", "Каждый день"]}
            autoScroll={true}
            interval={3000}
            size="xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
