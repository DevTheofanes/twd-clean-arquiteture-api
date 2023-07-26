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

  test('should not accept local part larger than 64 chars', () => {
    const email = 'l'.repeat(65) + '@email.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept domain part larger than 255 chars', () => {
    const email = 'local@' + 'd'.repeat(128) + 'd'.repeat(128)
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept string larger than 320 chars', () => {
    const email = 'l'.repeat(64) + '@' + 'd'.repeat(128) + '.' + 'd'.repeat(127)
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept when local part is empty', () => {
    const email = '@email.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept when domain part is empty', () => {
    const email = 'local@'
    expect(Email.validate(email)).toBeFalsy()
  })

  test.only('should not accept domain with a part larger than 63 chars', () => {
    const email = 'local@' + 'd'.repeat(64) + '.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept local part with invalid char', () => {
    const email = 'local @mail.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept local part with two dots', () => {
    const email = 'lo..cal@mail.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept local part with ending dot', () => {
    const email = 'local.@mail.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  test('should not accept email without an at-sign', () => {
    const email = 'localmail.com'
    expect(Email.validate(email)).toBeFalsy()
  })
})
