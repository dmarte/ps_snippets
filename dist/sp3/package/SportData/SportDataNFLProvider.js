var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class SportDataNFLProvider {
    key() {
        return 'SportDataNFL';
    }
    boot({ debug, engine }) {
        if (debug) {
            console.debug(`[PadSquad]:${this.key()} Sport data BOOTED.`);
        }
        return {
            scoreByDate: (payload) => this.scoreByDate(Object.assign(Object.assign({}, payload), { debug })),
            teams: (payload) => this.teams(Object.assign(Object.assign({}, payload), { debug }))
        };
    }
    register(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            if (ctx.debug) {
                console.debug(`[PadSquad]:${this.key()} Sport data REGISTERED.`);
            }
            const { default: Api } = yield import('../../core/Support/PsApi.js');
            this.api = new Api({
                apiToken: ctx.parameters.apiToken,
                baseUrl: 'https://api.sportsdata.io/v3/nfl/',
                apiKeyName: 'key',
                authorization: 'key',
            });
            this.cache = ctx.engine.get('Cache');
            this.registerComponents(ctx);
        });
    }
    scoreByDate({ date, debug }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const key = this.date(date);
            const response = yield ((_a = this.cache) === null || _a === void 0 ? void 0 : _a.get(`${this.key()}:scoreByDate:${key}`, () => __awaiter(this, void 0, void 0, function* () {
                var _c;
                return (_c = this.api) === null || _c === void 0 ? void 0 : _c.get(`scores/json/ScoresByDate/${key}`);
            })));
            if (debug) {
                console.log(`[PadSquad]:${this.key()}.scoreByDate`, response === null || response === void 0 ? void 0 : response.data);
            }
            return ((_b = response === null || response === void 0 ? void 0 : response.data) !== null && _b !== void 0 ? _b : []);
        });
    }
    teams({ debug, season }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!season) {
                return [];
            }
            const response = yield ((_a = this.cache) === null || _a === void 0 ? void 0 : _a.get(`${this.key()}:teams:${season}`, () => __awaiter(this, void 0, void 0, function* () {
                var _c;
                return (_c = this.api) === null || _c === void 0 ? void 0 : _c.get(`scores/json/Teams/${season}`);
            })));
            if (debug) {
                console.log(`[PadSquad]:${this.key()}.teams`, response === null || response === void 0 ? void 0 : response.data);
            }
            return (_b = response === null || response === void 0 ? void 0 : response.data) !== null && _b !== void 0 ? _b : [];
        });
    }
    date(date) {
        const d = new Date(Date.parse(date));
        return [
            d.getFullYear(),
            d.toLocaleDateString("en-us", {
                month: "2-digit",
            }),
            d.getDate(),
        ].join("-");
    }
    registerComponents({ debug }) {
        window.document.addEventListener('alpine:init', ({ currentTarget }) => __awaiter(this, void 0, void 0, function* () {
            const w = (currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.defaultView) || window;
            const engine = this;
            w.Alpine.data('NFLScoresByDate', () => ({
                init() {
                    var _a, _b, _c, _d;
                    return __awaiter(this, void 0, void 0, function* () {
                        console.log('NFLScoresByDate', this.games);
                        this.games = yield engine.scoreByDate({
                            debug,
                            date: new Date('2023-09-18').toISOString()
                        });
                        if ((_b = (_a = this.games) === null || _a === void 0 ? void 0 : _a.at(0)) === null || _b === void 0 ? void 0 : _b.Season) {
                            this.teams = yield engine.teams({
                                debug,
                                season: `${(_d = (_c = this.games) === null || _c === void 0 ? void 0 : _c.at(0)) === null || _d === void 0 ? void 0 : _d.Season}`
                            });
                        }
                    });
                },
                team(id) {
                    return this.teams.find(t => t.TeamID === id);
                },
                selectGame(game) {
                    console.log('____PELEMPITO', game);
                    this.currentGame = game;
                    this.isOpen = true;
                    console.log(this.isOpen);
                },
                closeCurrentGame() {
                    this.currentGame = undefined;
                    this.isOpen = false;
                },
                currentGame: undefined,
                loading: false,
                isOpen: false,
                games: [],
                teams: [],
            }));
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BvcnREYXRhTkZMUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWNrYWdlL1Nwb3J0RGF0YS9TcG9ydERhdGFORkxQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsT0FBTyxPQUFPLG9CQUFvQjtJQUl2QyxHQUFHO1FBQ0QsT0FBTyxjQUFjLENBQUE7SUFDdkIsQ0FBQztJQUVELElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQXNCO1FBQ3ZDLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsQ0FBQTtTQUM3RDtRQUVELE9BQU87WUFDTCxXQUFXLEVBQUUsQ0FBQyxPQUF3QyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxpQ0FDdEUsT0FBTyxLQUNWLEtBQUssSUFDTDtZQUNGLEtBQUssRUFBRSxDQUFDLE9BQWtDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLGlDQUNwRCxPQUFPLEtBQ1YsS0FBSyxJQUNMO1NBQ0gsQ0FBQTtJQUNILENBQUM7SUFFWSxRQUFRLENBQUMsR0FBd0I7O1lBQzVDLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO2FBQ2pFO1lBQ0QsTUFBTSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsR0FBRyxNQUFNLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBRWxFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7Z0JBQ2pCLFFBQVEsRUFBRyxHQUFHLENBQUMsVUFBMEMsQ0FBQyxRQUFRO2dCQUNsRSxPQUFPLEVBQUUsbUNBQW1DO2dCQUM1QyxVQUFVLEVBQUUsS0FBSztnQkFDakIs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