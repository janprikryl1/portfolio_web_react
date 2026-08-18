import { FC } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Github, Linkedin, MapPin } from "lucide-react";
import { SOCIAL_LINKS } from "../../constants";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export const HeroSection: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative z-10 px-6 lg:px-12 pt-6 pb-16 min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Hero Graphic Container */}
      <div className="max-w-7xl mx-auto w-full my-auto relative pb-8">
        {/* Huge Top Title: FRONTEND DEVELOPER (Desktop/Tablet only) */}
        <div className="hidden sm:block text-center relative select-none">
          <h1 className="text-[13vw] sm:text-[12vw] leading-none font-black tracking-tighter uppercase text-foreground">
            FRONTEND
          </h1>

          <div className="text-[13vw] sm:text-[12vw] leading-none font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-foreground to-transparent -mt-[4.8vw] opacity-25">
            DEVELOPER
          </div>
        </div>

        {/* 3-Column Grid Layout: Left Info (Desktop only) | Center Photo | Right Bio */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-10 items-end mt-2 sm:-mt-[14vw] md:-mt-[12vw] relative z-20">
          {/* Left Column: 2.5+ YEARS (Hidden on mobile, scaled appropriately) */}
          <div className="hidden md:block md:col-span-3 space-y-4 text-left mb-4">
            {/* 2.5+ YEARS Exp Metric */}
            <div className="font-mono font-bold text-4xl sm:text-5xl lg:text-5xl leading-none tracking-tight text-foreground/90">
              2.5+<br />
              <span className="text-primary font-sans text-xl sm:text-2xl lg:text-3xl font-semibold">// </span>YEARS
            </div>
          </div>

          {/* Center Column: Portrait Photo IN THE CENTER */}
          <div className="md:col-span-6 flex justify-center z-20 w-full">
            <div className="relative w-full max-w-sm sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] lg:w-[25rem] lg:h-[32rem] aspect-[4/5] sm:aspect-auto rounded-3xl overflow-hidden border-2 border-primary/40 bg-card shadow-2xl shadow-primary/10 group">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.png"
                  alt="Jan Přikryl - Frontend Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  // @ts-expect-error React html attribute
                  fetchpriority="high"
                  decoding="async"
                  width={600}
                  height={800}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Column: Name, Bio & Location pill with social icons */}
          <div className="md:col-span-3 space-y-5 text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground font-sans leading-none">
              Jan Přikryl
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t("hero.bio")}
            </p>

            {/* Location Pill & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-card border border-border text-foreground text-xs font-mono font-medium shadow-xs shrink-0">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Ostrava / Olomouc</span>
              </div>

              <div className="flex gap-2 shrink-0">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground transition-all shadow-xs"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 text-primary" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 text-foreground transition-all shadow-xs"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
