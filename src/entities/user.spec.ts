import { left } from '../shared/either'
import { InvalidEmailError } from './errors/invalid-email-error'
import { InvalidNameError } from './errors/invalid-name-error'
import { User } from './user'

describe('User domain entity', () => {
  test('should not create user with invalid e-mail address', () => {
    const invalidEmail = 'invalid_email'
    const userError = User.create({ name: 'any name', email: invalidEmail })

    expect(userError).toEqual(left(new InvalidEmailError()))
  })

  test('should not create user with invalid name (to few characters)', () => {
    const invalidName = 'O             '
    const userError = User.create({ name: invalidName, email: 'any@valid.mail' })

    expect(userError).toEqual(left(new InvalidNameError()))
  })

  test('should not create user with invalid name (to many characters)', () => {
    const invalidName = 'O'.repeat(256)
    const userError = User.create({ name: invalidName, email: 'any@valid.mail' })

    expect(userError).toEqual(left(new InvalidNameError()))
  })

  test('should create user with valid values', () => {
    const validName = 'any name'
    const validEmail = 'any@valid.mail'
    const user = User.create({ name: validName, email: validEmail }).value as User

    expect(user.name.value).toEqual(validName)
    expect(user.email.value).toEqual(validEmail)
  })
})
