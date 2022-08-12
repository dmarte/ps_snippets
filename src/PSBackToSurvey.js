((w) => {
  w.PSToolKit = {
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
      /**
       * This method takes a string and build an array of
       * all keys withing curly braces Eg. "hello {name}" will return ['name']
       *
       * @param {string} characters The string to be evaluated
       */
      keys(characters) {
        return (
          String(url)
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
  };

  /**
   * Initialize the PSBackToSurvey script.
   *
   * @param {SimpliTag} SimpliTag The SimpliTag main object.
   * @param {PSToolKit} ToolKit The Toolkit of PadSquad
   */
  const PSBackToSurvey = function (SimpliTag, ToolKit) {
    const config = {
      params: {},
      trigger: "open",
    };

    /**
     * This method takes a query string param from the window.top
     * and use its value as future placeholder.
     *
     * @param {string} originalKeyName The name of the quey string param in the current window.top
     * @param {string} targetKeyName The placeholder key name to hold the value.
     * @returns {PSBackToSurvey}
     */
    this.take = function (originalKeyName, targetKeyName) {
      if (!targetKeyName) {
        targetKeyName = originalKeyName;
      }

      this.config.params[originalKeyName] = targetKeyName;

      return this;
    };

    /**
     * This method register a handler to open a new (_blank) window with the given URL
     *
     * NOTE:
     * Please note the given URL could have placeholders in the form of {keyName}
     * that could be used by the plugin and replaced with its final values at the end.
     *
     * @param {string} targetUrl The URL where to target when user click on the handler button.
     * @returns {PSBackToSurvey}
     */
    this.open = function (url) {
        const keysToBeReplaced = ToolKit.placeholder.keys(url)
        const keysToBeTaken = Object.keys(config.params)
        const parameters = ToolKit.queryString.only(keysToBeTaken)
        
        console.log('keysToBeReplaced', keysToBeReplaced)
        console.log('keysToBeTaken', keysToBeTaken)
        console.log('parameters', parameters)
//         const holders = keysToBeTaken.reduce((collection, current)=> {
// if(keysToBeReplaced.includes(config.params[current])) {
// collection[config.params[current]] = parameters[]
// }
//             return collection
//         }, {})
//       console.log(holders);
      return this;
    };

    this.start = function () {
      
      console.info("-- BACK TO SURVEY SCRIPT --");

      const button = ToolKit.draw(`
                        <button 
                            type="button"
                            style="
                                width: 250px; 
                                height: 50px;
                                margin: 40px 0; 
                                margin-left: calc(50% - 125px); 
                                background-color: #5abf59; 
                                color:white;
                                border:none;
                                border-radius: 7px;
                                font-size: 22px;
                                font-weight: bold;
                                font-family: sans-serif
                                "
                        >
                            Return to Survey
                        </button>
                    `);
    // Attach listeners 
    // button.addEventListener('click', config.trigger)

    console.log(button)
    // Draw in the wrapper
      ToolKit.insertAfter(SimpliTag.vplacement().wrapper, button);
      return this;
    };
  };

  w.onload = async () => {
    

    const simpli = w.__simpli;

    if (typeof simpli === "undefined") {
      throw new TypeError(
        "PSBackToSurvey rely on Simpli Tag script. PLease include the required script first."
      );
    }

    // Initialize the back to survey plugin
    w.PSBackToSurvey = new PSBackToSurvey(simpli, w.PSToolKit);

    w.PSBackToSurvey
    .take("survey_id")
      .take("respondent_id")
      .open(
        "https://echeloninsights.com?respondent={respondent_id}&survey_id={survey_id}"
      )
      .start();
  };
})(window);

/*
console.log(' 3:36 ');

window.onload = function() { 

    // if used from Append Scripts
    if (!__simpli.isPreview) {

        // check if Airtory is not a promise and then returned as a promise
        if(!Boolean(airInitHolder && typeof airInitHolder.then === "function")){
            airInitHolder = Promise.resolve(airInitHolder);
        }

        //console.log('first', airInitHolder);

        airInitHolder.then(airtory => {


            let a = document.createElement("a");
            a.id = "survey_button_wrapper";

            let btn = document.createElement("button");
            btn.id = "survey_button"
            btn.innerHTML = "Return to Survey";
            //btn.style.display = "none";
            btn.style.width =  "250px";
            btn.style.height = "50px";
            btn.style.margin = "40px 0%";
            btn.style.marginLeft = "calc(50% - 125px)";
            btn.style.backgroundColor ="#5abf59";
            btn.style.color = "white";
            btn.style.border = "none";
            btn.style.borderRadius = "7px";
            btn.style.fontSize = "22px";
            btn.style.fontWeight = "bold";
            btn.style.fontFamily = "sans-serif";

            a.appendChild(btn);

            // display the button after the creative is in view, so it is not visible while VPO is active
            __simpli.listeners.add("onStandardEventTracked", function(event) {
                    if (event.label == 'main creative viewed') {
                        btn.style.display = "block";
                        
                    }
            });


            // wait for the parent container to load
            setTimeout( function(){

                let airtoryParentWrapper = airtory.contentWindow.creativeWrapper.offsetParent;

                
                airtoryParentWrapper.appendChild(a);

                // get URL params and add them to the exit url 
                function surveyButtonExit() {

                    // get query strings from url  
                    const params = new Proxy(new URLSearchParams(window.top.location.search), {
                        get: (searchParams, prop) => searchParams.get(prop),
                    });
                    // Get the value of "respondent_id" and "survey_id"
                    let _respondent_id = params.respondent_id || ""; 
                    let _survey_id = params.survey_id || 1;

                    console.log('params', _respondent_id, _survey_id);

                    // open url with query string
                    let url = "https://echeloninsights.com/?respondent=";
                    window.open(url + _respondent_id + '&survey_id=' + _survey_id, '_blank');

                }

                btn.addEventListener('click', surveyButtonExit);

                //console.log(airtoryParentWrapper);

            }, 1000);
            
        });

        

    } // end of isPreview

} // end of window onload
*/
