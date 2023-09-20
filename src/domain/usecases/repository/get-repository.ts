export interface IGetRepositoryUseCase<T, R> {
  execute(params: T): Promise<R>
}
