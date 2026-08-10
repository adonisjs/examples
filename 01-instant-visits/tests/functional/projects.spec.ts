import { test } from '@japa/runner'

test.group('Projects', () => {
  test('renders the project board', async ({ client, assert }) => {
    const response = await client.get('/').withInertia()

    response.assertStatus(200)
    response.assertInertiaComponent('projects/index')
    assert.lengthOf(response.inertiaProps.projects, 6)
  })

  test('renders a project with its full server data', async ({ client, assert }) => {
    const response = await client.get('/projects/orbit-payments').withInertia()

    response.assertStatus(200)
    response.assertInertiaComponent('projects/show')
    response.assertInertiaPropsContains({
      project: {
        slug: 'orbit-payments',
        title: 'Orbit payments',
        progress: 74,
      },
    })
    assert.notProperty(response.inertiaProps, 'isPreview')
  })

  test('returns 404 for an unknown project', async ({ client }) => {
    const response = await client.get('/projects/not-a-project')

    response.assertStatus(404)
  })
})
