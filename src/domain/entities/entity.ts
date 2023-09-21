export abstract class Entity<T> {
  protected props: T

  protected constructor(props: T) {
    this.props = props
  }

  toValue(): T {
    return { ...this.props }
  }
}
