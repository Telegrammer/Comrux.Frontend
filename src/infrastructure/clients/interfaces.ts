

export type HttpReguestConfig = {
    baseUrl: string,
    content_type: string
    headers: {[key: string]: string}
}

export type HttpResponse<T> = {
    statusCode: number
    data: T
}


export interface IHttpClient {

    get<T>(path: string, config?: HttpReguestConfig): Promise<HttpResponse<T>>
    post<T>(path: string, config?: HttpReguestConfig, data?: unknown): Promise<HttpResponse<T>>
    put<T>(path: string, config?: HttpReguestConfig, data?: unknown): Promise<HttpResponse<T>>
    delete<T>(path: string, config?: HttpReguestConfig): Promise<HttpResponse<T>>
}




