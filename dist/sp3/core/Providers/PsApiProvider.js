var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class PsApiProvider {
    key() {
        return 'Api';
    }
    boot({ debug }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (debug) {
                console.log(`[Padsquad]:${this.key()} service booted.`);
            }
            return this.api;
        });
    }
    register({ parameters, debug }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (debug) {
                console.log(`[Padsquad]:${this.key()} service registered.`);
            }
            const { default: Api } = yield import("../Support/PsApi");
            this.api = new Api(parameters);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHNBcGlQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvcmUvUHJvdmlkZXJzL1BzQXBpUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxDQUFDLE9BQU8sT0FBTyxhQUFhO0lBR2hDLEdBQUc7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFSyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQXNCOztZQUNyQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO2FBQ3hEO1lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO1FBQ2pCLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQXNCOztZQUNyRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQyxDQUFBO2FBQzVEO1lBQ0QsTUFBTSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUMsR0FBRyxNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBRXZELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBbUMsQ0FBQyxDQUFBO1FBQ3pELENBQUM7S0FBQTtDQUNGIn0=