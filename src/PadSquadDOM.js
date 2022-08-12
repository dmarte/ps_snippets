export class PadSquadDOM {
    /**
     * Find a given DOMElement base on CSS selector or throw an exception.
     *
     * @param {string} selector HTML Selector
     * @returns HTMLElement
     */
    static findOrFail(selector) {
      const element = PadSquadDOM.find(selector);
      if (!element) {
        throw new DOMException(`No elements found for ${selector}.`);
      }
      return element;
    }
    /**
     * Find a given HTMLElement in the DOM if exists.
     *
     * @param {string} selector CSS selector
     * @returns HTMLElement
     */
    static find(selector) {
      return document.querySelector(selector);
    }
    /**
     * Wait until a given selector is present in the DOM.
     *
     * @param {string} selector CSS selector.
     * @returns Promise<HTMLElement>
     */
    static when(selector) {
      return new Promise((resolve, reject) => {
        try {
          const element = PadSquadDOM.findOrFail(selector);
          resolve(element);
        } catch {
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