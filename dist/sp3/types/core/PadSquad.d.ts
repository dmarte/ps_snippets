export default class PadSquad implements Ps.Instance.App {
    private $providers;
    private $loaded;
    constructor(tagParams?: Ps.Tag.Params);
    preload(pathClass: string, alias: string, parameters?: {
        [p: string]: any;
    }): this;
    load({ name, key, parameters }: {
        name: string;
        key: string;
        parameters?: {
            [key: string]: any;
        };
    }): Promise<void>;
    isMounted(key: string): boolean;
    get<T = any>(key: string): T | null;
    start(): Promise<this>;
}
export declare function useSportDataNFL(config: Pick<Ps.Support.Api.Config, 'apiToken'>): Ps.Instance.ModuleConfigSportDataNFL;
export declare function useCache(): Ps.Instance.ModuleConfigCache;
export declare function createPadSquad({ tagParams, preload }: {
    tagParams?: Ps.Tag.Params;
    preload: Ps.Instance.ModuleConfig[];
}): Promise<PadSquad>;
