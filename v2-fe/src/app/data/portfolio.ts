import { Code2, GitBranch, MapPin, Languages } from "lucide-react";
import { StatItem } from "../types";

export const techStack: Record<string, string[]> = {
  frontend: ["React", "Angular", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "Bootstrap"],
  backend: ["Python", "Django", "Flask", "Node.js", "PHP", "REST API", "Database"],
  tools: ["Git", "GitHub", "Postman", "Figma", "Mac OS", "Linux", "Windows"],
  "hosting & deployment": ["Docker", "GitHub Actions", "Vercel", "PythonAnywhere", "More"],
};

export const stats: StatItem[] = [
  { value: "2.5+", label: "Let zkušeností", icon: Code2 },
  { value: "15+", label: "Projektů & aplikací", icon: GitBranch },
  { value: "Ostrava / Olomouc", label: "Lokalita (ČR)", icon: MapPin },
  { value: "CZ / EN", label: "Jazykové znalosti", icon: Languages }
];