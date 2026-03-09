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
    id: "openthrive-2026",
    role: "Associate Full Stack Developer",
    company: "Openthrive",
    location: "Remote",
    period: "Mar 2026 - Present",
    current: true,
    achievements: [
      "Building and maintaining scalable web applications and digital platforms for B2B clients",
      "Developing and optimizing marketing websites and composable web experiences",
      "Collaborating with cross-functional teams to translate marketing and product requirements into technical solutions",
      "Contributing to feature development, performance optimization, and overall platform improvements",
    ],
    icon: Building2,
    order: 2,
  },
];

// Sort experiences by order (Descending)
export const sortedExperiences = [...experiences].sort(
  (a, b) => b.order - a.order,
);
