import { createContext, useContext, useState, type ReactNode } from 'react'
import type { VisitMode } from '~/types'

type VisitModeContextValue = {
  mode: VisitMode
  setMode: (mode: VisitMode) => void
}

const VisitModeContext = createContext<VisitModeContextValue | null>(null)

export function VisitModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<VisitMode>('instant')

  return <VisitModeContext.Provider value={{ mode, setMode }}>{children}</VisitModeContext.Provider>
}

export function useVisitMode() {
  const context = useContext(VisitModeContext)

  if (!context) {
    throw new Error('useVisitMode must be used inside VisitModeProvider')
  }

  return context
}
