import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Code2 } from "lucide-react";
import { SOCIAL_LINKS } from "../../constants";

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 px-6 lg:px-12 py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
            <Code2 className="w-4 h-4 text-primary" />
            <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hidden sm:inline"
            >
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hidden sm:inline"
            >
              Instagram
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
