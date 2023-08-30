var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class PsCache {
    remember(key, data, expire) {
        window.localStorage.setItem(key, JSON.stringify({
            payload: data,
            expire: expire !== null && expire !== void 0 ? expire : new Date().toISOString(),
        }));
    }
    exists(key) {
        return !!window.localStorage.getItem(key);
    }
    get(key, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.exists(key)) {
                const date = new Date();
                date.setDate(date.getDate() + 1);
                this.remember(key, yield callback(), date.toISOString());
            }
            const cached = window.localStorage.getItem(key);
            if (!cached) {
                return callback ? yield callback() : null;
            }
            const data = JSON.parse(cached);
            return data.payload;
        });
    }
    forget(key) {
        window.localStorage.removeItem(key);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHNDYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvcmUvU3VwcG9ydC9Qc0NhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE1BQU0sQ0FBQyxPQUFPLE9BQU8sT0FBTztJQU9uQixRQUFRLENBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxNQUFjO1FBQ3BELE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUN2QixHQUFHLEVBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsTUFBTSxFQUFFLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO1NBQzNDLENBQUMsQ0FDTCxDQUFDO0lBQ0osQ0FBQztJQU1NLE1BQU0sQ0FBQyxHQUFXO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFRWSxHQUFHLENBQVUsR0FBVyxFQUFFLFFBQW1COztZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtnQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQ1QsR0FBRyxFQUNILE1BQU0sUUFBUSxFQUFFLEVBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDckIsQ0FBQzthQUNIO1lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxRQUFRLEVBQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ2hEO1lBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVoQyxPQUFPLElBQUksQ0FBQyxPQUFZLENBQUM7UUFDM0IsQ0FBQztLQUFBO0lBTU0sTUFBTSxDQUFDLEdBQVc7UUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGIn0=