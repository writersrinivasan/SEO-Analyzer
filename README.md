# 🔍 SEO Analyzer

A modern, production-ready SEO analysis web application built with React, TypeScript, and Tailwind CSS. Analyze any website's SEO performance and get actionable insights to improve search engine rankings.

![SEO Analyzer Demo](https://img.shields.io/badge/Demo-Live-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4+-blue)

## ✨ Features

- 🎯 **Comprehensive SEO Analysis** - Meta tags, content structure, keywords, and page speed
- ⚡ **Real-time Validation** - Client-side URL validation with helpful error messages
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- ♿ **Accessibility** - WCAG 2.1 AA compliant with proper ARIA labels
- 🔄 **Offline Capable** - Works with realistic mock data for development
- 🚀 **Production Ready** - Built with modern tools and best practices

## 🚀 Quick Start

### Try the Demo

The app includes three realistic demo scenarios:

1. **`blog.example.com`** - Well-optimized blog article (Score: 94/100)
2. **`shop.example.com`** - E-commerce page with issues (Score: 52/100)
3. **`app.example.com`** - SPA with critical SEO problems (Score: 28/100)

### Installation

```bash
# Clone the repository
git clone https://github.com/writersrinivasan/SEO-Analyzer.git
cd SEO-Analyzer

# Install dependencies
npm install

# Start development server
npm run dev
```

### Alternative: Standalone Version

For immediate testing without setup:

1. Open `standalone-demo.html` in your browser
2. Works completely offline with full functionality

## 📊 What Gets Analyzed

### Meta Tags
- Title length and optimization
- Meta description quality and length
- Proper meta tag structure

### Content Structure
- H1/H2/H3 heading hierarchy
- Word count and reading time
- Content-to-code ratio

### Page Speed
- Core Web Vitals simulation
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)

### Keywords
- Top 5 keywords with frequency
- Keyword density analysis
- Content relevance scoring

### Accessibility
- Image alt text analysis
- Heading structure validation
- Basic accessibility compliance

## 🛠️ Tech Stack

- **Framework**: React 18+ with TypeScript 5+
- **Build Tool**: Vite 5+ for fast development
- **Styling**: Tailwind CSS 3.4+ with custom components
- **Testing**: Vitest with comprehensive test setup
- **Linting**: ESLint with TypeScript rules
- **Server**: Express.js for simple deployment

## 🎨 Screenshots

### URL Input & Validation
Clean, professional interface with real-time validation:
- URL format checking
- Domain validation
- Helpful error messages

### Comprehensive Results
Detailed SEO analysis with actionable insights:
- Overall SEO score with color coding
- Meta tag analysis with character counts
- Content structure breakdown
- Page speed metrics
- Keyword frequency analysis
- Prioritized improvement suggestions

### Responsive Design
Works perfectly on all devices:
- Mobile-first approach
- Tablet-optimized layout
- Desktop full-feature view

## 🚀 Deployment

### Netlify (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/writersrinivasan/SEO-Analyzer)

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/writersrinivasan/SEO-Analyzer)

1. Import your GitHub repository
2. Vercel auto-detects the framework
3. Deploy with default settings

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist folder to your hosting provider
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── api/                # API integration and mock data
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
├── test/               # Test configuration and setup
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8080/api
VITE_ENABLE_MOCK_API=true
VITE_ENABLE_ANALYTICS=false
```

### API Integration

Replace mock calls with real API:

```typescript
// In src/App.tsx, replace the mock analyzeUrl function
const response = await fetch('/api/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`,
  },
  body: JSON.stringify({ url: normalizedUrl }),
});
```

## 📈 Performance & Security

### Performance Optimizations
- ⚡ Code splitting and lazy loading
- 🗜️ Optimized bundle size with tree shaking
- 🎯 Debounced inputs to reduce API calls
- 💾 Smart caching strategies

### Security Features
- 🛡️ Input sanitization and validation
- 🚫 XSS prevention with React's built-in protection
- 🔒 Content Security Policy ready
- 🛡️ Rate limiting on frontend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Maintain test coverage above 80%
- Use conventional commit messages
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 **Email**: writersrinivasan@example.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/writersrinivasan/SEO-Analyzer/issues)
- 📖 **Documentation**: [Project Wiki](https://github.com/writersrinivasan/SEO-Analyzer/wiki)

## 🏆 Features Roadmap

- [ ] Real API integration
- [ ] User authentication
- [ ] Analysis history
- [ ] Export reports (PDF/CSV)
- [ ] Bulk URL analysis
- [ ] Custom SEO rules
- [ ] Advanced analytics
- [ ] Multi-language support

---

Made with ❤️ by [Writer Srinivasan](https://github.com/writersrinivasan)

⭐ Star this repository if you find it helpful!
