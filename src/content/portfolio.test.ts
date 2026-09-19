import { describe, expect, it } from 'vitest'
import { portfolio } from './portfolio'

describe('portfolio content', () => {
  it('contains the public contact and social links', () => {
    expect(portfolio.email).toBe('me@eidoriantan.com')
    expect(portfolio.social.github).toContain('github.com/eidoriantan')
    expect(portfolio.social.linkedin).toContain('linkedin.com/in/eidoriantan')
  })

  it('contains all featured projects with working destinations', () => {
    expect(portfolio.projects).toHaveLength(8)
    expect(portfolio.projects.every((project) => project.url.startsWith('https://'))).toBe(true)
  })

  it('preserves both confirmed national programming achievements', () => {
    expect(portfolio.achievements.map((achievement) => achievement.year)).toEqual(['2024', '2023'])
    expect(portfolio.achievements.map((achievement) => achievement.title)).toEqual([
      'National Champion in C++ Category',
      'National Champion in C Category',
    ])
  })
})