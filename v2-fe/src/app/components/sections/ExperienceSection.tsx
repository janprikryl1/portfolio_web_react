import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { CollapsibleSection } from "../ui/CollapsibleSection";

export const ExperienceSection: FC = () => {
  const { t } = useTranslation();

  const experiencesData = [
    {
      id: "itixo",
      company: "ITIXO, s.r.o.",
      role: t("experience.itixoRole"),
      period: `2024 – ${t("experience.present")}`,
      description: [t("experience.itixoDesc1"), t("experience.itixoDesc2")],
      current: true
    },
    {
      id: "itnetwork",
      company: "ITNETWORK",
      role: t("experience.itnetworkRole"),
      period: "2023",
      description: [t("experience.itnetworkDesc")]
    },
    {
      id: "wernherd",
      company: "WERNHERD TECHNOLOGY",
      role: t("experience.wernherdRole"),
      period: "2022 – 2023",
      location: "Dětkovice",
      description: [
        t("experience.wernherdDesc1"),
        t("experience.wernherdDesc2"),
        t("experience.wernherdDesc3")
      ]
    },
    {
      id: "smrzice",
      company: "Obec Smržice",
      role: t("experience.smrziceRole"),
      period: "2019 – 2022",
      location: "Smržice",
      description: [t("experience.smrziceDesc")]
    },
    {
      id: "arboeko",
      company: "ARBOEKO",
      role: t("experience.arboekoRole"),
      period: "2018",
      location: "Smržice",
      description: [t("experience.arboekoDesc")]
    },
    {
      id: "tabor",
      company: "Dětské tábory",
      role: t("experience.taborRole"),
      period: "2020 – 2023",
      description: [t("experience.taborDesc")]
    }
  ];

  return (
    <CollapsibleSection
      id="zkusenosti"
      badge={t("experience.badge")}
      title={t("experience.title")}
      subtitle={t("experience.subtitle")}
      defaultOpen={false}
    >
      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Timeline Bar */}
        <div className="absolute left-4 sm:left-1/3 top-3 bottom-3 w-0.5 bg-border -translate-x-1/2 hidden sm:block" />

        <div className="space-y-12">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.05, 0.2), duration: 0.4 }}
              className="relative grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start group"
            >
              {/* Timeline Dot (Center Anchor) */}
              <div className="absolute left-4 sm:left-1/3 top-6 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center">
                <div
                  className={`w-5 h-5 rounded-full border-4 ${
                    exp.current
                      ? "bg-emerald-500 border-emerald-500/30 ring-4 ring-emerald-500/20 animate-pulse"
                      : "bg-primary border-card ring-2 ring-primary/30"
                  }`}
                />
              </div>

              {/* Left Side: Company & Period */}
              <div className="sm:col-span-4 sm:text-right space-y-1 sm:pr-6">
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border shrink-0 ${
                      exp.current
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-background border-border text-muted-foreground"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {exp.location && (
                  <p className="text-xs text-muted-foreground flex items-center gap-1 justify-start sm:justify-end">
                    <MapPin className="w-3 h-3 text-primary/70" />
                    <span>{exp.location}</span>
                  </p>
                )}
              </div>

              {/* Right Side: Role & Duties */}
              <div className="sm:col-span-8 p-6 bg-card border border-border rounded-xl group-hover:border-primary/40 transition-all shadow-sm hover:shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary shrink-0" />
                  <h4 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h4>
                </div>

                {exp.description.length > 0 && (
                  <ul className="space-y-1.5 text-sm text-foreground/80 pt-1">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </CollapsibleSection>
  );
};
