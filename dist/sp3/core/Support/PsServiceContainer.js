export class PsServiceContainer {
    constructor() {
        this.$provisioned = {};
    }
    static instance() {
        if (!this.$instance) {
            this.$instance = new PsServiceContainer();
        }
        return this.$instance;
    }
    get(key) {
        if (!this.isProvisioned(key)) {
            return null;
        }
        return this.$provisioned[key];
    }
    isProvisioned(key) {
        return typeof this.$provisioned[key] !== 'undefined';
    }
    provide(key, handler) {
        if (!this.isProvisioned(key)) {
            console.log(key, handler());
            this.$provisioned[key] = handler();
        }
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHNTZXJ2aWNlQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29yZS9TdXBwb3J0L1BzU2VydmljZUNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBRVUsaUJBQVksR0FBMkIsRUFBRSxDQUFBO0lBOEJuRCxDQUFDO0lBNUJRLE1BQU0sQ0FBQyxRQUFRO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3ZCLENBQUM7SUFHTSxHQUFHLENBQVUsR0FBVztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQTtTQUNaO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBTSxDQUFDO0lBQ3JDLENBQUM7SUFHTSxhQUFhLENBQUMsR0FBVztRQUM5QixPQUFPLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxXQUFXLENBQUE7SUFDdEQsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsT0FBaUI7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFBO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0NBQ0YifQ==