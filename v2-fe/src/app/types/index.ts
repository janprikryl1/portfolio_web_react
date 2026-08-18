import { LucideIcon } from "lucide-react";

export interface ApiProject {
  id: number;
  title: string;
  title_en: string;
  url: string;
  purpose: string;
  purpose_en: string;
  categoryName?: "webs" | "apps" | "others";
  repository?: string;
}

export interface CategorizedProjects {
  webs: ApiProject[];
  apps: ApiProject[];
  others: ApiProject[];
}

export interface Screenshot {
  description: string;
  original: string;
}

export interface ProjectDetailData {
  name: string;
  name_en: string;
  description: string;
  description_en: string;
  repository: string;
  purpose: string;
  purpose_en: string;
  screenshots: Screenshot[];
}

export interface ContactMessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  current?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  current?: boolean;
}
