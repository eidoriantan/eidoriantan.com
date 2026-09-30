import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../content/portfolio'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero-section page-section">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> {portfolio.availability}
        </p>
        <h1>
          Hi, I&apos;m Adriane.
          <br />
          <em>I build software.</em>
        </h1>
        <p className="hero-intro">{portfolio.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${portfolio.email}`}>
            Email me <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href="#work">
            See my projects <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="hero-aside" aria-label="Introduction details">
        <div className="orbit-art">
          <span>WEB</span>
          <span>APPS</span>
          <span>AI</span>
          <div className="orbit-core">AT</div>
        </div>
        <p>
          Software developer
          <br />
          based in the Philippines
          <br />
          working remotely.
        </p>
      </div>
      <div className="hero-meta">
        <span>01 / 04</span>
        <span>
          Scroll to explore <span className="scroll-line" />
        </span>
      </div>
    </section>
  )
}
