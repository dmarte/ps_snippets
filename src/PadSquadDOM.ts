export class PadSquadDOM {
    /**
     * Find a given DOMElement base on CSS selector or throw an exception.
     *
     * @param selector HTML Selector
     * @returns HTMLElement
     */
    public static findOrFail(selector: string): HTMLElement {
      const element = PadSquadDOM.find(selector);
      if (!element) {
        throw new DOMException(`No elements found for ${selector}.`);
      }
      return element;
    }
    /**
     * Find a given HTMLElement in the DOM if exists.
     *
     * @param selector CSS selector
     * @returns HTMLElement
     */
    public static find(selector: string): HTMLElement {
      return document.querySelector(selector);
    }
    /**
     * Wait until a given selector is present in the DOM.
     *
     * @param selector CSS selector.
     * @returns Promise<HTMLElement>
     */
    public static when(selector): Promise<HTMLElement> {
      return new Promise((resolve, reject) => {
        try {
          const element = PadSquadDOM.findOrFail(selector);
          resolve(element);
        } catch (error: any) {
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