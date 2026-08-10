/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  projects: {
    index: typeof routes['projects.index']
    show: typeof routes['projects.show']
  }
}
