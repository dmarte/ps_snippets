var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class PsApi {
    constructor(config) {
        this.$config = config;
    }
    get(path, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.url(path, params));
            if (!response.ok) {
                return {
                    failed: true,
                    message: response.statusText,
                    data: {}
                };
            }
            return {
                failed: true,
                message: response.statusText,
                data: (yield response.json()) || (yield response.text()),
            };
        });
    }
    url(path, params) {
        const query = new URLSearchParams(params);
        if (this.$config.authorization === 'key') {
            query.set(this.$config.apiKeyName, this.$config.apiToken);
        }
        const queryString = query.toString();
        return new URL(`${path}${queryString ? '?' + queryString : ''}`, this.$config.baseUrl);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHNBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb3JlL1N1cHBvcnQvUHNBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUEsTUFBTSxDQUFDLE9BQU8sT0FBTyxLQUFLO0lBR3hCLFlBQVksTUFBNkI7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUE7SUFDdkIsQ0FBQztJQUVZLEdBQUcsQ0FBSSxJQUFZLEVBQUUsTUFBK0I7O1lBQy9ELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hCLE9BQWdDO29CQUM5QixNQUFNLEVBQUUsSUFBSTtvQkFDWixPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVU7b0JBQzVCLElBQUksRUFBRSxFQUFFO2lCQUNULENBQUM7YUFDSDtZQUVELE9BQW1DO2dCQUNqQyxNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsUUFBUSxDQUFDLFVBQVU7Z0JBQzVCLElBQUksRUFBRSxDQUFDLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6RCxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBRU8sR0FBRyxDQUFDLElBQVksRUFBRSxNQUErQjtRQUN2RCxNQUFNLEtBQUssR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN6QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDMUQ7UUFFRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekYsQ0FBQztDQUNGIn0=