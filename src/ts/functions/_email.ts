import { IValid } from "../interface"
import { MAX_EMAIL_LENGTH, EMAIL_REGEX, MAX_LOCALPART_LENGTH } from "../datas/email"
import { correctLength } from '../helpers'

class Email implements IValid {
    isValid (email: string): boolean {
        if (!email || typeof email !== 'string') return false

        const validEmail = EMAIL_REGEX.exec(email)

        if (!validEmail) return false

        return correctLength(1, validEmail[0].length, { minLength: 1, maxLength: MAX_EMAIL_LENGTH }) && correctLength(1, validEmail[1].length, { minLength: 1, maxLength: MAX_LOCALPART_LENGTH })
    }
}

const email = new Email()

export function isValidEmail (param: string) {
    return email.isValid(param)
}