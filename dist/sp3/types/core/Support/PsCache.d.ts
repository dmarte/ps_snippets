export default class PsCache {
    remember(key: string, data: any, expire: string): void;
    exists(key: string): boolean;
    get<T = any>(key: string, callback: () => any): Promise<T | null>;
    forget(key: string): void;
}
