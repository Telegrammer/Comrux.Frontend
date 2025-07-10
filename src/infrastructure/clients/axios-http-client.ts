import {type AxiosInstance, type AxiosResponse } from 'axios'
import type { HttpReguestConfig, HttpResponse, IHttpClient } from './interfaces'
import { AxiosError } from 'axios';
import { api } from './dependencies';

export class AxiosHttpClient implements IHttpClient {
    private readonly _instance: AxiosInstance

    constructor(instance: AxiosInstance = api) {
        this._instance = instance
    }

    _toHttpResponse<T>(response: AxiosResponse<T>): HttpResponse<T> {
        return {statusCode: response.status, data: response.data}
    }

    async get<T>(path: string, config?: HttpReguestConfig): Promise<HttpResponse<T>> {
        const response: AxiosResponse<T> = await this._instance.get(path, config);
        return this._toHttpResponse(response);
    }
    async post<T>(path: string, config?: HttpReguestConfig): Promise<HttpResponse<T>> {
        const response: AxiosResponse<T> = await this._instance.get(path, config);
        return this._toHttpResponse(response);
    }
    async put<T>(path: string, config?: HttpReguestConfig): Promise<HttpResponse<T>> {
        const response: AxiosResponse<T> = await this._instance.get(path, config);
        return this._toHttpResponse(response);
    }
    async delete<T>(path: string, config?: HttpReguestConfig): Promise<HttpResponse<T>> {
        const response: AxiosResponse<T> = await this._instance.get(path, config);
        return this._toHttpResponse(response);
    }

    
    setupInterceptors() : void {
        this._instance.interceptors.response.use((response) => {
            return response;
        },
        async (error) => {
          console.log(`Intercepted error: ${(error as AxiosError).message}`)
          return Promise.reject(error)
        })
    }
}
