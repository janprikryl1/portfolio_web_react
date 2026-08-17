import { FC, useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { useTranslation } from "react-i18next";
import { fetchProjectDetail } from "../services/api";
import { ProjectDetailData } from "../types";
import { CyberBackground } from "../components/layout/CyberBackground";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight, Loader2, Image as ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ProjectDetailPage: FC = () => {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language.startsWith("en");
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [detail, setDetail] = useState<ProjectDetailData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id) {
      setError(t("projects.detailError"));
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setCurrentImageIndex(0);

    fetchProjectDetail(Number(id))
      .then((data) => {
        setDetail(data);
      })
      .catch((err) => {
        console.error("Error loading project detail:", err);
        setError(t("projects.detailError"));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, t]);

  const renderDescriptionWithLinks = (text: string) => {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-accent transition-colors inline-flex items-center gap-1 break-all"
          >
            {part}
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const screenshots = detail?.screenshots || [];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const name = isEn && detail?.name_en ? detail.name_en : detail?.name || "";
  const purpose = isEn && detail?.purpose_en ? detail.purpose_en : detail?.purpose || "";
  const description = isEn && detail?.description_en ? detail.description_en : detail?.description || "";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
      <CyberBackground />
      <Navbar />

      <main className="flex-1 relative z-10 px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Back Button */}
          <div>
            <Link
              to="/#projekty"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("projects.back")}</span>
            </Link>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4 text-muted-foreground">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
              <span className="font-mono text-sm">{t("projects.detailLoading")}</span>
            </div>
          ) : error ? (
            <div className="p-8 text-center bg-card border border-destructive/30 rounded-xl text-destructive space-y-4">
              <p className="text-lg">{error}</p>
              <Link
                to="/"
                className="inline-block px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm"
              >
                {t("projects.back")}
              </Link>
            </div>
          ) : detail ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 lg:p-12 bg-card border border-border rounded-2xl shadow-2xl space-y-8"
            >
              {/* Header */}
              <div className="border-b border-border/60 pb-6 space-y-3">
                <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
                  {name}
                </h1>
                {purpose && (
                  <p className="text-accent font-mono text-base">
                    {purpose}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="text-foreground/80 leading-relaxed space-y-3 text-base lg:text-lg">
                {renderDescriptionWithLinks(description)}
              </div>

              {/* Screenshot Gallery Carousel */}
              {screenshots.length > 0 && (
                <div className="space-y-4 pt-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground font-mono">
                    <span className="flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-primary" />
                      {t("projects.screenshots")} ({currentImageIndex + 1} / {screenshots.length})
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-background/90 border border-border aspect-video flex items-center justify-center group shadow-inner">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={screenshots[currentImageIndex]?.original}
                        alt={screenshots[currentImageIndex]?.description || name}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-contain"
                      />
                    </AnimatePresence>

                    {screenshots.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground border border-border text-foreground transition-all shadow-lg backdrop-blur-sm"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground border border-border text-foreground transition-all shadow-lg backdrop-blur-sm"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  {screenshots[currentImageIndex]?.description && (
                    <p className="text-sm text-center text-muted-foreground italic font-mono">
                      {screenshots[currentImageIndex].description}
                    </p>
                  )}
                </div>
              )}

              {/* GitHub Link Footer */}
              {detail.repository && (
                <div className="pt-6 border-t border-border flex flex-wrap justify-between items-center gap-4">
                  <span className="text-sm text-muted-foreground font-mono">
                    Repository
                  </span>
                  <a
                    href={detail.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-mono text-sm shadow-md"
                  >
                    <Github className="w-5 h-5" />
                    <span>{t("projects.repo")}</span>
                  </a>
                </div>
              )}
            </motion.div>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
};
