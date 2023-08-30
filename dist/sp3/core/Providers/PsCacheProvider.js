var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class {
    key() {
        return 'Cache';
    }
    boot({ debug }) {
        if (debug) {
            console.log(`[Padsquad]:${this.key()} service booted.`);
        }
        return this.cache;
    }
    register({ parameters }) {
        return __awaiter(this, void 0, void 0, function* () {
            const { default: Cache } = yield import("../Support/PsCache.js");
            this.cache = new Cache();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHNDYWNoZVByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29yZS9Qcm92aWRlcnMvUHNDYWNoZVByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU0sQ0FBQyxPQUFPO0lBR1osR0FBRztRQUNELE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQXNCO1FBQy9CLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLElBQUksQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNuQixDQUFDO0lBRUssUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFzQjs7WUFDOUMsTUFBTSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsR0FBRyxNQUFNLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1lBQzlELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQTtRQUMxQixDQUFDO0tBQUE7Q0FDRiJ9