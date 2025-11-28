import { motion } from "framer-motion";
import { PrivacyModal } from "./PrivacyModal";
import { TermsModal } from "./TermsModal";
import { SiVk, SiTelegram } from "react-icons/si";

export function Footer() {
  return (
    <footer
      className="py-16 px-6 lg:px-12 bg-footer-bg"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {/* Логотип и описание */}
          <div>
            <h3
              className="text-2xl font-bold tracking-tight mb-2 text-foreground"
              data-testid="text-footer-logo"
            >
              OBRAZZ
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered персональный гардероб
            </p>
            
            {/* Социальные сети */}
            <div className="flex items-center gap-4">
              <a
                href="https://vk.com/obrazzapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="link-vk"
                aria-label="ВКонтакте"
              >
                <SiVk className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/MaykopTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid="link-telegram"
                aria-label="Telegram"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Ссылки */}
          <div className="flex flex-col space-y-3">
            <PrivacyModal>
              <button
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                data-testid="link-privacy"
              >
                Политика конфиденциальности
              </button>
            </PrivacyModal>
            
            <TermsModal>
              <button
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 text-left"
                data-testid="link-terms"
              >
                Условия использования
              </button>
            </TermsModal>
            
            <a
              href="https://frostmoon-tech.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="link-developer"
            >
              Разработчик: FrostMoon Tech
            </a>
          </div>

          {/* Контакты */}
          <div className="md:text-right">
            <p className="text-sm mb-2 text-muted-foreground">
              Связаться с нами
            </p>
            <a
              href="mailto:frostmoontech@gmail.com"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
              data-testid="link-email"
            >
              frostmoontech@gmail.com
            </a>
            
            <p className="text-sm mt-4 mb-2 text-muted-foreground">
              Сообщество
            </p>
            <div className="flex flex-col md:items-end gap-1">
              <a
                href="https://vk.com/obrazzapp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                VK: @obrazzapp
              </a>
              <a
                href="https://t.me/MaykopTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Telegram: @MaykopTech
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
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
            . Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
