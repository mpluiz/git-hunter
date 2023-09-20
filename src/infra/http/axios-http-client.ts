import { HttpClient } from '@/application/protocols/http/http-client.ts'
import axios, { AxiosInstance } from 'axios'

export interface AxiosHttpClientProps {
  path?: string
  baseUrl: string
}

export class AxiosHttpClient implements HttpClient<AxiosInstance> {
  readonly http: AxiosInstance

  constructor({ baseUrl, path }: AxiosHttpClientProps) {
    this.http = axios.create({
      baseURL: baseUrl + path
    })
  }
}
