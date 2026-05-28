export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarId: string; // references one of our custom red line portraits
  description: string;
  interview: {
    question: string;
    answer: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  context?: string;
  content: string;
  illustrationId: string; // references custom red line art SVG / icon
  lessons?: string;
}

export interface DiaryDay {
  day: string;
  text: string;
  isHighlight?: boolean;
}

export interface DiaryMonth {
  name: string;
  entries: DiaryDay[];
}

export interface ToolItem {
  name: string;
  type: string;
  description: string;
  details: string;
  iconName: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  lesson?: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
}

export interface BibliographyEntry {
  author: string;
  title: string;
  details: string;
}
