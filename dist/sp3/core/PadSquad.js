var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class PadSquad {
    constructor(tagParams) {
        this.$providers = [];
        this.$loaded = {};
    }
    preload(pathClass, alias, parameters) {
        this.$providers.push({ pathClass, alias, parameters });
        return this;
    }
    load({ name, key, parameters }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { default: module } = yield import(`${name}.js`);
                const provider = new module();
                const context = {
                    engine: this,
                    debug: true,
                    parameters
                };
                yield provider.register(context);
                this.$loaded[key] = provider.boot(context);
            }
            catch (e) {
                throw TypeError(`[PadSquad:Core] Unable to load ${name}, got a message:"${e}"`);
            }
        });
    }
    isMounted(key) {
        return typeof this.$loaded[key] !== 'undefined';
    }
    get(key) {
        if (!this.isMounted(key)) {
            return null;
        }
        return this.$loaded[key];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const { alias, parameters, pathClass } of this.$providers) {
                yield this.load({
                    name: pathClass,
                    key: alias,
                    parameters
                });
            }
            return this;
        });
    }
}
export function useSportDataNFL(config) {
    if (!config) {
        throw new TypeError('[PadSquad]: Api configuration is needed.');
    }
    return {
        name: 'SportDataNFL',
        path: '@PadSquad/Package/SportData/SportDataNFLProvider',
        config
    };
}
export function useCache() {
    return {
        name: 'Cache',
        path: '@PadSquad/Core/Providers/PsCacheProvider',
        config: {}
    };
}
export function createPadSquad({ tagParams, preload = [] }) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (window.$ps instanceof PadSquad) {
            return window.$ps;
        }
        window.$ps = new PadSquad(tagParams);
        for (const module of preload) {
            (_a = window.$ps) === null || _a === void 0 ? void 0 : _a.preload(module.path, module.name, module.config);
        }
        yield window.$ps.start();
        return window.$ps;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFkU3F1YWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL1BhZFNxdWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sQ0FBQyxPQUFPLE9BQU8sUUFBUTtJQVEzQixZQUFZLFNBQXlCO1FBUDdCLGVBQVUsR0FJWixFQUFFLENBQUE7UUFDQSxZQUFPLEdBQTJCLEVBQUUsQ0FBQTtJQUc1QyxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQWlCLEVBQUUsS0FBYSxFQUFFLFVBRXpDO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUE7UUFDcEQsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBR0ssSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBSWhDOztZQUNDLElBQUk7Z0JBQ0YsTUFBTSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUE7Z0JBRXBELE1BQU0sUUFBUSxHQUEwQixJQUFJLE1BQU0sRUFBRSxDQUFBO2dCQUNwRCxNQUFNLE9BQU8sR0FBd0I7b0JBQ25DLE1BQU0sRUFBRSxJQUFJO29CQUNaLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVU7aUJBQ1gsQ0FBQztnQkFFRixNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUUzQztZQUFDLE9BQU8sQ0FBa0IsRUFBRTtnQkFDM0IsTUFBTSxTQUFTLENBQUMsa0NBQWtDLElBQUksb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDaEY7UUFDSCxDQUFDO0tBQUE7SUFFTSxTQUFTLENBQUMsR0FBVztRQUMxQixPQUFPLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLENBQUE7SUFDakQsQ0FBQztJQUVNLEdBQUcsQ0FBVSxHQUFXO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFNLENBQUE7SUFDL0IsQ0FBQztJQUVZLEtBQUs7O1lBQ2hCLEtBQUssTUFBTSxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDNUQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNkLElBQUksRUFBRSxTQUFTO29CQUNmLEdBQUcsRUFBRSxLQUFLO29CQUNWLFVBQVU7aUJBQ1gsQ0FBQyxDQUFBO2FBQ0g7WUFDRCxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUM7S0FBQTtDQUNGO0FBRUQsTUFBTSxVQUFVLGVBQWUsQ0FBQyxNQUErQztJQUM3RSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ1gsTUFBTSxJQUFJLFNBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFBO0tBQ2hFO0lBQ0QsT0FBTztRQUNMLElBQUksRUFBRSxjQUFjO1FBQ3BCLElBQUksRUFBRSxrREFBa0Q7UUFDeEQsTUFBTTtLQUNQLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLFFBQVE7SUFDdEIsT0FBTztRQUNMLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLDBDQUEwQztRQUNoRCxNQUFNLEVBQUUsRUFBRTtLQUNYLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFnQixjQUFjLENBQUMsRUFBQyxTQUFTLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFHNUQ7OztRQUVDLElBQUksTUFBTSxDQUFDLEdBQUcsWUFBWSxRQUFRLEVBQUU7WUFDbEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFBO1NBQ2xCO1FBRUQsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVwQyxLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUM1QixNQUFBLE1BQU0sQ0FBQyxHQUFHLDBDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzdEO1FBRUQsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRXhCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQTs7Q0FDbEIifQ==