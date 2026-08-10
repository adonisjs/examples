import { registry } from '@generated/registry'
import { createTuyau } from '@tuyau/core/client'

export const client = createTuyau({
  baseUrl: import.meta.env.VITE_BASE_PATH,
  registry,
})

const basePath = import.meta.env.VITE_BASE_PATH === '/' ? '' : import.meta.env.VITE_BASE_PATH

export const urlFor = new Proxy(client.urlFor, {
  apply(target, thisArg, argumentsList) {
    return `${basePath}${Reflect.apply(target, thisArg, argumentsList)}`
  },
})

Object.defineProperty(client, 'urlFor', { value: urlFor })
