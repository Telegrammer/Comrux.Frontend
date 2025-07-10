import type { IEntity } from '../interfaces'
import type { Email, Name, PassedDate, Password, PhoneNumber, Uuid } from '../value-objects'

export class User implements IEntity {
    private _id: Uuid
    private _name: Name
    private _phone: PhoneNumber
    private _email: Email
    private _created_at: PassedDate
    private _password: Password

    constructor(id: Uuid, name: Name, phone: PhoneNumber, email: Email, created_at: PassedDate, password: Password) {
        this._id = id
        this._name = name
        this._phone = phone
        this._email = email
        this._created_at = created_at
        this._password = password
    }

    get(): User {
        return new User(this._id, this._name, this._phone, this._email, this._created_at, this._password)
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    get phone() {
        return this._phone
    }

    get email() {
        return this._email
    }

    get created_at() {
        return this._created_at
    }

    get password() {
        return this._password
    }

}
