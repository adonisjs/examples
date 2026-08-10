# Instant visits

This example opens a project page immediately while its real server request runs in the background. The project board includes a switch so you can compare an instant visit with a standard Inertia visit.

## The minimum implementation

An instant visit still needs a normal server route. There is nothing special about its controller:

```ts
router.get('/projects/:slug', [ProjectsController, 'show']).as('projects.show')

export default class ProjectsController {
  async show({ inertia, params, response }: HttpContext) {
    const project = findProject(params.slug)

    if (!project) {
      return response.notFound('Project not found')
    }

    return inertia.render('projects/show', {
      project: ProjectTransformer.transform(project),
    })
  }
}
```

The difference is on the client. Pass the destination component and the props needed to render it to the link:

```tsx
<Link
  route="projects.show"
  routeParams={{ slug: project.slug }}
  component="projects/show"
  pageProps={(_currentProps, sharedProps) => ({
    ...sharedProps,
    project,
    isPreview: true,
  })}
>
  Open project
</Link>
```

- `component` tells Inertia which destination page to render immediately.
- `pageProps` creates the temporary props for that page.
- Spreading `sharedProps` preserves globally shared data expected by the destination.
- The normal request to `projects.show` still starts in the background.

The destination accepts the same props as the real response, plus an optional client-only marker:

```tsx
type ProjectPageProps = InertiaProps<{
  project: Data.Project
  isPreview?: boolean
}>

export default function ProjectPage({ project, isPreview = false }: ProjectPageProps) {
  return (
    <main>
      {isPreview && <p>Loading the latest project details…</p>}
      <h1>{project.title}</h1>
    </main>
  )
}
```

When the server responds, Inertia replaces the temporary page props with the server response. The server does not return `isPreview`, so it disappears automatically. The preview data should contain everything the destination reads before the response arrives.

## Run it

```sh
npm install

cp .env.example .env
node ace generate:key

npm run dev
```
