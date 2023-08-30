export default class SportDataNFLProvider implements Ps.Provider.Interface {
    protected api?: Ps.Support.Api.Instance;
    protected cache?: Ps.Support.Cache.Instance;
    key(): string;
    boot({ debug, engine }: Ps.Provider.Context): {
        scoreByDate: (payload: Ps.SportData.PayloadScoreByDate) => Promise<Ps.SportData.GameScore[]>;
        teams: (payload: Ps.SportData.PayloadTeams) => Promise<Ps.SportData.Team[]>;
    };
    register(ctx: Ps.Provider.Context): Promise<void>;
    protected scoreByDate({ date, debug }: Ps.SportData.PayloadScoreByDate): Promise<Ps.SportData.GameScore[]>;
    protected teams({ debug, season }: Ps.SportData.PayloadTeams): Promise<Ps.SportData.Team[]>;
    protected date(date: string): string;
    protected registerComponents({ debug }: Ps.Provider.Context): void;
}
