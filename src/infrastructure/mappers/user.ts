import type { UserDTO } from '../../domain/entities/dto/user'
import { User } from '../../domain/entities/user'
import { Email, Name, PassedDate, Password, PhoneNumber, Uuid } from '../../domain/value-objects'

export class UserMapper {
    static userToDto(user: User): UserDTO {
        return {
            id: user.id.value,
            name: user.name.value,
            email: user.email.value,
            phone: user.phone.value,
            created_at: user.created_at.value.toString(),
            password: user.password.value,
        }
    }

    static dtoToUser(dto: UserDTO): User {

        return new User(
            new Uuid(dto.id),
            new Name(dto.name),
            new PhoneNumber(dto.phone),
            new Email(dto.email),
            PassedDate.fromString(dto.created_at),
            new Password(dto.password)
        )
    }
}
