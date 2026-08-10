import { setTimeout } from 'node:timers/promises'
import { findProject, projects } from '#data/projects'
import type { HttpContext } from '@adonisjs/core/http'
import ProjectTransformer from '#transformers/project_transformer'

const SIMULATED_LATENCY = 1_400

export default class ProjectsController {
  index({ inertia }: HttpContext) {
    return inertia.render('projects/index', {
      projects: ProjectTransformer.transform(projects),
    })
  }

  async show({ inertia, params, response }: HttpContext) {
    const project = findProject(params.slug)
    if (!project) {
      return response.notFound('Project not found')
    }

    await setTimeout(SIMULATED_LATENCY)

    return inertia.render('projects/show', {
      project: ProjectTransformer.transform(project),
    })
  }
}
