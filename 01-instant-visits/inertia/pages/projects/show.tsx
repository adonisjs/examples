import AppLayout from '~/layouts/app'
import { Head } from '@inertiajs/react'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@adonisjs/inertia/react'
import ProjectHero from '~/components/project_hero'
import PreviewStatus from '~/components/preview_status'
import type { CSSProperties, ReactElement } from 'react'
import ProjectDetails from '~/components/project_details'
import type { InertiaProps, ProjectDetails as Project } from '~/types'

type PageProps = InertiaProps<{
  project: Project
  isPreview?: boolean
}>

export default function ProjectShow({ project, isPreview = false }: PageProps) {
  const style = { '--project-accent': project.accent } as CSSProperties

  return (
    <>
      <Head title={project.title} />

      <main className="project-page" style={style}>
        <div className="project-page__inner">
          <div className="project-page__topline">
            <Link route="projects.index" className="back-link">
              <ArrowLeft size={16} aria-hidden="true" />
              All projects
            </Link>
            <PreviewStatus isPreview={isPreview} />
          </div>

          <ProjectHero project={project} />

          <section className="project-details" aria-label="Project details">
            <ProjectDetails project={project} isPreview={isPreview} />
          </section>

          <footer className="response-note">
            {isPreview ? (
              <p>
                You are already on the destination page. The card preview remains visible until the
                background request completes.
              </p>
            ) : (
              <p>The full server response replaced the preview without another navigation.</p>
            )}
          </footer>
        </div>
      </main>
    </>
  )
}

ProjectShow.layout = (page: ReactElement) => <AppLayout>{page}</AppLayout>
