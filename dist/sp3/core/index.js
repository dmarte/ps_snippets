var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PsServiceContainer } from "./Support/PsServiceContainer.js";
export class PadSquad {
    constructor(tagParams) {
        this.$providers = [];
        this.$container = PsServiceContainer.instance();
    }
    withSportDataNFL(config) {
        if (!config) {
            throw new TypeError('[PadSquad]: Api configuration is needed.');
        }
        const settings = Object.assign({}, config);
        this.preload('@PadSquad/Package/SportData/SportDataProvider', 'SportData', settings);
    }
    withApi(params) {
        if (!params) {
            throw new TypeError('[PadSquad]: Api configuration is needed.');
        }
        return this.preload('@PadSquad/Providers/PsApiProvider', 'api', params);
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
                    container: this.$container,
                    parameters
                };
                provider.register(context);
                this.$container.register({
                    key,
                    handler: provider.boot,
                    parameters
                });
            }
            catch (e) {
                throw TypeError(`[PadSquad:Core] Unable to load ${name}, got a message:"${e}"`);
            }
        });
    }
    provide(key) {
        return this.$container.get(key);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBTW5FLE1BQU0sT0FBTyxRQUFRO0lBUW5CLFlBQVksU0FBaUM7UUFQckMsZUFBVSxHQUlaLEVBQUUsQ0FBQTtRQUNTLGVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUkzRCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsTUFBeUM7UUFDeEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSxTQUFTLENBQUMsMENBQTBDLENBQUMsQ0FBQTtTQUNoRTtRQUNELE1BQU0sUUFBUSxxQkFDVCxNQUFNLENBQ1YsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsK0NBQStDLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQ3RGLENBQUM7SUFFRCxPQUFPLENBQUMsTUFBbUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE1BQU0sSUFBSSxTQUFTLENBQUMsMENBQTBDLENBQUMsQ0FBQTtTQUNoRTtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FDZixtQ0FBbUMsRUFDbkMsS0FBSyxFQUNMLE1BQU0sQ0FDVCxDQUFBO0lBQ0gsQ0FBQztJQUVNLE9BQU8sQ0FBQyxTQUFpQixFQUFFLEtBQWEsRUFBRSxVQUVoRDtRQUNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFBO1FBQ3BELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVLLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUloQzs7WUFDQyxJQUFJO2dCQUNGLE1BQU0sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFBO2dCQUVwRCxNQUFNLFFBQVEsR0FBK0IsSUFBSSxNQUFNLEVBQUUsQ0FBQTtnQkFDekQsTUFBTSxPQUFPLEdBQTZCO29CQUN4QyxNQUFNLEVBQUUsSUFBSTtvQkFDWixLQUFLLEVBQUUsSUFBSTtvQkFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzFCLFVBQVU7aUJBQ1gsQ0FBQztnQkFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUUxQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztvQkFDdkIsR0FBRztvQkFDSCxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUk7b0JBQ3RCLFVBQVU7aUJBQ1gsQ0FBQyxDQUFBO2FBRUg7WUFBQyxPQUFPLENBQWtCLEVBQUU7Z0JBQzNCLE1BQU0sU0FBUyxDQUFDLGtDQUFrQyxJQUFJLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2hGO1FBQ0gsQ0FBQztLQUFBO0lBRU0sT0FBTyxDQUFJLEdBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSSxHQUFHLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBRVksS0FBSzs7WUFDaEIsS0FBSyxNQUFNLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUM1RCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUM7b0JBQ2QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsR0FBRyxFQUFFLEtBQUs7b0JBQ1YsVUFBVTtpQkFDWCxDQUFDLENBQUE7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQztLQUFBO0NBQ0YifQ==