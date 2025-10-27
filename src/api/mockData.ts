import { SeoAnalysisResult, ApiResponse } from '../types';

/**
 * Mock API responses for development and testing
 * In production, replace these with actual API calls
 */

export const MOCK_API_DELAY = 2000; // 2 seconds to simulate network latency

export const mockAnalysisData: Record<string, SeoAnalysisResult> = {
  'blog.example.com': {
    url: 'https://blog.example.com/web-performance-optimization',
    timestamp: new Date().toISOString(),
    metadata: {
      title: 'Web Performance Optimization: A Complete Guide',
      description: 'Learn essential techniques to optimize your website performance, improve loading times, and enhance user experience with our comprehensive guide.',
      titleLength: 45,
      descriptionLength: 149,
    },
    headings: {
      h1Count: 1,
      h1Text: ['Web Performance Optimization: A Complete Guide'],
      h2Count: 6,
      h3Count: 12,
    },
    content: {
      wordCount: 2150,
      readingTime: 11,
      imageCount: 8,
      altTextMissing: 0,
    },
    keywords: [
      { keyword: 'performance', frequency: 23, density: 1.07 },
      { keyword: 'optimization', frequency: 18, density: 0.84 },
      { keyword: 'loading', frequency: 15, density: 0.70 },
      { keyword: 'website', frequency: 12, density: 0.56 },
      { keyword: 'speed', frequency: 10, density: 0.47 },
    ],
    pageSpeed: {
      score: 92,
      metrics: { fcp: 1.2, lcp: 2.1, cls: 0.05, ttfb: 0.8 },
    },
    suggestions: [
      {
        type: 'info',
        message: 'Consider adding structured data markup for better search visibility',
        impact: 'medium',
      },
      {
        type: 'info',
        message: 'Add internal links to related articles to improve site navigation',
        impact: 'low',
      },
    ],
    score: 94,
  },
  
  'shop.example.com': {
    url: 'https://shop.example.com/products/wireless-headphones',
    timestamp: new Date().toISOString(),
    metadata: {
      title: 'Wireless Headphones',
      description: 'Buy wireless headphones',
      titleLength: 18,
      descriptionLength: 25,
    },
    headings: {
      h1Count: 2,
      h1Text: ['Wireless Headphones', 'Product Details'],
      h2Count: 3,
      h3Count: 1,
    },
    content: {
      wordCount: 180,
      readingTime: 1,
      imageCount: 5,
      altTextMissing: 3,
    },
    keywords: [
      { keyword: 'headphones', frequency: 8, density: 4.44 },
      { keyword: 'wireless', frequency: 6, density: 3.33 },
      { keyword: 'bluetooth', frequency: 4, density: 2.22 },
      { keyword: 'audio', frequency: 3, density: 1.67 },
      { keyword: 'music', frequency: 2, density: 1.11 },
    ],
    pageSpeed: {
      score: 67,
      metrics: { fcp: 2.8, lcp: 4.2, cls: 0.15, ttfb: 1.9 },
    },
    suggestions: [
      {
        type: 'critical',
        message: 'Title tag is too short and not descriptive. Include brand, model, and key features.',
        impact: 'high',
      },
      {
        type: 'critical',
        message: 'Meta description is too short and generic. Write compelling copy with product benefits.',
        impact: 'high',
      },
      {
        type: 'warning',
        message: 'Multiple H1 tags found. Use only one H1 per page for better SEO.',
        impact: 'medium',
      },
      {
        type: 'warning',
        message: '3 images are missing alt text. Add descriptive alt attributes for accessibility.',
        impact: 'medium',
      },
      {
        type: 'warning',
        message: 'Page has very little content. Add detailed product descriptions and specifications.',
        impact: 'high',
      },
    ],
    score: 52,
  },
  
  'app.example.com': {
    url: 'https://app.example.com/dashboard',
    timestamp: new Date().toISOString(),
    metadata: {
      title: 'Dashboard',
      description: '',
      titleLength: 9,
      descriptionLength: 0,
    },
    headings: {
      h1Count: 0,
      h1Text: [],
      h2Count: 4,
      h3Count: 8,
    },
    content: {
      wordCount: 45,
      readingTime: 1,
      imageCount: 12,
      altTextMissing: 12,
    },
    keywords: [
      { keyword: 'dashboard', frequency: 3, density: 6.67 },
      { keyword: 'loading', frequency: 2, density: 4.44 },
      { keyword: 'data', frequency: 2, density: 4.44 },
      { keyword: 'chart', frequency: 1, density: 2.22 },
      { keyword: 'analytics', frequency: 1, density: 2.22 },
    ],
    pageSpeed: {
      score: 34,
      metrics: { fcp: 4.1, lcp: 6.8, cls: 0.28, ttfb: 2.2 },
    },
    suggestions: [
      {
        type: 'critical',
        message: 'Missing meta description. Add a compelling description for search results.',
        impact: 'high',
      },
      {
        type: 'critical',
        message: 'Title tag is too generic. Include specific page purpose and brand name.',
        impact: 'high',
      },
      {
        type: 'critical',
        message: 'No H1 tag found. Add a descriptive H1 heading for page hierarchy.',
        impact: 'high',
      },
      {
        type: 'critical',
        message: 'All images missing alt text. Critical for accessibility and SEO.',
        impact: 'high',
      },
      {
        type: 'warning',
        message: 'Very low content-to-code ratio. Consider server-side rendering for better SEO.',
        impact: 'high',
      },
    ],
    score: 28,
  },
};

/**
 * Simulates API call to analyze a URL
 * Replace this with actual API integration in production
 */
export const mockAnalyzeUrl = async (url: string): Promise<ApiResponse<SeoAnalysisResult>> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, MOCK_API_DELAY));
  
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    
    // Return mock data if available, otherwise generate default
    if (domain in mockAnalysisData) {
      return {
        success: true,
        data: { ...mockAnalysisData[domain], url },
      };
    }
    
    // Generate random but realistic data for unknown domains
    const randomScore = Math.floor(Math.random() * 40) + 60;
    return {
      success: true,
      data: {
        ...mockAnalysisData['blog.example.com'],
        url,
        score: randomScore,
        pageSpeed: {
          ...mockAnalysisData['blog.example.com'].pageSpeed,
          score: randomScore,
        },
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: 'INVALID_URL',
        message: 'The provided URL is invalid or malformed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
    };
  }
};

/**
 * Mock API endpoint definitions for frontend integration
 * These would be replaced with actual API calls in production
 */
export const API_ENDPOINTS = {
  ANALYZE_URL: '/api/analyze',
  GET_HISTORY: '/api/history',
  HEALTH_CHECK: '/api/health',
} as const;

/**
 * Example curl commands for testing real API
 */
export const EXAMPLE_CURL_COMMANDS = {
  analyze: `curl -X POST ${API_ENDPOINTS.ANALYZE_URL} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{"url": "https://example.com"}'`,
  
  history: `curl -X GET ${API_ENDPOINTS.GET_HISTORY} \\
  -H "Authorization: Bearer YOUR_TOKEN"`,
  
  health: `curl -X GET ${API_ENDPOINTS.HEALTH_CHECK}`,
};
