import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { techStack } from "../../data/portfolio";

export const TechStackSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="relative z-10 px-6 lg:px-12 py-12 lg:py-28 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {t("techStack.badge")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t("techStack.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {Object.entries(techStack).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
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
      </div>
    </section>
  );
};
