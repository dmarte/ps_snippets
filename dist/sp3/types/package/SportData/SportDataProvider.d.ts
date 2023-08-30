export default class SportDataProvider implements Ps.Provider.Interface {
    key(): string;
    boot({ debug }: Ps.Provider.Context): Promise<{}>;
    register({ debug, engine, parameters }: Ps.Provider.Context): Promise<void>;
}
