import { ExperienceItem } from "@/types/experiences";
import { Building2 } from "lucide-react";

export const experiences: ExperienceItem[] = [
  {
    id: "lamzing-2025",
    role: "Software Engineer - Internship",
    company: "Lamzing Technologies Pvt. Ltd.",
    location: "Imphal, India",
    period: "Apr 2025 - Aug 2025",
    current: false,
    achievements: [
      "Built a headless CMS blogging platform with Strapi, Node.js, and React",
      "Integrated REST APIs and developed responsive UI components in Agile cycles",
      "Collaborated with the team to ship maintainable features with Git and modern software practices",
    ],
    icon: Building2,
    order: 1,
  },
  {
    id: "openthrive-2026",
    role: "Associate Full Stack Developer",
    company: "Openthrive",
    location: "Bangalore · Remote",
    period: "Mar 2026 - Present",
    current: true,
    achievements: [
      "Built the registry and CLI for cxful, an internal component library hosted on Cloudflare Workers",
      "Contributed to HaulersClub's real-time messaging module with PartyKit and Cloudflare Durable Objects",
      "Built driver license extraction with Amazon Textract and carrier onboarding from DOT numbers using FMCSA data",
      "Independently building Heapgrid, a collaborative outline-style docs tool with cross-organization sharing and fine-grained access control",
    ],
    icon: Building2,
    order: 2,
  },
];

// Sort experiences by order (Descending)
export const sortedExperiences = [...experiences].sort(
  (a, b) => b.order - a.order,
);
