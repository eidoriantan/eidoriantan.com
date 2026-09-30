import { portfolio } from '../content/portfolio'
import { ProjectCard } from './ProjectCard'
import './Projects.css'

export function Projects() {
  return (
    <section id="work" className="page-section work-section">
      <div className="section-heading heading-inline">
        <div>
          <p className="eyebrow">Projects</p>
          <h2>
            A few things
            <br />
            <em>I&apos;ve worked on.</em>
          </h2>
        </div>
        <p className="heading-note">
          Client sites, a desktop product, and open-source work. Here&apos;s what I can share.
        </p>
      </div>
      <div className="project-grid">
        {portfolio.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
