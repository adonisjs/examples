import { Clock3, Zap } from 'lucide-react'
import { useVisitMode } from '~/contexts/visit_mode'

export default function VisitModeToggle() {
  const { mode, setMode } = useVisitMode()
  const isInstant = mode === 'instant'

  return (
    <div className="visit-lab">
      <div className="visit-toggle" role="radiogroup" aria-label="Visit behavior">
        <button
          type="button"
          role="radio"
          aria-checked={isInstant}
          className={isInstant ? 'visit-toggle__option is-active' : 'visit-toggle__option'}
          onClick={() => setMode('instant')}
        >
          <Zap size={15} aria-hidden="true" />
          Instant
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={!isInstant}
          className={!isInstant ? 'visit-toggle__option is-active' : 'visit-toggle__option'}
          onClick={() => setMode('standard')}
        >
          <Clock3 size={15} aria-hidden="true" />
          Standard
        </button>
      </div>

      <p className="visit-lab__note" aria-live="polite">
        {isInstant
          ? 'The destination renders immediately while its request runs.'
          : 'The current page stays visible until the server responds.'}
      </p>
    </div>
  )
}
