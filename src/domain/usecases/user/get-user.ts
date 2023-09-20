export interface IGetUserUseCase<T, R> {
  execute(params: T): Promise<R>
}
