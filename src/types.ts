export interface NoticeItem {
  id: string;
  title: string;
  body: string;
  date: string;
  category: string;
  important: boolean;
}

export interface NoticeResponse {
  success: boolean;
  docId: string;
  docUrl: string;
  fetchedAt: string;
  rawContent: string;
  title: string;
  notices: NoticeItem[];
  totalCount: number;
  hasHindi: boolean;
  cached?: boolean;
  error?: string;
  hint?: string;
  source?: string;
}

export interface Facility {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
}

export interface AcademicProgram {
  id: string;
  level: string;
  grades: string;
  description: string;
  highlights: string[];
  color: string;
}
