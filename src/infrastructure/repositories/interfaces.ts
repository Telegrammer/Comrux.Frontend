import type { Uuid } from '../../domain/value-objects'
import type { User } from '../../domain/entities/user'

export interface IUserRepository {
    findById(id: Uuid): Promise<User> | User
    list(): Promise<User[]>
}

