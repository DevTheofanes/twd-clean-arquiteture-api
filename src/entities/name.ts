import { Either, left, right } from '../shared/either'
import { InvalidNameError } from './errors/invalid-name-error'

export class Name {
  private readonly value: string
  private constructor (name: string) {
    this.value = name
  }

  public static create (name: string): Either<InvalidNameError, Name> {
    if (Name.validate(name)) {
      return right(new Name(name))
    }

    return left(new InvalidNameError())
  }

  public static validate (name?: string | null): boolean {
    if (!name) return false

    const nameLength = name.trim().length
    if (nameLength < 2 || nameLength > 255) return false

    return true
  }
}
