import { portfolio } from '../content/portfolio'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 {portfolio.name}</span>
      <span>{portfolio.domain}</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}
