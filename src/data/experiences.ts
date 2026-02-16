import { ExperienceItem } from "@/types/experiences";
import { Building2 } from "lucide-react";

export const experiences: ExperienceItem[] = [
  {
    id: "lamzing-2025",
    role: "Software Engineer - Internship",
    company: "Lamzing Technologies Pvt. Ltd.",
    location: "Onsite - Imphal, India",
    period: "Apr 2025 - Aug 2025",
    current: false,
    achievements: [
      "Convert satellite terrain data into 3D-printable models",
      "Built scalable blogging platform using Strapi and React with efficient content management",
      "Developed responsive UI components and integrated REST APIs",
      "Collaborated in Agile teams using Git and software design principles",
    ],
    icon: Building2,
    order: 1,
  },
  {
    id: "laxxa-2026",
    role: "Software Developer",
    company: "Laxxa Innovations Pvt. Ltd.",
    location: "Remote",
    period: "Feb 2026 - Present",
    current: true,
    achievements: [
      "Developed and maintained scalable web applications using React and Node.js",
      "Improved application performance by 30% through code optimization and refactoring",
    ],
    icon: Building2,
    order: 2,
  },
];

// Sort experiences by order (Descending)
export const sortedExperiences = [...experiences].sort(
  (a, b) => b.order - a.order,
);
