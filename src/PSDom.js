export const PSDom = {
    /**
     * Find a given DOMElement base on CSS selector or throw an exception.
     *
     * @param {string} selector HTML Selector
     * @returns HTMLElement
     */
     findOrFail(selector) {
      const element = this.find(selector);
      if (!element) {
        throw new DOMException(`No elements found for ${selector}.`);
      }
      return element;
    },
    /**
     * Find a given HTMLElement in the DOM if exists.
     *
     * @param {string} selector CSS selector
     * @returns HTMLElement
     */
    find(selector) {
      return document.querySelector(selector);
    },
    /**
     * Wait until a given selector is present in the DOM.
     *
     * @param {string} selector CSS selector.
     * @returns Promise<HTMLElement>
     */
    when(selector) {
      return new Promise((resolve, reject) => {
        try {
          const element = PSDom.findOrFail(selector);
          resolve(element);
        } catch(ex) {
          console.dir(ex)
          const observer = new MutationObserver(() => {
            const element = PSDom.find(selector);
  
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