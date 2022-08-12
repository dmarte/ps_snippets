export class PadSquadDOM {
    static findOrFail(selector) {
        const element = PadSquadDOM.find(selector);
        if (!element) {
            throw new DOMException(`No elements found for ${selector}.`);
        }
        return element;
    }
    static find(selector) {
        return document.querySelector(selector);
    }
    static when(selector) {
        return new Promise((resolve, reject) => {
            try {
                const element = PadSquadDOM.findOrFail(selector);
                resolve(element);
            }
            catch (error) {
                const observer = new MutationObserver(() => {
                    const element = PadSquadDOM.find(selector);
                    if (!element) {
                        return;
                    }
                    resolve(element);
                });
                observer.observe(document.body, { childList: true, subtree: true });
            }
        });
    }
}
//# sourceMappingURL=PadSquadDOM.js.map