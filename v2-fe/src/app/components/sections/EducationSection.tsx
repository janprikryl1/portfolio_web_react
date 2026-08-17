import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const EducationSection: FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");

  const educationData = [
    {
      id: "ing",
      school: t("education.vsbSchool"),
      degree: t("education.ingDegree"),
      field: t("education.infoScience"),
      period: isEn ? "September 2025 – June 2027" : "září 2025 – červen 2027",
      location: "Ostrava",
      current: true
    },
    {
      id: "bc",
      school: t("education.vsbSchool"),
      degree: t("education.bcDegree"),
      field: t("education.infoScience"),
      period: isEn ? "2022 – June 2025" : "2022 – červen 2025",
      location: "Ostrava"
    },
    {
      id: "spse",
      school: t("education.spseSchool"),
      degree: t("education.maturitaDegree"),
      field: t("education.electrotechnics"),
      period: "2018 – 2022",
      location: "Olomouc"
    }
  ];

  return (
    <section id="vzdelani" className="relative z-10 px-6 lg:px-12 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {t("education.badge")}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t("education.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            {t("education.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6 sm:p-8 bg-card border border-border rounded-xl hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/5 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {item.school}
                    </h3>
                    {item.current && (
                      <span className="px-3 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full font-mono">
                        {t("education.current")}
                      </span>
                    )}
                  </div>

                  <p className="text-base text-primary/90 font-medium">
                    {item.degree}, <span className="text-foreground/80">{item.field}</span>
                  </p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono pt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-background/60 border border-border rounded-lg text-xs font-mono text-muted-foreground shrink-0 self-start md:self-center">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
