import { FC, ReactNode, useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CollapsibleSectionProps {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export const CollapsibleSection: FC<CollapsibleSectionProps> = ({
  id,
  badge,
  title,
  subtitle,
  defaultOpen = false,
  children
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, [id]);

  return (
    <section id={id} className="relative z-10 px-6 lg:px-12 py-5 lg:py-8 border-b border-border/50 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-between cursor-pointer group p-2 -mx-2 rounded-xl hover:bg-primary/5 transition-all select-none"
        >
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                {badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold group-hover:text-primary transition-colors flex items-center gap-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          <div className="p-2 text-muted-foreground group-hover:text-primary transition-all shrink-0">
            {isOpen ? (
              <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-0.5" />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden pt-8"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
