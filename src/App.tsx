import { ArrowUpRight, Check, Code2, Globe2, Mail, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from './content/portfolio'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1100)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className={isLoading ? 'loading-screen' : 'loading-screen loading-screen-hidden'} aria-hidden={!isLoading}>
        <div className="loading-mark">AT</div>
        <p>Hi, I&apos;m Adriane<span className="loading-dots">...</span></p>
        <div className="loading-track"><span /></div>
      </div>
      <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top"><span className="mark">AT</span><span>{portfolio.shortName}</span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? 'site-nav open' : 'site-nav'} aria-label="Primary navigation">
          {['work', 'services', 'about', 'contact'].map((item) => <a href={`#${item}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <a className="header-email" href={`mailto:${portfolio.email}`}><Mail size={16} /> Email me</a>
      </header>

      <main id="top">
        <section className="hero-section page-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> {portfolio.availability}</p>
            <h1>Hi, I&apos;m Adriane.<br /><em>I build software.</em></h1>
            <p className="hero-intro">{portfolio.intro}</p>
            <div className="hero-actions"><a className="button button-primary" href={`mailto:${portfolio.email}`}>Email me <ArrowUpRight size={17} /></a><a className="text-link" href="#work">See my projects <ArrowUpRight size={16} /></a></div>
          </div>
          <div className="hero-aside" aria-label="Introduction details"><div className="orbit-art"><span>WEB</span><span>APPS</span><span>AI</span><div className="orbit-core">AT</div></div><p>Software developer<br />based in the Philippines<br />working remotely.</p></div>
          <div className="hero-meta"><span>01 / 04</span><span>Scroll to explore <span className="scroll-line" /></span></div>
        </section>

        <section id="services" className="page-section services-section"><div className="section-heading"><p className="eyebrow">Services</p><h2>Ways I can<br /><em>help out.</em></h2></div><div className="services-list">{portfolio.services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-tools">{service.tools}</span></article>)}</div></section>

        <section id="work" className="page-section work-section"><div className="section-heading heading-inline"><div><p className="eyebrow">Projects</p><h2>A few things<br /><em>I&apos;ve worked on.</em></h2></div><p className="heading-note">Client sites, a desktop product, and open-source work. Here&apos;s what I can share.</p></div><div className="project-grid">{portfolio.projects.map((project) => <article className="project-card" key={project.title} style={{ '--project-accent': project.accent } as React.CSSProperties}><div className={project.image ? 'project-visual has-image' : 'project-visual'}>{project.image && <img src={project.image} alt={project.imageAlt} />}{!project.image && <div className="project-shape" />}<span className="project-index">{project.index}</span><span className="project-category">{project.status ?? project.category}</span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}><ArrowUpRight size={18} /></a>{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><Code2 size={17} /></a>}</div></div></div></article>)}</div></section>

        <section id="about" className="page-section about-section"><div className="about-intro"><p className="eyebrow">About me</p><h2>I like making<br /><em>things clearer.</em></h2><p>I enjoy taking a vague idea and turning it into something people can actually use. I work across the interface, the backend, and the awkward little details that make a product feel finished.</p></div><div className="about-details"><div className="detail-block"><p className="eyebrow">Skills &amp; tools</p><div className="skill-cloud">{portfolio.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="detail-block achievements"><p className="eyebrow">Achievements</p>{portfolio.achievements.map((achievement) => <div className="achievement" key={achievement.year}><span>{achievement.year}</span><div><h3>{achievement.title}</h3><p>{achievement.event} · {achievement.detail}</p></div><Check size={17} /></div>)}</div></div></section>

        <section id="contact" className="page-section contact-section"><div className="contact-copy"><p className="eyebrow">Contact</p><h2>Have an idea?<br /><em>Send me a note.</em></h2><p>Choose where you&apos;d like to find me.</p><div className="social-links"><a href={portfolio.social.github} target="_blank" rel="noreferrer" aria-label="Adriane on GitHub" title="GitHub"><Code2 size={21} /></a><a href={portfolio.social.linkedin} target="_blank" rel="noreferrer" aria-label="Adriane on LinkedIn" title="LinkedIn"><Globe2 size={21} /></a><a href={`mailto:${portfolio.email}`} aria-label={`Email Adriane at ${portfolio.email}`} title={portfolio.email}><Mail size={21} /></a></div></div></section>
      </main>

      <footer className="site-footer"><span>© 2026 {portfolio.name}</span><span>{portfolio.domain}</span><a href="#top">Back to top ↑</a></footer>
      </div>
    </>
  )
}

export default App