import type { ProjectDetails } from '~/types'

export default function ProjectHero({ project }: { project: ProjectDetails }) {
  return (
    <section className="project-hero" aria-labelledby="project-title">
      <div className="project-hero__copy">
        <span className="eyebrow">{project.discipline}</span>
        <h1 id="project-title">{project.title}</h1>
        <p>{project.summary}</p>
        <div className="project-hero__meta">
          <span>{project.status}</span>
          <span>Updated {project.updatedAt.toLowerCase()}</span>
        </div>
      </div>

      <div className="project-meter" aria-label={`${project.progress}% complete`}>
        <div className="project-meter__art" aria-hidden="true">
          <span className="project-meter__orbit" />
          <span className="project-meter__disc" />
        </div>
        <div className="project-meter__value">
          <strong>{project.progress}%</strong>
          <span>Complete</span>
        </div>
      </div>
    </section>
  )
}
