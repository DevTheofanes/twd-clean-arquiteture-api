import { UserRepository } from '../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[];
  constructor (repository: UserData[]) {
    this.repository = repository
  }

  async add (user: UserData): Promise<void> {
    const exists = await this.exists(user)
    if (!exists) {
      this.repository.push(user)
    }
  }

  async findUserByEmail (email: string): Promise<UserData | null> {
    return this.repository.find((user) => user.email === email) ?? null
  }

  async findAllUsers (): Promise<UserData[]> {
    throw new Error('Method not implemented.')
  }

  async exists (user: UserData): Promise<boolean> {
    return !!(await this.findUserByEmail(user.email))
  }
}
