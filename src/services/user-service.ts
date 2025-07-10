import type { User } from '../domain/entities/user'
import { DomainError } from '../domain/errors'
import type { Uuid } from '../domain/value-objects'
import type { IUserRepository } from '../infrastructure/repositories/interfaces'

export class UserService {
    private _userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        if (!userRepository) {
            throw new Error('Repository is required')
        }
        this._userRepository = userRepository
    }

    async findUserById(id: Uuid): Promise<User> {

        try {
            const foundUser = await this._userRepository.findById(id);
            return foundUser;
        } catch (error) {
            if (error instanceof DomainError) throw error
            throw new Error('Cannot find user via critical failure', { cause: error })
        }
    }
}
