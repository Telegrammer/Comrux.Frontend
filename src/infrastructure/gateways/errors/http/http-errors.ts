import { InfrastructureError } from "../shared"


export class HttpError extends InfrastructureError {
}

export class ResourceNotFound extends HttpError {
}


export class ClientError extends HttpError {
}

export class InternalServerError extends HttpError {
}