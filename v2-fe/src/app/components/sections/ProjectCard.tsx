import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Github, Layers } from "lucide-react";
import { ApiProject } from "../../types";
import { SOCIAL_LINKS } from "../../constants";

interface ProjectCardProps {
  project: ApiProject;
  index: number;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");

  const title = isEn && project.title_en ? project.title_en : project.title;
  const purpose = isEn && project.purpose_en ? project.purpose_en : project.purpose;
  const githubUrl = project.repository || SOCIAL_LINKS.github;

  const getCategoryLabel = (category?: string) => {
    switch (category) {
      case "webs":
        return t("projects.webs");
      case "apps":
        return t("projects.apps");
      case "others":
        return t("projects.others");
      default:
        return "Projekt";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative flex flex-col h-full bg-card border border-border rounded-lg hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
    >
      {/* Icon / Header Image */}
      <div className="relative h-44 bg-background/50 border-b border-border/50 flex items-center justify-center p-6 overflow-hidden group-hover:bg-primary/5 transition-colors">
        {project.url ? (
          <img
            src={project.url}
            alt={title}
            loading="lazy"
            decoding="async"
            width={400}
            height={225}
            className="max-h-full max-w-full object-contain rounded transition-transform group-hover:scale-105 duration-300"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Layers className="w-8 h-8" />
          </div>
        )}

        <span
          className="absolute top-3 right-3 px-2.5 py-1 text-xs bg-accent/20 text-accent rounded-full border border-accent/30 font-mono"
        >
          {getCategoryLabel(project.categoryName)}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {purpose && (
            <p className="text-foreground/70 text-sm line-clamp-3 leading-relaxed">
              {purpose}
            </p>
          )}
        </div>

        {/* Action Links */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/project/${project.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-foreground/5 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all text-sm font-medium group-hover:border-primary/30"
          >
            <span>{t("projects.detail")}</span>
          </Link>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 bg-foreground/5 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all text-sm font-medium border border-transparent hover:border-primary/30"
              title={t("projects.repo")}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
