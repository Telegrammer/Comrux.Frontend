import type { Uuid } from '../../domain/value-objects'
import { User } from '../../domain/entities/user'
import type { IUserRepository } from './interfaces'
import type { UserGateway } from '../gateways/interfaces'
import type { UserDTO } from '../../domain/entities/dto/user'
import { UserMapper } from '../mappers/user'
import { DomainError } from '../../domain/errors'

export class UserRepository implements IUserRepository {
    private _gateway: UserGateway

    constructor(gateway: UserGateway) {
        if (!gateway) {
            throw 'User gateway is required'
        }
        this._gateway = gateway
    }
    async findById(id: Uuid): Promise<User> {
        let dto: UserDTO
        try {
            dto = await this._gateway.findById(id)
        } catch (error) {
            throw new DomainError('Cannot find user', { cause: error })
        }
        return UserMapper.dtoToUser(dto);
    }

    async list(): Promise<User[]> {
        return []
    }
}
