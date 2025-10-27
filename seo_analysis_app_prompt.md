# Complete SEO Analysis Web App Frontend Prompt for ChatGPT

## Context & Role
You are a senior Frontend Engineer, UX Designer, and Prompt Engineer with 8+ years of experience building production-ready single-page web applications. Your expertise spans modern JavaScript frameworks, accessibility standards, performance optimization, and user experience design. You have successfully delivered 50+ client-facing web applications that handle real-world traffic and meet enterprise security standards.

## Objective
Design and implement a **complete, production-ready frontend** for a simple SEO analysis web app. This is a client-only UI that will integrate with a backend analysis API. The deliverable must be so comprehensive that an intermediate frontend developer can implement the entire application in under 8 hours using only your materials.

## Task Breakdown
Work through this systematically, step-by-step. For each deliverable, think through the user needs, technical requirements, and implementation details before providing your response.

### 1. Tech Stack Selection & Justification
**Instructions:** Choose a modern, production-ready tech stack and provide exactly 3 succinct reasons why this combination is optimal for a small SEO analysis frontend. Consider bundle size, developer experience, performance, and maintainability.

**Required format:**
- Framework & version range (e.g., React 18.2+)
- Bundler & version (e.g., Vite 5.0+)
- Language & version (e.g., TypeScript 5.0+)
- Styling system (e.g., Tailwind CSS 3.4+)
- State management approach
- Testing framework
- Linting/formatting tools
- Development server setup

**Deliverable:** Present as a structured list with 3 bullet points explaining your choices.

### 2. UI/UX Specification
**Instructions:** Design a user-centered experience that guides users from URL input to actionable SEO insights. Think about the mental model of someone checking their website's SEO health.

**Required components:**
- **User flow:** 3-6 clear steps from landing to results
- **Wireframe descriptions:** Text descriptions for 5 screens (Home/Landing, URL Input, Loading State, Results Dashboard, Analysis History)
- **Accessibility checklist:** 8 specific items covering WCAG 2.1 AA compliance
- **Responsive behavior:** Breakpoint strategy for mobile (320px+), tablet (768px+), desktop (1024px+)

**Deliverable:** Structured sections with clear headings and bullet points.

### 3. Component & File Structure
**Instructions:** Design a scalable folder architecture that follows industry best practices. Each file should have a single, clear responsibility.

**Required structure elements:**
- `/src` folder organization
- Component hierarchy and naming
- Custom hooks location
- API integration files
- Type definitions
- Utility functions
- Asset organization

**Format required:**
```
src/
├── components/
│   ├── UrlInput.tsx          # Handles URL input validation and submission
│   ├── ResultsCard.tsx       # Displays individual SEO metrics
│   └── ...
├── hooks/
├── api/
├── types/
├── utils/
└── pages/
```

**Deliverable:** Complete folder tree with one-line responsibility comments.

### 4. API Contract Definition
**Instructions:** Define the minimal backend interface this frontend requires. Design RESTful endpoints that provide all necessary SEO data. Include realistic response payloads and comprehensive error handling.

**Required endpoints:**
- Analyze URL endpoint
- Get analysis history
- Health check endpoint

**For each endpoint provide:**
- HTTP method and full path
- Request headers and JSON payload
- Success response (200) with example data
- Error responses (400, 422, 500) with messages
- Example `curl` commands for testing

**Deliverable:** Structured API documentation with code blocks for JSON examples.

### 5. Working Single-File Example
**Instructions:** Create a complete, runnable React component that demonstrates the entire user flow. This must work offline with mock data and include comprehensive inline comments.

**Required functionality:**
- URL input with client-side validation (URL format, domain reachability check)
- API call simulation using `fetch` with `setTimeout` (2-3 second delay)
- Loading states with progress indication
- Results rendering including:
  - Page title and meta description
  - H1 tag count and validation
  - Word count and reading time
  - Top 5 keyword suggestions with frequency
  - Page speed score (0-100) with color coding
  - 4-5 actionable improvement suggestions
- Error handling for invalid URLs and API failures
- State management (loading/success/error/idle)
- Responsive styling with chosen CSS framework
- Accessibility attributes (ARIA labels, keyboard navigation)

**Technical requirements:**
- Under 400 lines total
- TypeScript with proper type definitions
- Inline comments explaining each major section
- Mock data for 3 realistic scenarios:
  1. Well-optimized blog article
  2. E-commerce product page with SEO issues
  3. JavaScript-heavy SPA with missing metadata
- Comments showing where to replace mock with real API
- Authentication token handling preparation

**Deliverable:** Single code block with language identifier (```tsx).

### 6. Complete Repository README
**Instructions:** Write documentation that enables zero-configuration setup for new developers.

**Required sections:**
- Project overview and features
- Prerequisites and system requirements
- Installation steps (`npm`/`pnpm`/`yarn` options)
- Development commands (`dev`, `build`, `test`, `lint`, `preview`)
- Environment variables configuration
- Mock vs. real API switching instructions
- Deployment guide for Netlify and Vercel
- Contributing guidelines
- License information

**Deliverable:** Markdown-formatted README with copy-pasteable commands.

### 7. Testing Strategy
**Instructions:** Define a comprehensive testing approach that ensures reliability and prevents regressions.

**Required test categories:**
- Unit tests for utility functions
- Component integration tests
- User interaction tests
- API integration tests
- Accessibility tests

**For each test, provide:**
- Clear test description
- Expected behavior
- Example assertion (pseudocode acceptable)
- Why this test is important

**Minimum 5 test cases total.**

**Deliverable:** Structured list with test descriptions and rationale.

### 8. Performance & Security Checklist
**Instructions:** Provide actionable guidelines for production deployment.

**Required areas:**
- Performance optimization (bundle size, caching, lazy loading)
- Security measures (XSS prevention, CSP, input sanitization)
- Rate limiting and abuse prevention
- Monitoring and error tracking

**Deliverable:** 6 specific, actionable items with brief implementation notes.

### 9. Alternative Stacks & Trade-offs
**Instructions:** Demonstrate awareness of ecosystem alternatives and when to choose differently.

**Required:**
- 4 alternative tech stack combinations
- One-line description of when each is preferable
- Trade-offs compared to your chosen stack

**Deliverable:** Structured comparison table or bullet list.

### 10. UI Copy & Microcopy
**Instructions:** Provide all user-facing text that creates a professional, helpful experience.

**Required text elements:**
- Button labels (primary and secondary actions)
- Loading states and progress messages
- Error messages (validation, network, server errors)
- Empty states and placeholder text
- Success messages and confirmations
- One onboarding tooltip for first-time users
- Help text and explanations

**Deliverable:** Organized by UI element type with context notes.

## Final Output Requirements

### Structure your response as follows:

1. **Executive Summary** (2-3 sentences describing the solution approach)

2. **Tech Stack & Justification** (section with chosen technologies and 3 reasons)

3. **UI/UX Specification** (user flow, wireframes, accessibility, responsive design)

4. **Component Architecture** (folder structure with responsibilities)

5. **API Contract** (endpoints with examples and curl commands)

6. **Single-File Implementation** (complete working component with comments)

7. **Repository Documentation** (README with setup and deployment)

8. **Testing Strategy** (test cases with descriptions and assertions)

9. **Performance & Security** (6-item production checklist)

10. **Stack Alternatives** (4 alternatives with trade-offs)

11. **UI Copy & Messaging** (all user-facing text)

12. **Next Steps Checklist** (5 concrete implementation steps)

## Quality Standards

- **Completeness:** Every deliverable must be implementation-ready
- **Clarity:** Use clear headings, bullet points, and code formatting
- **Realism:** Include realistic mock data and error scenarios
- **Best Practices:** Follow modern frontend development standards
- **Accessibility:** Ensure WCAG 2.1 AA compliance throughout
- **Performance:** Consider bundle size and loading performance
- **Maintainability:** Code should be readable and extensible

## Success Criteria

A successful response enables an intermediate frontend developer to:
1. Understand the complete technical architecture in 10 minutes
2. Set up the development environment in 15 minutes
3. Implement the basic functionality in 4 hours
4. Add styling and polish in 2 hours
5. Deploy to production in 1 hour

The final application should feel like a professional tool that users would trust with their SEO analysis needs.

**Important:** Ensure the single-file example works completely offline with mock data, so developers can see immediate results without backend setup.

Take a deep breath and work through each deliverable systematically. Begin with your executive summary, then proceed through each numbered section in order.
