import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Loader2, AlertCircle } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { fetchProjects } from "../../services/api";
import { ApiProject, CategorizedProjects } from "../../types";

export const ProjectsSection: FC = () => {
  const { t } = useTranslation();
  const [categorized, setCategorized] = useState<CategorizedProjects>({
    webs: [],
    apps: [],
    others: []
  });
  const [activeTab, setActiveTab] = useState<"all" | "webs" | "apps" | "others">("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      setLoading(true);
      setError(false);
      const data = await fetchProjects();
      if (isMounted) {
        if (data) {
          setCategorized(data);
        } else {
          setError(true);
        }
        setLoading(false);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const websWithCat = categorized.webs.map((p) => ({ ...p, categoryName: "webs" as const }));
  const appsWithCat = categorized.apps.map((p) => ({ ...p, categoryName: "apps" as const }));
  const othersWithCat = categorized.others.map((p) => ({ ...p, categoryName: "others" as const }));

  const allProjects: ApiProject[] = [...websWithCat, ...appsWithCat, ...othersWithCat];

  const getFilteredProjects = (): ApiProject[] => {
    switch (activeTab) {
      case "webs":
        return websWithCat;
      case "apps":
        return appsWithCat;
      case "others":
        return othersWithCat;
      default:
        return allProjects;
    }
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projekty" className="relative z-10 px-6 lg:px-12 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {t("projects.badge")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              {t("projects.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-card border border-border rounded-xl">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("projects.all")} ({allProjects.length})
            </button>
            <button
              onClick={() => setActiveTab("webs")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === "webs"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("projects.webs")} ({categorized.webs.length})
            </button>
            <button
              onClick={() => setActiveTab("apps")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === "apps"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("projects.apps")} ({categorized.apps.length})
            </button>
            <button
              onClick={() => setActiveTab("others")}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === "others"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("projects.others")} ({categorized.others.length})
            </button>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-muted-foreground font-mono">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p>{t("projects.loading")}</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-destructive font-mono bg-destructive/10 border border-destructive/20 rounded-xl">
            <AlertCircle className="w-8 h-8" />
            <p>{t("projects.error")}</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={`${project.categoryName}-${project.id}`} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
