import { UserData } from '../../../entities/user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User repository', () => {
  test('should null if user is not found', async () => {
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)

    const user = await sut.findUserByEmail('')
    expect(user).toBeNull()
  })

  test('should user if it is found in the repository', async () => {
    const users: UserData[] = []
    const sut = new InMemoryUserRepository(users)

    const name = 'any name'
    const email = 'any@mail.com'

    await sut.add({ name, email })
    const user = await sut.findUserByEmail(email)

    expect(user?.name).toBe(name)
  })

  test('should return all users in the repository', async () => {
    const users: UserData[] = [
      { name: 'any_name', email: 'any@mail.com' },
      { name: 'second_name', email: 'second@mail.com' }
    ]
    const sut = new InMemoryUserRepository(users)

    const allUsers = await sut.findAllUsers()
    expect(allUsers).toHaveLength(2)
  })
})
