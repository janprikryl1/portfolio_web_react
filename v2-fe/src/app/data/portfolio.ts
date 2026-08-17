import { Code2, GitBranch, MapPin, Languages } from "lucide-react";
import { StatItem, EducationItem, ExperienceItem } from "../types";

export const techStack: Record<string, string[]> = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  backend: ["Python", "Node.js", "Django", "FastAPI", "PostgreSQL"],
  devops: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"],
  tools: ["Git", "VS Code", "Figma", "Postman", "Vercel"]
};

export const stats: StatItem[] = [
  { value: "2.5+", label: "Let zkušeností", icon: Code2 },
  { value: "15+", label: "Projektů & aplikací", icon: GitBranch },
  { value: "Ostrava / Olomouc", label: "Lokalita (ČR)", icon: MapPin },
  { value: "CZ / EN", label: "Jazykové znalosti", icon: Languages }
];

export const education: EducationItem[] = [
  {
    id: "ing",
    school: "Vysoká škola báňská - Technická univerzita Ostrava",
    degree: "Inženýr (Ing.)",
    field: "Information Science/Studies",
    period: "září 2025 – červen 2027",
    location: "Ostrava",
    current: true
  },
  {
    id: "bc",
    school: "Vysoká škola báňská - Technická univerzita Ostrava",
    degree: "Bakalář (Bc.)",
    field: "Information Science/Studies",
    period: "2022 – červen 2025",
    location: "Ostrava"
  },
  {
    id: "spse",
    school: "Vyšší odborná škola a Střední průmyslová škola elektrotechnická",
    degree: "Maturita",
    field: "Elektrotechnika",
    period: "2018 – 2022",
    location: "Olomouc"
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "itixo",
    company: "ITIXO, s.r.o.",
    role: "Frontend developer (React)",
    period: "2024 – současnost",
    description: [
      "Vývoj moderních webových aplikací v knihovně React",
      "Návrh a implementace uživatelských rozhraní"
    ],
    current: true
  },
  {
    id: "itnetwork",
    company: "ITNETWORK",
    role: "Redaktor / Autor článků",
    period: "2023",
    description: [
      "Psaní výukových článků a návodů z oblasti IT a programování"
    ]
  },
  {
    id: "wernherd",
    company: "WERNHERD TECHNOLOGY",
    role: "Vývojář & IT Technik",
    period: "2022 – 2023",
    location: "Dětkovice",
    description: [
      "Programování mobilních aplikací pro systém Android",
      "Programování mikrokontrolerů Arduino",
      "Oprava a diagnostika akumulátorů"
    ]
  },
  {
    id: "smrzice",
    company: "Obec Smržice",
    role: "Technická podpora & údržba",
    period: "2019 – 2022",
    location: "Smržice",
    description: [
      "Zahradnické práce a údržba veřejné zeleně"
    ]
  },
  {
    id: "arboeko",
    company: "ARBOEKO",
    role: "Zahradní pracovník",
    period: "2018",
    location: "Smržice",
    description: [
      "Péče o zeleň a zahradnické práce"
    ]
  },
  {
    id: "tabor",
    company: "Dětské tábory",
    role: "Vedoucí na táboře",
    period: "2020 – 2023",
    description: [
      "Organizování programů a péče o děti"
    ]
  }
];
