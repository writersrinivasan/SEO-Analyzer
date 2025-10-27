import React, { useState, useCallback } from 'react';
import { SeoAnalysisResult, LoadingState } from './types';
import { validateUrl, normalizeUrl, getScoreColor, getScoreBgColor, formatDate } from './utils';

/**
 * SEO Analysis Web App - Complete Single File Implementation
 * 
 * This component demonstrates the entire user flow for SEO analysis:
 * 1. URL input with validation
 * 2. API call simulation with loading states
 * 3. Results display with comprehensive SEO metrics
 * 4. Error handling and accessibility features
 * 
 * Features:
 * - Offline-capable with realistic mock data
 * - TypeScript with proper type safety
 * - Responsive design with Tailwind CSS
 * - Accessibility compliance (WCAG 2.1 AA)
 * - Professional UI/UX with loading states
 */

// Mock data for three realistic scenarios
const MOCK_RESPONSES: Record<string, SeoAnalysisResult> = {
  // Scenario 1: Well-optimized blog article
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
      metrics: {
        fcp: 1.2,
        lcp: 2.1,
        cls: 0.05,
        ttfb: 0.8,
      },
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

  // Scenario 2: E-commerce product page with SEO issues
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
      metrics: {
        fcp: 2.8,
        lcp: 4.2,
        cls: 0.15,
        ttfb: 1.9,
      },
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

  // Scenario 3: JavaScript-heavy SPA with missing metadata
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
      metrics: {
        fcp: 4.1,
        lcp: 6.8,
        cls: 0.28,
        ttfb: 2.2,
      },
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

const SeoAnalysisApp: React.FC = () => {
  // State management for the application
  const [url, setUrl] = useState<string>('');
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [analysisResult, setAnalysisResult] = useState<SeoAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  /**
   * Simulates API call to analyze URL
   * In production, replace this with actual API endpoint:
   * 
   * const response = await fetch('/api/analyze', {
   *   method: 'POST',
   *   headers: {
   *     'Content-Type': 'application/json',
   *     'Authorization': `Bearer ${authToken}`, // Add when auth is needed
   *   },
   *   body: JSON.stringify({ url: normalizedUrl }),
   * });
   */
  const analyzeUrl = useCallback(async (targetUrl: string): Promise<SeoAnalysisResult> => {
    // Simulate network delay (2-3 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
    
    // Extract domain for mock response selection
    const domain = new URL(targetUrl).hostname;
    
    // Return appropriate mock response or default
    if (domain in MOCK_RESPONSES) {
      return { ...MOCK_RESPONSES[domain], url: targetUrl };
    }
    
    // Default response for unknown domains
    return {
      ...MOCK_RESPONSES['blog.example.com'],
      url: targetUrl,
      score: Math.floor(Math.random() * 40) + 60, // Random score 60-100
    };
  }, []);

  /**
   * Handles form submission and URL analysis
   */
  const handleAnalyzeUrl = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous state
    setError(null);
    setAnalysisResult(null);
    
    // Validate URL
    const validation = validateUrl(url);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid URL');
      return;
    }
    
    const normalizedUrl = normalizeUrl(url);
    setLoadingState('loading');
    
    try {
      const result = await analyzeUrl(normalizedUrl);
      setAnalysisResult(result);
      setLoadingState('success');
    } catch (err) {
      setError('Failed to analyze URL. Please try again.');
      setLoadingState('error');
    }
  }, [url, analyzeUrl]);

  /**
   * Resets the application state for a new analysis
   */
  const handleNewAnalysis = useCallback(() => {
    setUrl('');
    setAnalysisResult(null);
    setError(null);
    setLoadingState('idle');
  }, []);

  /**
   * Renders the URL input form
   */
  const renderUrlInput = () => (
    <div className="card max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          SEO Analyzer
        </h1>
        <p className="text-gray-600">
          Analyze your website's SEO performance and get actionable insights
        </p>
      </div>
      
      <form onSubmit={handleAnalyzeUrl} className="space-y-4">
        <div className="relative">
          <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-2">
            Website URL
          </label>
          <div className="relative">
            <input
              id="url-input"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL (e.g., blog.example.com)"
              className="input-field pr-10"
              disabled={loadingState === 'loading'}
              aria-describedby="url-help"
              autoComplete="url"
            />
            {/* Tooltip trigger */}
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
              aria-label="URL input help"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-10">
                Enter any website URL to analyze its SEO performance. You can include or omit the protocol (http/https).
                <div className="absolute top-0 right-6 transform -translate-y-1">
                  <div className="w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
            )}
          </div>
          <p id="url-help" className="mt-1 text-sm text-gray-500">
            Try: blog.example.com, shop.example.com, or app.example.com for demo
          </p>
        </div>
        
        <button
          type="submit"
          disabled={loadingState === 'loading' || !url.trim()}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          aria-describedby={loadingState === 'loading' ? 'loading-status' : undefined}
        >
          {loadingState === 'loading' ? 'Analyzing...' : 'Analyze SEO'}
        </button>
        
        {loadingState === 'loading' && (
          <div id="loading-status" className="text-center" aria-live="polite">
            <div className="inline-flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-600"></div>
              <span className="text-sm text-gray-600">Analyzing website structure and content...</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );

  /**
   * Renders error message with retry option
   */
  const renderError = () => (
    <div className="card max-w-2xl mx-auto">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-error-50 mb-4">
          <svg className="h-6 w-6 text-error-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.684-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Analysis Failed</h3>
        <p className="text-error-600 mb-4">{error}</p>
        <button
          onClick={handleNewAnalysis}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  /**
   * Renders comprehensive SEO analysis results
   */
  const renderResults = () => {
    if (!analysisResult) return null;

    const { metadata, headings, content, keywords, pageSpeed, suggestions, score } = analysisResult;

    return (
      <div className="space-y-6">
        {/* Header with overall score */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">SEO Analysis Results</h2>
              <p className="text-gray-600 break-all">{analysisResult.url}</p>
              <p className="text-sm text-gray-500">{formatDate(analysisResult.timestamp)}</p>
            </div>
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getScoreBgColor(score)} mb-2`}>
                <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
              </div>
              <p className="text-sm text-gray-600">SEO Score</p>
            </div>
          </div>
          
          <button
            onClick={handleNewAnalysis}
            className="btn-secondary"
          >
            Analyze Another URL
          </button>
        </div>

        {/* Metadata Analysis */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Metadata</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">Title Tag</label>
                <span className={`text-xs px-2 py-1 rounded ${
                  metadata.titleLength >= 30 && metadata.titleLength <= 60 ? 'metric-good' : 'metric-warning'
                }`}>
                  {metadata.titleLength} chars
                </span>
              </div>
              <p className="text-gray-900 bg-gray-50 p-3 rounded border">
                {metadata.title || 'No title found'}
              </p>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">Meta Description</label>
                <span className={`text-xs px-2 py-1 rounded ${
                  metadata.descriptionLength >= 120 && metadata.descriptionLength <= 160 ? 'metric-good' : 
                  metadata.descriptionLength === 0 ? 'metric-error' : 'metric-warning'
                }`}>
                  {metadata.descriptionLength} chars
                </span>
              </div>
              <p className="text-gray-900 bg-gray-50 p-3 rounded border">
                {metadata.description || 'No meta description found'}
              </p>
            </div>
          </div>
        </div>

        {/* Content Structure */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Structure</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">H1 Tags:</span>
                <span className={`font-medium ${headings.h1Count === 1 ? 'text-success-600' : 'text-warning-600'}`}>
                  {headings.h1Count}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">H2 Tags:</span>
                <span className="font-medium text-gray-900">{headings.h2Count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">H3 Tags:</span>
                <span className="font-medium text-gray-900">{headings.h3Count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Word Count:</span>
                <span className={`font-medium ${content.wordCount >= 300 ? 'text-success-600' : 'text-warning-600'}`}>
                  {content.wordCount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reading Time:</span>
                <span className="font-medium text-gray-900">{content.readingTime} min</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Speed</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Overall Score:</span>
                <span className={`font-bold ${getScoreColor(pageSpeed.score)}`}>
                  {pageSpeed.score}/100
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">First Contentful Paint:</span>
                <span className="font-medium text-gray-900">{pageSpeed.metrics.fcp}s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Largest Contentful Paint:</span>
                <span className="font-medium text-gray-900">{pageSpeed.metrics.lcp}s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cumulative Layout Shift:</span>
                <span className="font-medium text-gray-900">{pageSpeed.metrics.cls}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Keywords</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keywords.slice(0, 6).map((keyword, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded border">
                <div className="font-medium text-gray-900">{keyword.keyword}</div>
                <div className="text-sm text-gray-600">
                  {keyword.frequency} times ({keyword.density}% density)
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Improvement Suggestions</h3>
            <div className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  suggestion.type === 'critical' ? 'bg-error-50 border-error-500' :
                  suggestion.type === 'warning' ? 'bg-warning-50 border-warning-500' :
                  'bg-primary-50 border-primary-500'
                }`}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {suggestion.type === 'critical' && (
                        <svg className="h-5 w-5 text-error-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                      {suggestion.type === 'warning' && (
                        <svg className="h-5 w-5 text-warning-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      )}
                      {suggestion.type === 'info' && (
                        <svg className="h-5 w-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-900">{suggestion.message}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Impact: <span className="capitalize font-medium">{suggestion.impact}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Main render logic
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Handle different states */}
        {loadingState === 'error' && error && renderError()}
        {loadingState === 'success' && analysisResult && renderResults()}
        {(loadingState === 'idle' || loadingState === 'loading') && renderUrlInput()}
      </div>
    </div>
  );
};

export default SeoAnalysisApp;
