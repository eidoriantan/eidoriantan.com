import { Globe2, Mail } from 'lucide-react'
import { portfolio } from '../content/portfolio'
import { GithubLogo } from './GithubLogo'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="page-section contact-section">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>
          Have an idea?
          <br />
          <em>Send me a note.</em>
        </h2>
        <p>Choose where you&apos;d like to find me.</p>
        <div className="social-links">
          <a href={portfolio.social.github} target="_blank" rel="noreferrer" aria-label="Adriane on GitHub" title="GitHub">
            <GithubLogo size={21} />
          </a>
          <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer" aria-label="Adriane on LinkedIn" title="LinkedIn">
            <Globe2 size={21} />
          </a>
          <a href={`mailto:${portfolio.email}`} aria-label={`Email Adriane at ${portfolio.email}`} title={portfolio.email}>
            <Mail size={21} />
          </a>
        </div>
      </div>
    </section>
  )
}
