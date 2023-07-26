export class Email {
  static validate (email?: string | null): boolean {
    if (!email) return false

    if (email.length > 320) return false

    const [local, domain] = email.split('@')
    if (local.length > 64 || !local.length) return false
    if (domain.length > 255 || !domain.length) return false

    return true
  }
}
