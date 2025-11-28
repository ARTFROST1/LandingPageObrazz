import { motion } from "framer-motion";

const footerLinks = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Условия использования", href: "#" },
  { label: "Поддержка", href: "#" },
];

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
          <div>
            <h3
              className="text-2xl font-bold tracking-tight mb-2 text-foreground"
              data-testid="text-footer-logo"
            >
              OBRAZZ
            </h3>
            <p className="text-sm text-muted-foreground">
              AI-powered персональный гардероб
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                data-testid={`link-footer-${index}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:text-right">
            <p className="text-sm mb-2 text-muted-foreground">
              Связаться с нами
            </p>
            <a
              href="mailto:team@obrazz.app"
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
              data-testid="link-email"
            >
              team@obrazz.app
            </a>
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
            &copy; {new Date().getFullYear()} OBRAZZ. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
