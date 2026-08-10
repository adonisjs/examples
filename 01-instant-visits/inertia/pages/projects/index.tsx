import AppLayout from '~/layouts/app'
import { Head } from '@inertiajs/react'
import type { ReactElement } from 'react'
import ProjectCard from '~/components/project_card'
import VisitModeToggle from '~/components/visit_mode_toggle'
import type { InertiaProps, ProjectPreview } from '~/types'

type PageProps = InertiaProps<{ projects: ProjectPreview[] }>

export default function ProjectsIndex({ projects }: PageProps) {
  return (
    <>
      <Head title="Instant visits" />

      <main className="projects-page">
        <section className="page-intro" aria-labelledby="page-title">
          <div className="page-intro__copy">
            <h1 id="page-title">Projects, without the waiting room.</h1>
            <p>
              Open the same deliberately slow project route two ways. An instant visit swaps the
              page now, then fills in the server response when it arrives.
            </p>
          </div>

          <VisitModeToggle />
        </section>

        <section className="project-grid" aria-label="Active projects">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </section>
      </main>
    </>
  )
}

ProjectsIndex.layout = (page: ReactElement) => <AppLayout>{page}</AppLayout>
