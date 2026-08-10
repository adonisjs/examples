import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { ProjectPreview } from '~/types'
import { Link } from '@adonisjs/inertia/react'
import { useVisitMode } from '~/contexts/visit_mode'

function toPreview(project: ProjectPreview): ProjectPreview {
  return {
    slug: project.slug,
    title: project.title,
    discipline: project.discipline,
    summary: project.summary,
    status: project.status,
    accent: project.accent,
    progress: project.progress,
    updatedAt: project.updatedAt,
  }
}

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectPreview
  index: number
}) {
  const { mode } = useVisitMode()
  const instant = mode === 'instant'
  const style = { '--project-accent': project.accent } as CSSProperties

  return (
    <Link
      route="projects.show"
      routeParams={{ slug: project.slug }}
      component={instant ? 'projects/show' : undefined}
      pageProps={
        instant
          ? (_, sharedProps) => ({
              ...sharedProps,
              project: toPreview(project),
              isPreview: true,
            })
          : undefined
      }
      className="project-card"
      style={style}
    >
      <div className="project-card__visual" aria-hidden="true">
        <span className="project-card__index">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-card__orbit" />
        <span className="project-card__disc" />
        <span className="project-card__progress">{project.progress}%</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.discipline}</span>
          <span>{project.status}</span>
        </div>
        <h2>{project.title}</h2>
        <p>{project.summary}</p>
        <div className="project-card__foot">
          <span>Updated {project.updatedAt.toLowerCase()}</span>
          <span className="project-card__open" aria-hidden="true">
            Open <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  )
}
