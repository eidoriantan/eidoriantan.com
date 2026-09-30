import { ArrowUpRight, Code2 } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { portfolio } from '../content/portfolio'
import './ProjectCard.css'

export type Project = (typeof portfolio.projects)[number]

export function ProjectCard({ project }: { project: Project }) {
  // Prefer the live project link; fall back to the GitHub repo if there isn't one.
  const primaryHref: string | undefined = project.url || project.repo || undefined
  const opensRepo = !project.url && Boolean(project.repo)
  const label = opensRepo ? `${project.title} on GitHub` : `Visit ${project.title}`

  return (
    <article
      className={primaryHref ? 'project-card is-clickable' : 'project-card'}
      style={{ '--project-accent': project.accent } as CSSProperties}
    >
      <div className={project.image ? 'project-visual has-image' : 'project-visual'}>
        {project.image && <img src={project.image} alt={project.imageAlt} />}
        {!project.image && <div className="project-shape" />}
        <span className="project-index">{project.index}</span>
        <span className="project-category">{project.status ?? project.category}</span>
      </div>

      <div className="project-info">
        <div>
          <h3>
            {primaryHref ? (
              // Stretched link: its ::after covers the whole card (see ProjectCard.css)
              <a
                className="project-card-link"
                href={primaryHref}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p>{project.description}</p>
        </div>

        <div className="project-footer">
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="project-links">
            {primaryHref && (
              <span className="project-open-icon" aria-hidden="true">
                {opensRepo ? <Code2 size={17} /> : <ArrowUpRight size={18} />}
              </span>
            )}
            {/* Separate repo button, only when the card itself opens the live link */}
            {project.repo && !opensRepo && (
              <a
                className="project-repo-link"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
              >
                <Code2 size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
