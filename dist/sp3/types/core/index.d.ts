export declare class PadSquad {
    private $providers;
    private readonly $container;
    constructor(tagParams: {
        [key: string]: any;
    });
    withSportDataNFL(config: Padsquad.Package.SportData.Config): void;
    withApi(params: Padsquad.Support.Api.Config): this;
    preload(pathClass: string, alias: string, parameters?: {
        [key: string]: any;
    }): this;
    load({ name, key, parameters }: {
        name: string;
        key: string;
        parameters?: {
            [key: string]: any;
        };
    }): Promise<void>;
    provide<T>(key: string): T;
    start(): Promise<this>;
}
