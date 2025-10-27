import { describe, it, expect } from 'vitest'
import { validateUrl, normalizeUrl, getScoreColor, calculateReadingTime } from '../utils'

describe('URL Validation', () => {
  it('should validate correct URLs', () => {
    expect(validateUrl('https://example.com')).toEqual({ isValid: true })
    expect(validateUrl('http://example.com')).toEqual({ isValid: true })
    expect(validateUrl('example.com')).toEqual({ isValid: true })
  })

  it('should reject invalid URLs', () => {
    expect(validateUrl('')).toEqual({ isValid: false, error: 'URL is required' })
    expect(validateUrl('invalid-url')).toEqual({ isValid: false, error: 'Invalid URL format' })
    expect(validateUrl('ftp://example.com')).toEqual({ isValid: false, error: 'URL must use HTTP or HTTPS protocol' })
  })

  it('should normalize URLs correctly', () => {
    expect(normalizeUrl('example.com')).toBe('https://example.com')
    expect(normalizeUrl('https://example.com')).toBe('https://example.com')
    expect(normalizeUrl('http://example.com')).toBe('http://example.com')
  })
})

describe('Utility Functions', () => {
  it('should calculate reading time correctly', () => {
    expect(calculateReadingTime(200)).toBe(1) // 200 words = 1 minute
    expect(calculateReadingTime(400)).toBe(2) // 400 words = 2 minutes
    expect(calculateReadingTime(150)).toBe(1) // rounds up to 1 minute
  })

  it('should return correct score colors', () => {
    expect(getScoreColor(95)).toBe('text-success-600') // Good score
    expect(getScoreColor(75)).toBe('text-warning-600') // Warning score
    expect(getScoreColor(45)).toBe('text-error-600') // Poor score
  })
})

describe('SEO Analysis Integration', () => {
  it('should handle analysis workflow', async () => {
    // Test the complete analysis workflow
    const testUrl = 'https://blog.example.com'
    const validation = validateUrl(testUrl)
    
    expect(validation.isValid).toBe(true)
    
    // This would test the actual API integration
    // In a real test, you'd mock the API response
    const normalizedUrl = normalizeUrl(testUrl)
    expect(normalizedUrl).toBe(testUrl)
  })
})
