export type Section = 'Home' | 'Explore' | 'Builds' | 'Logs' | 'Me';
export type Language = 'KO' | 'EN';

export interface ThoughtCard {
  id: string;
  category: string;
  content: { KO: string; EN: string };
  detail?: { KO: string; EN: string };
}

export type LogCategory = 'Diary' | 'Food' | 'Travel' | 'Thoughts';

export interface LogEntry {
  id: string;
  title: { KO: string; EN: string };
  category: LogCategory;
  date: string;
  location?: string;
  content: { KO: string; EN: string };
  longContent?: Record<Language, string>;
  image: string;
}


export interface WebProject {
  id: string;
  title: { KO: string; EN: string };
  description: { KO: string; EN: string };
  tech: string[];
  link: string;
  image: string;
  color: string;
  type: 'Web' | 'Social';
}

export interface InterestCell {
  name: { KO: string; EN: string };
  size: number;
}

export interface Experience {
  id: string;
  title: { KO: string; EN: string };
  company: { KO: string; EN: string };
  period: string;
  location?: { KO: string; EN: string };
  description: { KO: string; EN: string };
  tags?: string[];
}

