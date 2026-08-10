/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ProjectsController = () => import('#controllers/projects_controller')

router.group(() => {
  router.get('/', [ProjectsController, 'index']).as('projects.index')
  router.get('/projects/:slug', [ProjectsController, 'show']).as('projects.show')
})
