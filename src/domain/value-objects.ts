import {
    InvalidEmailError,
    InvalidPassedDateError,
    InvalidPasswordError,
    InvalidPhoneError,
    InvalidUuidError,
    InvalidNameError,
} from './errors'

export class Uuid {
    private readonly _value: string

    constructor(uuid: string) {
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.exec(uuid)
        if (!isUuid) {
            throw new InvalidUuidError('Given value is not an uuid')
        }
        this._value = uuid
    }

    get value(): string {
        return this._value
    }
}

export class Password {
    private readonly _value: string

    constructor(password: string) {
        if (password.length < 8) {
            throw new InvalidPasswordError('Given value does not fit into password requirements')
        }
        this._value = password
    }

    get value(): string {
        return this._value
    }
}

export class Name {
    private readonly _value: string

    constructor(name: string) {
        if (name.length < 3) {
            throw new InvalidNameError('Name is too short')
        }
        this._value = name
    }

    get value(): string {
        return this._value
    }
}

export class Email {
    private readonly _value: string

    constructor(email: string) {
        const normalizedEmail: string = email.toLowerCase()
        const isEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.exec(
                normalizedEmail
            )
        if (!isEmail) {
            throw new InvalidEmailError('Given value is not an email.')
        }
        this._value = email
    }

    get value(): string {
        return this._value
    }
}

export class PassedDate {
    private readonly _value: Date

    constructor(date: Date, now: Date = new Date()) {
        if (date > now) {
            throw new InvalidPassedDateError('Passed date must have earlier date then now')
        }
        this._value = date
    }

    get value(): Date {
        return this._value
    }

    static fromString(date_string: string): PassedDate {
        return new PassedDate(new Date(date_string))
    }
}

export class PhoneNumber {
    private readonly _value: string

    constructor(phone: string) {
        const isPhone = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.exec(phone)
        if (!isPhone) {
            throw new InvalidPhoneError('Given value is not a phone number')
        }
        this._value = phone
    }

    get value() {
        return this._value
    }
}
