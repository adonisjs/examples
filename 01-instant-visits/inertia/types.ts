import { type Data } from '@generated/data'
import { type PropsWithChildren } from 'react'
import { type JSONDataTypes } from '@adonisjs/core/types/transformers'

export type InertiaProps<T extends JSONDataTypes = {}> = PropsWithChildren<Data.SharedProps & T>

export type ProjectPreview = Pick<
  Data.Project,
  'slug' | 'title' | 'discipline' | 'summary' | 'status' | 'accent' | 'progress' | 'updatedAt'
>
export type ProjectDetails = ProjectPreview &
  Partial<Pick<Data.Project, 'milestones' | 'team' | 'nextReview'>>

export type VisitMode = 'instant' | 'standard'

/**
 * Bridge shared props inferred from the Inertia middleware into the client.
 */
declare module '@inertiajs/core' {
  interface InertiaConfig {
    sharedPageProps: Data.SharedProps
  }
}
