import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IPhoneMockupProps {
  screenshots: string[];
  autoScroll?: boolean;
  interval?: number;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function IPhoneMockup({
  screenshots,
  autoScroll = false,
  interval = 3000,
  className = "",
  size = "lg",
}: IPhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoScroll || screenshots.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoScroll, interval, screenshots.length]);

  const sizeClasses = {
    sm: "w-[180px]",
    md: "w-[220px]",
    lg: "w-[280px]",
    xl: "w-[320px]",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      data-testid="iphone-mockup"
    >
      <div
        className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl"
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-7 bg-black rounded-b-2xl z-10" />
        
        <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19.5]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-black flex items-center justify-center">
                    <span className="text-white text-lg font-bold">O</span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">
                    {screenshots[currentIndex] || "Экран приложения"}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {autoScroll && screenshots.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-4">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black w-4"
                  : "bg-gray-300"
              }`}
              data-testid={`mockup-indicator-${index}`}
              aria-label={`Показать экран ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
