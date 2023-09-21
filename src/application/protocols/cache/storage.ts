export interface Storage {
  set: (key: string, value: any) => void
  get: (key: string) => any
  clear: () => void
}
