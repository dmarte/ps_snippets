export default class implements Ps.Provider.Interface {
    private cache?;
    key(): string;
    boot({ debug }: Ps.Provider.Context): Ps.Support.Cache.Instance | undefined;
    register({ parameters }: Ps.Provider.Context): Promise<void>;
}
