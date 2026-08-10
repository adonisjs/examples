import { Check, LoaderCircle } from 'lucide-react'

export default function PreviewStatus({ isPreview }: { isPreview: boolean }) {
  return (
    <div
      className={isPreview ? 'preview-status is-waiting' : 'preview-status is-ready'}
      role="status"
      aria-live="polite"
    >
      <span className="preview-status__icons" aria-hidden="true">
        <LoaderCircle className="preview-status__waiting-icon" size={15} />
        <Check className="preview-status__ready-icon" size={15} />
      </span>
      {isPreview ? 'Server request in flight' : 'Full server response received'}
    </div>
  )
}
