import type { ProjectRecord } from '#data/projects'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class ProjectTransformer extends BaseTransformer<ProjectRecord> {
  toObject() {
    return {
      slug: this.resource.slug,
      title: this.resource.title,
      discipline: this.resource.discipline,
      summary: this.resource.summary,
      status: this.resource.status,
      accent: this.resource.accent,
      progress: this.resource.progress,
      updatedAt: this.resource.updatedAt,
      nextReview: this.resource.nextReview,
      team: this.resource.team,
      milestones: this.resource.milestones,
    }
  }
}
