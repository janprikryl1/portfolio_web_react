import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { sendContactMessage } from "../../services/api";
import { ContactMessageData } from "../../types";
import { SOCIAL_LINKS } from "../../constants";

export const ContactSection: FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactMessageData>();

  const onSubmit = async (data: ContactMessageData) => {
    setStatus("idle");
    setErrorMessage("");

    try {
      const ok = await sendContactMessage(data);
      if (ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setErrorMessage(t("contact.error"));
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus("error");
      setErrorMessage(t("contact.error"));
    }
  };

  return (
    <section id="kontakt" className="relative z-10 px-6 lg:px-12 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-6 sm:p-12 lg:p-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl border border-primary/20 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Contact Info & Socials */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {t("contact.badge")}
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold">
                {t("contact.title")}
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed">
                {t("contact.subtitle")}
              </p>

              <div className="pt-2 space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-primary transition-colors">
                    {SOCIAL_LINKS.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={`tel:${SOCIAL_LINKS.phone}`} className="hover:text-primary transition-colors">
                    {SOCIAL_LINKS.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 space-y-3">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono block">
                  {t("contact.socials")}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <motion.a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-3.5 py-2 bg-card border border-border hover:border-primary/50 rounded-lg transition-all text-xs font-mono"
                  >
                    <Github className="w-4 h-4 text-primary" />
                    <span>GitHub</span>
                  </motion.a>

                  <motion.a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-3.5 py-2 bg-card border border-border hover:border-primary/50 rounded-lg transition-all text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4 text-primary" />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-3.5 py-2 bg-card border border-border hover:border-primary/50 rounded-lg transition-all text-xs font-mono"
                  >
                    <Facebook className="w-4 h-4 text-primary" />
                    <span>Facebook</span>
                  </motion.a>

                  <motion.a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-3.5 py-2 bg-card border border-border hover:border-primary/50 rounded-lg transition-all text-xs font-mono"
                  >
                    <Instagram className="w-4 h-4 text-primary" />
                    <span>Instagram</span>
                  </motion.a>

                  <motion.a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-2 px-3.5 py-2 bg-card border border-border hover:border-primary/50 rounded-lg transition-all text-xs font-mono"
                  >
                    <Youtube className="w-4 h-4 text-primary" />
                    <span>YouTube</span>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Right Column - React Hook Form */}
            <div className="p-0 sm:p-8 sm:bg-card/90 sm:backdrop-blur-sm sm:border sm:border-border rounded-xl sm:shadow-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {status === "success" && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 text-sm flex items-center gap-3 font-mono">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>{t("contact.success")}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm flex items-center gap-3 font-mono">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-mono">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: t("contact.nameRequired")
                    })}
                    placeholder={t("contact.namePlaceholder")}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1 font-mono">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-mono">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: t("contact.emailRequired"),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t("contact.emailInvalid")
                      }
                    })}
                    placeholder={t("contact.emailPlaceholder")}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1 font-mono">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-mono">
                    {t("contact.subject")}
                  </label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: t("contact.subjectRequired")
                    })}
                    placeholder={t("contact.subjectPlaceholder")}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive mt-1 font-mono">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-mono">
                    {t("contact.message")}
                  </label>
                  <textarea
                    rows={4}
                    {...register("message", {
                      required: t("contact.messageRequired")
                    })}
                    placeholder={t("contact.messagePlaceholder")}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-sm transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1 font-mono">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-mono text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t("contact.sending")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t("contact.send")}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
