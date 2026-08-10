import AppLayout from '~/layouts/app'
import { Link } from '@adonisjs/inertia/react'
import { type ReactElement } from 'react'

export default function NotFound() {
  return (
    <main className="error-page">
      <span className="eyebrow">404 · Not found</span>
      <h1>That project is off the board.</h1>
      <p>The address may be out of date. Return to the active project list and try another.</p>
      <Link route="projects.index" className="primary-link">
        View all projects
      </Link>
    </main>
  )
}

NotFound.layout = (page: ReactElement) => <AppLayout>{page}</AppLayout>
