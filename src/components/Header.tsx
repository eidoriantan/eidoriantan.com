import { Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { portfolio } from '../content/portfolio'
import { GithubLogo } from './GithubLogo'
import { Logo } from './Logo'
import './Header.css'

const NAV_ITEMS = ['work', 'services', 'about', 'contact']

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Back to top">
        <Logo className="mark" />
        <span>{portfolio.shortName}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => (
          <a href={`#${item}`} key={item} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-github" href={portfolio.social.github} target="_blank" rel="noreferrer">
        <GithubLogo /> GitHub profile
      </a>
      <a className="header-email" href={`mailto:${portfolio.email}`}>
        <Mail size={16} /> Email me
      </a>
    </header>
  )
}
