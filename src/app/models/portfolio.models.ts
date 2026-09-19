export interface ExperienceItem {
  company: string;
  role: string;
  designation?: string;
  client?: string;
  period: string;
  location: string;
  badge?: string;
  isCurrent?: boolean;
  highlights: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'rag-ai' | 'backend' | 'systems';
  description: string;
  metrics?: { label: string; value: string }[];
  architecture?: string[];
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  hasArchitectureDiagram?: boolean;
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level?: string; featured?: boolean }[];
}

export interface AchievementItem {
  title: string;
  metric: string;
  subtitle: string;
  description: string;
  badge: string;
  platform: 'LeetCode' | 'Codeforces' | 'CodeChef' | 'GFG' | 'Contest';
  rankOrScore?: string;
  icon: string;
}

export interface CertificationItem {
  title: string;
  code: string;
  issuer: 'Microsoft' | 'SAP';
  category: 'AI & Cloud' | 'Backend Development';
  badgeColor: string;
  icon: string;
}

export interface TerminalOutputLine {
  text: string;
  type: 'input' | 'output' | 'system' | 'error' | 'success';
}
