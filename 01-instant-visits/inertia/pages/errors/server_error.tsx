import AppLayout from '~/layouts/app'
import { Link } from '@adonisjs/inertia/react'
import { type ReactElement } from 'react'

export default function ServerError() {
  return (
    <main className="error-page">
      <span className="eyebrow">500 · Server error</span>
      <h1>The studio hit a snag.</h1>
      <p>The request could not be completed. Give it another moment, then return to the board.</p>
      <Link route="projects.index" className="primary-link">
        Return to projects
      </Link>
    </main>
  )
}

ServerError.layout = (page: ReactElement) => <AppLayout>{page}</AppLayout>
