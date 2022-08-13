export const PSToolKit = {
    queryString: {
      only(keys) {
        const params = new URLSearchParams(window.top.location.search ?? "");
        return keys.reduce((collection, current) => {
          collection[current] = params.get(current) ?? null;
          return collection;
        }, {});
      },
    },
    placeholder: {
        write (string, placeholders = {}) {
            return Object
                .keys(placeholders)
                .reduce((text, key) =>  text.replaceAll(`{${key}}`, placeholders[key] ?? ''), string)
         },
         transform (map, values) {
            return Object
                    .keys(map)
                    .reduce((output, key) => {
                        if(values[key]) {
                           output[map[key]] = values[key] 
                        }
                        return output
                    }, {})
        },
      /**
       * This method takes a string and build an array of
       * all keys withing curly braces Eg. "hello {name}" will return ['name']
       *
       * @param {string} characters The string to be evaluated
       */
      keys(characters) {
        return (
          String(characters)
            .match(/(\{[a-zA-Z_-]+\})/g)
            ?.map((key) => key.replace(/(\{|\})/gi, "")) ?? []
        );
      },
      /**
       * Get a plain {object} with only the given keys
       * @param {Array} keys Keys to be taken from placeholders object.
       * @param {Object} placeholders Plain object with all placeholders.
       * @returns {{[key: string] : any}}
       */
      only(keys, placeholders) {
        return keys.reduce((collection, current) => {
          if (placeholders[current]) {
            collection[current] = placeholders[current];
          }
          return collection;
        }, {});
      },
    },
    /**
     * This method let you draw a string of HTML in to HTMLElement
     * @param {string} html The HTML String
     * @returns {HTMLElement}
     */
    draw(html) {
      const template = document.createElement("template");
      template.innerHTML = String(html).replace(/(\r\n|\n|\r)(\s{2})+/gm, "");

      return template.content.firstChild;
    },
    /**
     * This method is responsible to draw a given HTMLElement after a given element.
     *
     * @param {HTMLElement} existingNode The target to draw after sibling target
     * @param {HTMLElement} nodeToAdd Target element to put as sibling element
     * @param {HTMLElement} The parent node with the inserted sibling element.
     */
    insertAfter(existingNode, nodeToAdd) {
      return existingNode.parentNode.insertBefore(
        nodeToAdd,
        existingNode.nextSibling
      );
    },
  }