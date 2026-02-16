import { LucideIcon } from "lucide-react";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  achievements: string[];
  icon: LucideIcon;
  order: number;
}