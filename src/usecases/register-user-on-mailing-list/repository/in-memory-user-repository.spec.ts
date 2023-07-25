import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User repository', () => {
  test('should null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)

    const user = await userRepo.findUserByEmail('')
    expect(user).toBeNull()
  })

  test('should user if it is found in the repository', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)

    const name = 'any name'
    const email = 'any@mail.com'

    await userRepo.add({ name, email })
    const user = await userRepo.findUserByEmail(email)

    expect(user?.name).toBe(name)
  })
})
