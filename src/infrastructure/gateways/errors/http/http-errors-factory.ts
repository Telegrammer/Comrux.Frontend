/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpError, InternalServerError, ResourceNotFound } from "./http-errors";
import { HTTP_GENERIC_STATUS_CODE, HTTP_STATUS_CODE } from "../../../../utils/enums/status-code";


type ConstructorType<T> = new ( ...args: any[] ) => T;

export function createError<E extends Error>(ctor: ConstructorType<E>, ...args: any[]): E {
    return new ctor( ...args );
}

export class HttpErrorsFactory {

    static generate(statusCode: number): HttpError | null {
        switch(statusCode) {
            case HTTP_STATUS_CODE.NOT_FOUND:
                return createError(ResourceNotFound);
        }
        
        const generic_type = Math.floor(statusCode / 100)
        if (generic_type < HTTP_GENERIC_STATUS_CODE.CLIENT_ERROR) {
            return null;
        } 

        switch(generic_type) {
            case HTTP_GENERIC_STATUS_CODE.SERVER_ERROR:
                return createError(InternalServerError);
            default:
                return createError(HttpError)
        }
    }
}