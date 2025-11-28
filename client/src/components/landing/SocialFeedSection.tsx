import { motion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";

export function SocialFeedSection() {
  return (
    <section
      id="social-feed"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-section-alt"
      data-testid="social-feed-section"
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6"
            data-testid="text-social-title"
          >
            Вдохновляйтесь и делитесь
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            data-testid="text-social-description"
          >
            Находите новые идеи каждый день. Делитесь образами с другими.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <IPhoneMockup
            screenshots={["Лента образов"]}
            size="xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
