import { type Uuid } from '../../domain/value-objects'
import { type UserDTO } from '../../domain/entities/dto/user'

export interface UserGateway {
    findById(id: Uuid): Promise<UserDTO> | UserDTO
}
