export interface IFetchRepositoriesUseCase<T, R> {
  execute(params: T): Promise<R>
}
