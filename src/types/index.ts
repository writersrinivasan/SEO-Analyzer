// SEO Analysis Types
export interface SeoAnalysisRequest {
  url: string;
  options?: {
    includeKeywords?: boolean;
    includePageSpeed?: boolean;
    includeAccessibility?: boolean;
  };
}

export interface SeoAnalysisResult {
  url: string;
  timestamp: string;
  metadata: {
    title: string;
    description: string;
    titleLength: number;
    descriptionLength: number;
  };
  headings: {
    h1Count: number;
    h1Text: string[];
    h2Count: number;
    h3Count: number;
  };
  content: {
    wordCount: number;
    readingTime: number;
    imageCount: number;
    altTextMissing: number;
  };
  keywords: {
    keyword: string;
    frequency: number;
    density: number;
  }[];
  pageSpeed: {
    score: number;
    metrics: {
      fcp: number; // First Contentful Paint
      lcp: number; // Largest Contentful Paint
      cls: number; // Cumulative Layout Shift
      ttfb: number; // Time to First Byte
    };
  };
  suggestions: {
    type: 'critical' | 'warning' | 'info';
    message: string;
    impact: 'high' | 'medium' | 'low';
  }[];
  score: number; // Overall SEO score 0-100
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: string;
  };
}

export interface AnalysisHistory {
  id: string;
  url: string;
  score: number;
  timestamp: string;
  status: 'completed' | 'failed' | 'pending';
}

// UI State Types
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AppState {
  currentAnalysis: SeoAnalysisResult | null;
  history: AnalysisHistory[];
  loading: LoadingState;
  error: string | null;
}
