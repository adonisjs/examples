import { Check, Circle } from 'lucide-react'
import type { ProjectDetails as Project } from '~/types'

export default function ProjectDetails({
  project,
  isPreview,
}: {
  project: Project
  isPreview: boolean
}) {
  if (isPreview) {
    return <LoadingDetails />
  }

  return (
    <>
      <Milestones project={project} />
      <ProjectTeam project={project} />
    </>
  )
}

function LoadingDetails() {
  return (
    <>
      <div className="detail-card detail-card--loading" aria-label="Loading milestones">
        <span className="skeleton skeleton--label" />
        <span className="skeleton skeleton--title" />
        <span className="skeleton skeleton--row" />
        <span className="skeleton skeleton--row" />
        <span className="skeleton skeleton--row skeleton--short" />
      </div>
      <div className="detail-card detail-card--loading" aria-label="Loading project team">
        <span className="skeleton skeleton--label" />
        <span className="skeleton skeleton--title" />
        <span className="skeleton skeleton--avatars" />
        <span className="skeleton skeleton--row skeleton--short" />
      </div>
    </>
  )
}

function Milestones({ project }: { project: Project }) {
  return (
    <article className="detail-card detail-card--ready">
      <span className="detail-card__label">Milestones</span>
      <h2>Path to launch</h2>
      <ol className="milestone-list">
        {project.milestones?.map((milestone) => (
          <li key={milestone.label} data-state={milestone.state}>
            <span className="milestone-list__icon" aria-hidden="true">
              {milestone.state === 'complete' ? <Check size={13} /> : <Circle size={10} />}
            </span>
            <span>{milestone.label}</span>
            <small>{milestone.state}</small>
          </li>
        ))}
      </ol>
    </article>
  )
}

function ProjectTeam({ project }: { project: Project }) {
  return (
    <article className="detail-card detail-card--ready">
      <span className="detail-card__label">Project team</span>
      <h2>Working group</h2>
      <div className="team-list">
        {project.team?.map((member) => (
          <div className="team-list__member" key={member.initials}>
            <span>{member.initials}</span>
            <small>{member.name}</small>
          </div>
        ))}
      </div>
      <div className="review-note">
        <span>Next review</span>
        <strong>{project.nextReview}</strong>
      </div>
    </article>
  )
}
