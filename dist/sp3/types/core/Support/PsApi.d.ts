export default class PsApi {
    private $config;
    constructor(config: Ps.Support.Api.Config);
    get<T>(path: string, params?: {
        [key: string]: any;
    }): Promise<Ps.Support.Api.Response<any>>;
    private url;
}
