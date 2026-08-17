import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { stats } from "../../data/portfolio";

export const StatsSection: FC = () => {
  const { t } = useTranslation();

  const translatedStats = [
    { ...stats[0], label: t("stats.expLabel") },
    { ...stats[1], label: t("stats.projectsLabel") },
    { ...stats[2], value: t("stats.locationValue"), label: t("stats.locationLabel") },
    { ...stats[3], value: t("stats.langValue"), label: t("stats.langLabel") }
  ];

  return (
    <section className="relative z-10 px-6 lg:px-12 py-10 sm:py-12 border-y border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {translatedStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-3.5 p-3 rounded-xl bg-card/60 sm:bg-transparent border border-border/40 sm:border-none shadow-xs sm:shadow-none"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-lg sm:text-2xl font-bold text-foreground leading-tight tracking-tight truncate">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium truncate">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
