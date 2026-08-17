import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const LanguageToggle: FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.startsWith("en") ? "en" : "cs";

  const toggleLanguage = () => {
    const nextLang = currentLang === "cs" ? "en" : "cs";
    i18n.changeLanguage(nextLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", nextLang);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-card border border-border text-foreground hover:border-primary/50 transition-all font-mono text-xs font-semibold flex items-center gap-1.5 shadow-xs"
      aria-label="Přepnout jazyk CZ / EN"
      title={currentLang === "cs" ? "Switch to English" : "Přepnout do češtiny"}
    >
      <span className={currentLang === "cs" ? "text-primary font-bold" : "text-muted-foreground"}>
        CZ
      </span>
      <span className="text-muted-foreground/40">/</span>
      <span className={currentLang === "en" ? "text-primary font-bold" : "text-muted-foreground"}>
        EN
      </span>
    </motion.button>
  );
};
