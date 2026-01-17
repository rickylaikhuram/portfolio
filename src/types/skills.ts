export type SkillItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  subtext?: string;
  link?: string;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
  icon: React.ComponentType<{ className?: string }>;
};