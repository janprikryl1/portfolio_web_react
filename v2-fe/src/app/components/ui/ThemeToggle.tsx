import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

export const ThemeToggle: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2.5 rounded-lg bg-card border border-border text-foreground hover:border-primary/50 transition-all flex items-center justify-center shadow-xs"
      aria-label="Přepnout tmavý / světlý režim"
      title={isDark ? "Přepnout na světlý režim" : "Přepnout na tmavý režim"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-500" />
      )}
    </motion.button>
  );
};
