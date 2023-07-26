import { Email } from './email'

describe('Email validation', () => {
  test('should not accept null string', () => {
    const email = null
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept undefined string', () => {
    const email = undefined
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept empty string', () => {
    const email = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should accept valid string', () => {
    const email = 'valid@email.com'
    expect(Email.validate(email)).toBeTruthy()
  })
})
