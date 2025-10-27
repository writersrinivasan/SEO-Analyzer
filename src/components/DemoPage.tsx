import React from 'react';

/**
 * Demo page showing all possible states of the SEO Analysis app
 * Useful for development and showcasing the application
 */
const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            SEO Analysis Demo
          </h1>
          <p className="text-gray-600 mb-8">
            Try these demo URLs to see different SEO scenarios
          </p>
        </div>

        {/* Demo URLs */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-lg font-semibold text-success-600 mb-2">
              🎯 Well-Optimized Site
            </h3>
            <p className="text-gray-600 mb-4">
              A blog with excellent SEO practices
            </p>
            <code className="bg-gray-100 px-3 py-2 rounded text-sm block">
              blog.example.com
            </code>
            <div className="mt-4 text-sm text-gray-500">
              <p>✅ Proper meta tags</p>
              <p>✅ Good content structure</p>
              <p>✅ Fast loading speed</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-warning-600 mb-2">
              ⚠️ E-commerce Issues
            </h3>
            <p className="text-gray-600 mb-4">
              Product page with SEO problems
            </p>
            <code className="bg-gray-100 px-3 py-2 rounded text-sm block">
              shop.example.com
            </code>
            <div className="mt-4 text-sm text-gray-500">
              <p>❌ Short meta description</p>
              <p>❌ Multiple H1 tags</p>
              <p>❌ Missing alt text</p>
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-error-600 mb-2">
              🚨 SPA with Problems
            </h3>
            <p className="text-gray-600 mb-4">
              JavaScript app missing SEO basics
            </p>
            <code className="bg-gray-100 px-3 py-2 rounded text-sm block">
              app.example.com
            </code>
            <div className="mt-4 text-sm text-gray-500">
              <p>❌ No meta description</p>
              <p>❌ Missing H1 tag</p>
              <p>❌ Low content ratio</p>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What This App Analyzes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c1.1045695 0 2 .8954305 2 2v1M7 7c0 1.1045695.8954305 2 2 2h3m-5-2H4c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2h16c0-1.1045695-.8954305-2-2-2V9c0-1.1045695-.8954305-2-2-2h-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Meta Tags</h3>
              <p className="text-sm text-gray-600">Title, description length and quality</p>
            </div>

            <div className="text-center">
              <div className="bg-success-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Content Structure</h3>
              <p className="text-sm text-gray-600">Headings, word count, reading time</p>
            </div>

            <div className="text-center">
              <div className="bg-warning-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-warning-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Page Speed</h3>
              <p className="text-sm text-gray-600">Core Web Vitals and performance metrics</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Keywords</h3>
              <p className="text-sm text-gray-600">Top keywords and density analysis</p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Technical Implementation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend Stack</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React 18 with TypeScript</li>
                <li>• Vite for fast development</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Vitest for testing</li>
                <li>• ESLint for code quality</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Offline-capable with mock data</li>
                <li>• Responsive design</li>
                <li>• Accessibility compliant</li>
                <li>• Real-time validation</li>
                <li>• Production-ready</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
