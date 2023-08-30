export default class PsApiProvider implements Ps.Provider.Interface {
    private api?;
    key(): string;
    boot({ debug }: Ps.Provider.Context): Promise<Ps.Support.Api.Instance | undefined>;
    register({ parameters, debug }: Ps.Provider.Context): Promise<void>;
}
