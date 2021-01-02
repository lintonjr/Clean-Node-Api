import { EmailValidador } from '../presentation/protocols/email-validator'
import validator from 'validator'

export class EmailValidatorAdapter implements EmailValidador {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
