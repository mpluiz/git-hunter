import { Entity } from '@/domain/entities/entity.ts'

interface FakeEntityProps {
  name?: string
}

class FakeEntity extends Entity<FakeEntityProps> {
  static create(props: FakeEntityProps) {
    return new FakeEntity(props)
  }

  get name() {
    return this.props.name
  }
}

describe('Entity', () => {
  it('should get the correct values when use the entity class', () => {
    const name = 'valid-name'
    const sut = FakeEntity.create({ name })

    expect(sut.name).toEqual(name)
  })
})
