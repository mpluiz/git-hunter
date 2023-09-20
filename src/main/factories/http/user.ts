import { HttpClient } from '@/application/protocols/http/http-client.ts'
import { AxiosHttpClient } from '@/infra/http/axios-http-client.ts'

export function makeUserHttpClient(): HttpClient {
  const path = '/users'
  const baseUrl = import.meta.env.VITE_GITHUB_BASE_URL
  return new AxiosHttpClient({ baseUrl, path })
}
