export interface RequestErrorProps {
  message: string
  key: string
  description?: string
  code?: string
  statusCode?: string | number
}

export class RequestError extends Error {
  key: string
  code?: string
  description?: string
  statusCode?: string | number

  constructor({ message, key, code, description, statusCode }: RequestErrorProps) {
    super(message)
    this.key = key
    this.code = code
    this.description = description
    this.statusCode = statusCode
  }
}
