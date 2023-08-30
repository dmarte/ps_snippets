export declare class PsServiceContainer {
    private static $instance;
    private $provisioned;
    static instance(): PsServiceContainer;
    get<T = any>(key: string): T | null;
    isProvisioned(key: string): boolean;
    provide(key: string, handler: Function): this;
}
