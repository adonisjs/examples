import { Link } from '@adonisjs/inertia/react'
import type { ReactNode } from 'react'
import { VisitModeProvider } from '~/contexts/visit_mode'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <VisitModeProvider>
      <div className="app-shell">
        <header className="site-header">
          <div className="site-header__inner">
            <Link route="projects.index" className="brand" aria-label="Back to all projects">
              <span className="brand__mark" aria-hidden="true">
                <i />
                <i />
              </span>
              <span className="brand__copy">
                <span>Instant visits</span>
              </span>
            </Link>
          </div>
        </header>

        {children}
      </div>
    </VisitModeProvider>
  )
}
