export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'domain';
}

export interface CareerPath {
  title: string;
  description: string;
  skills: string[];
  growth: 'Low' | 'Medium' | 'High' | 'Very High';
  education: string;
  salary: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface DetailCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}