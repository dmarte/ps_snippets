declare global {
    namespace Padsquad.Support.Api {
        type Response<T = any> = {
            failed: boolean;
            message: string;
            data: T;
        };
        type Config = {
            baseUrl: string;
            authorization: undefined | 'key' | 'bearer';
            apiKeyName: string;
            apiToken: string;
        };
        type Instance = {
            get<T>(path: string, params?: {
                [key: string]: any;
            }): Promise<Response<T>>;
        };
    }
    namespace Padsquad.Support.Cache {
        type Instance = {
            remember(key: string, data: any, expire: string): void;
            forget(key: string): void;
            exists(key: string): boolean;
            get<T = any>(key: string, callback: () => any): Promise<T | null>;
        };
    }
}
export {};
