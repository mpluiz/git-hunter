import { AxiosInstance } from 'axios'

export interface HttpClient<T = AxiosInstance> {
  http: T
}
