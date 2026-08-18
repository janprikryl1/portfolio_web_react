import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { techStack } from "../../data/portfolio";
import { CollapsibleSection } from "../ui/CollapsibleSection";

export const TechStackSection: FC = () => {
  const { t } = useTranslation();

  return (
    <CollapsibleSection
      id="stack"
      badge={t("techStack.badge")}
      title={t("techStack.title")}
      defaultOpen={false}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(techStack).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(categoryIndex * 0.05, 0.2), duration: 0.4 }}
            className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all shadow-sm"
          >
            <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {t(`techStack.categories.${category}`, category)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="px-3 py-1.5 bg-background border border-border rounded-lg text-xs font-mono text-foreground/80 hover:border-primary/50 transition-colors"
                >
                  {item === "More" ? t("techStack.more") : item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </CollapsibleSection>
  );
};
