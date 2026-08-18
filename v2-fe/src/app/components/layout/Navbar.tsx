import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { SOCIAL_LINKS } from "../../constants";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageToggle } from "../ui/LanguageToggle";

export const Navbar: FC = () => {
  const { t } = useTranslation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 px-6 py-6 lg:px-12 lg:py-8 flex justify-between items-center border-b border-border/50 backdrop-blur-sm bg-background/50"
    >
      <a href="/#" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <span className="font-bold text-base tracking-tight text-foreground">Jan Přikryl</span>
      </a>

      <div className="flex items-center gap-3 sm:gap-5">
        <a href="/#projekty" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
          {t("nav.projects")}
        </a>
        <a href="/#zkusenosti" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
          {t("nav.experience")}
        </a>
        <a href="/#vzdelani" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
          {t("nav.education")}
        </a>
        <a href="/#stack" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
          {t("nav.techStack")}
        </a>

        <LanguageToggle />
        <ThemeToggle />

        <motion.a
          href={`mailto:${SOCIAL_LINKS.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          {t("nav.contact")}
        </motion.a>
      </div>
    </motion.nav>
  );
};
