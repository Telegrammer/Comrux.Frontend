import { Uuid } from './domain/value-objects';
import { UserMapper } from './infrastructure/mappers/user';
import { useParams } from 'react-router-dom';
import { UserService } from './services/UserService';
import { UserRepository } from './infrastructure/repositories/user-repository';
import { HttpUserGateWay } from './infrastructure/gateways/http-user-gateway';
import { AxiosHttpClient } from './infrastructure/clients/axios-http-client';
import { useState, useEffect } from 'react';
import type { UserDTO } from './domain/entities/dto/user';

// Создаем экземпляр сервиса вне компонента
const userService = new UserService(
  new UserRepository(
    new HttpUserGateWay(
      new AxiosHttpClient() // Должен принимать AxiosInstance в конструкторе
    )
  )
);

type Params = {
  id: string;
};

export const UserPage: React.FC = () => {
  const { id } = useParams<Params>();
  const [user, setUser] = useState<UserDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('User ID is missing');
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Получаем доменный объект User
        const domainUser = await userService.findUserById(new Uuid(id));
        
        // Если нужно преобразовать в DTO для отображения
        const userDto = UserMapper.userToDto(domainUser);
        setUser(userDto);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>User ID: {id}</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};