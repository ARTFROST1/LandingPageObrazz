import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { Sparkles, ArrowRight, Download } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="cta"
      className="py-section lg:py-section-lg px-6 lg:px-12 gradient-cta"
      data-testid="cta-section"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">Начни сегодня бесплатно</span>
          </motion.div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4"
            data-testid="text-cta-title"
          >
            Создай свой стиль
            <br />
            <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">по-новому</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Присоединяйся к тысячам пользователей, которые уже организовали свой гардероб
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <Button
              size="lg"
              className="gap-2 px-6"
              data-testid="button-cta-ios"
            >
              <SiApple className="w-5 h-5" />
              App Store
            </Button>
            <Button
              size="lg"
              className="gap-2 px-6"
              data-testid="button-cta-android"
            >
              <SiGoogleplay className="w-5 h-5" />
              Google Play
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-6"
              data-testid="button-cta-rustore"
            >
              <Download className="w-5 h-5" />
              RuStore
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Бесплатно для скачивания • Без регистрации для старта
          </p>
        </motion.div>
      </div>
    </section>
  );
}
