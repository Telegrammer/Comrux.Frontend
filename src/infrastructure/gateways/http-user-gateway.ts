import { Uuid } from '../../domain/value-objects'
import type { HttpResponse, IHttpClient } from '../clients/interfaces'
import { type UserGateway } from './interfaces'
import { type UserDTO } from '../../domain/entities/dto/user'
import { InfrastructureError } from './errors/shared'
import { HttpErrorsFactory } from './errors/http/http-errors-factory'
import { HttpError } from './errors/http/http-errors'

export class HttpUserGateWay implements UserGateway {
    private readonly _client: IHttpClient

    constructor(client: IHttpClient) {
        if (!client) throw 'Client is required';
        this._client = client
    }
    async findById(id: Uuid): Promise<UserDTO> {
        let response: HttpResponse<UserDTO>
        try {

            response = await this._client.get<UserDTO>(`/user/${id.value}`);
        }
        catch(error) {
            throw new InfrastructureError('Something wrong happened to the client', {cause: error});
        }

        const error: HttpError | null = HttpErrorsFactory.generate(response.statusCode);
        if (error) throw error;
        return response.data;

       
    }
}
