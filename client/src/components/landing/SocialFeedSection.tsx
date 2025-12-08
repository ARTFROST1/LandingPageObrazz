import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Массив с 5 наборами изображений для слайдшоу
const tryOnExamples = [
  {
    userPhoto: "/screenshots/tryon-1-user.png",
    outfit: "/screenshots/tryon-1-outfit.png",
    result: "/screenshots/tryon-1-result.png",
  },
  {
    userPhoto: "/screenshots/tryon-2-user.png",
    outfit: "/screenshots/tryon-2-outfit.png",
    result: "/screenshots/tryon-2-result.png",
  },
  {
    userPhoto: "/screenshots/tryon-3-user.png",
    outfit: "/screenshots/tryon-3-outfit.png",
    result: "/screenshots/tryon-3-result.png",
  },
  {
    userPhoto: "/screenshots/tryon-4-user.png",
    outfit: "/screenshots/tryon-4-outfit.png",
    result: "/screenshots/tryon-4-result.png",
  },
  {
    userPhoto: "/screenshots/tryon-5-user.png",
    outfit: "/screenshots/tryon-5-outfit.png",
    result: "/screenshots/tryon-5-result.png",
  },
];

export function SocialFeedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tryOnExamples.length);
    }, 4000); // Меняется каждые 4 секунды

    return () => clearInterval(interval);
  }, []);

  const currentExample = tryOnExamples[currentIndex];
  return (
    <section
      id="ai-tryon"
      className="py-section lg:py-section-lg px-6 lg:px-12 bg-gradient-to-b from-background to-gray-50/30"
      data-testid="ai-tryon-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Minimal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-3"
            data-testid="text-tryon-title"
          >
            AI Примерка
          </h2>
          <p className="text-lg text-muted-foreground">
            Посмотри образ на себе перед покупкой
          </p>
        </motion.div>

        {/* Visual formula: Photo + Outfit = Result */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 xl:gap-12">
          {/* Step 1: Your Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`user-${currentIndex}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={currentExample.userPhoto}
                    alt="Ваше фото"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-sm font-medium z-10">
                Ваше фото
              </div>
            </div>
          </motion.div>

          {/* Plus icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
              <Plus className="w-6 h-6" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* Step 2: Outfit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`outfit-${currentIndex}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={currentExample.outfit}
                    alt="Образ"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-sm font-medium z-10">
                Образ
              </div>
            </div>
          </motion.div>

          {/* Equals/Arrow icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shadow-lg">
              <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* Step 3: Result with highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`result-${currentIndex}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={currentExample.result}
                    alt="Результат"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0';
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                <p className="text-white text-sm font-medium mb-1">✨ Результат</p>
                <p className="text-white/80 text-xs">AI примерка</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-2 mt-8"
        >
          {tryOnExamples.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-black' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Показать пример ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
