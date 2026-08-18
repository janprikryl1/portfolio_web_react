import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Loader2, AlertCircle, Github, ExternalLink } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { fetchProjects } from "../../services/api";
import { ApiProject, CategorizedProjects } from "../../types";
import { SOCIAL_LINKS } from "../../constants";
import { CollapsibleSection } from "../ui/CollapsibleSection";

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

  const [showAll, setShowAll] = useState(false);
  const INITIAL_LIMIT = 6;
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_LIMIT);

  return (
    <CollapsibleSection
      id="projekty"
      badge={t("projects.badge")}
      title={t("projects.title")}
      defaultOpen={false}
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-card border border-border rounded-xl mb-8 w-fit">
        <button
          onClick={() => { setActiveTab("all"); setShowAll(false); }}
          className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
            activeTab === "all"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t("projects.all")} ({allProjects.length})
        </button>
        <button
          onClick={() => { setActiveTab("webs"); setShowAll(false); }}
          className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
            activeTab === "webs"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t("projects.webs")} ({categorized.webs.length})
        </button>
        <button
          onClick={() => { setActiveTab("apps"); setShowAll(false); }}
          className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
            activeTab === "apps"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t("projects.apps")} ({categorized.apps.length})
        </button>
        <button
          onClick={() => { setActiveTab("others"); setShowAll(false); }}
          className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
            activeTab === "others"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t("projects.others")} ({categorized.others.length})
        </button>
      </div>

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
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={`${project.categoryName}-${project.id}`} project={project} index={index} />
            ))}
          </div>

          {/* Show All / Show Less Toggle Button */}
          {filteredProjects.length > INITIAL_LIMIT && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="px-6 py-2.5 rounded-xl border border-primary/40 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary text-sm font-medium transition-all shadow-sm"
              >
                {showAll
                  ? t("projects.showLess")
                  : t("projects.showAll", { count: filteredProjects.length })}
              </button>
            </div>
          )}

          {/* More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 text-center"
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-card hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary/40 rounded-xl transition-all font-medium text-base shadow-sm hover:shadow-lg hover:shadow-primary/10 group"
            >
              <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>{t("projects.moreProjects")}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </a>
          </motion.div>
        </>
      )}
    </CollapsibleSection>
  );
};
