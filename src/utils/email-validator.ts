import { EmailValidador } from '../presentation/protocols/email-validator'

export class EmailValidatorAdapter implements EmailValidador {
  isValid (email: string): boolean {
    return false
  }
}
