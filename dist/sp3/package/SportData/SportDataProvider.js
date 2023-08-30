var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class SportDataProvider {
    key() {
        return 'SportData';
    }
    boot({ debug }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (debug) {
                console.debug(`[PadSquad]:${this.key()} Sport data booted.`);
            }
            return {};
        });
    }
    register({ debug, engine, parameters }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (debug) {
                console.debug(`[PadSquad]:${this.key()} Sport data registered.`);
            }
            yield engine.load({
                name: '@PadSquad/Package/SportData/SportDataNFLProvider',
                key: 'SportData.NFL',
                parameters,
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BvcnREYXRhUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWNrYWdlL1Nwb3J0RGF0YS9TcG9ydERhdGFQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQUFNLENBQUMsT0FBTyxPQUFPLGlCQUFpQjtJQUNwQyxHQUFHO1FBQ0QsT0FBTyxXQUFXLENBQUE7SUFDcEIsQ0FBQztJQUVLLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBc0I7O1lBQ3JDLElBQUksS0FBSyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDLENBQUE7YUFDN0Q7WUFDRCxPQUFPLEVBQUUsQ0FBQTtRQUNYLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFzQjs7WUFDN0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksQ0FBQyxHQUFHLEVBQUUseUJBQXlCLENBQUMsQ0FBQTthQUNqRTtZQUVELE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsSUFBSSxFQUFFLGtEQUFrRDtnQkFDeEQsR0FBRyxFQUFFLGVBQWU7Z0JBQ3BCLFVBQVU7YUFDWCxDQUFDLENBQUE7UUFDSixDQUFDO0tBQUE7Q0FDRiJ9