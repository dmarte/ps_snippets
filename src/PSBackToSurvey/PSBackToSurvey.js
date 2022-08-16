/**
 * There are users that receive a preview link with the creative so they can see the placement
 * then do the test and must return back to the survey to continue with the marketing questions.
 *
 * The purpose of this plugin script is to render a button below the creative to let those users
 * that comes from a survey return back and continue with they survey.
 */
import { PSToolKit } from '../PSToolKit.js';
import { PSDom } from '../PSDom.js';

((w) => {
  /**
   * Initialize the PSBackToSurvey script.
   *
   * @param {SimpliTag} SimpliTag The SimpliTag main object.
   */
  const PSBackToSurvey = function (SimpliTag) {
    this.$config = {
      params: {},
      url: '',
    };

    /**
     * This method takes a query string param from the window.top
     * and use its value as future placeholder.
     *
     * @param {string} originalKeyName The name of the quey string param in the current window.top
     * @param {string} targetKeyName The placeholder key name to hold the value.
     * @returns {PSBackToSurvey}
     */
    this.take = function (originalKeyName, targetKeyName = '') {
      if (!targetKeyName) {
        targetKeyName = originalKeyName;
      }

      this.$config.params[originalKeyName] = targetKeyName;

      return this;
    };

    /**
     * Get the parameters taken from Query String
     * that will be used in the final URL.
     *
     * @returns {Object<string, string>}
     */
    this.getParamsToUse = () => PSToolKit.queryString.only(Object.keys(this.$config.params));

    /**
     * Get the parameters to be set in the URL.
     *
     * @returns {Object<string, string>}
     */
    this.getParamsToBeSet = () => PSToolKit.placeholder.transform(this.$config.params, this.getParamsToUse());

    /**
     * Return the Final URL that will be opened.
     * @returns {string}
     */
    this.getUrl = () => PSToolKit.placeholder.write(this.$config.url, this.getParamsToBeSet());

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
    this.url = function (targetUrl) {
      this.$config.url = targetUrl;
      return this;
    };

    /**
     * Initialize the plugin in the browser.
     *
     * @param {string} id The ID of the script with the meta data.
     * @returns {PSBackToSurvey}
     */
    this.start = function (id = '#PSBackToSurvey') {

      console.log('PSBackToSurvey: START');

      PSDom
        .when(id)
        .then((tag) => {
          console.log('PSBackToSurvey: TAG READY');
          // [STEP 1] Draw the button to be added
          const button = PSDom.draw(`
                        <button 
                            type="button"
                            style="
                                display:none;
                                width: 250px; 
                                height: 50px;
                                margin: 40px 0 40px calc(50% - 125px); 
                                background-color: #5abf59; 
                                color: white;
                                border: none;
                                border-radius: 7px;
                                font-size: 22px;
                                font-weight: bold;
                                font-family: sans-serif
                                cursor: pointer;
                                "
                        >
                            ${tag.dataset.text ?? 'Return to Survey'}
                        </button>
                    `, {
            hide() {

              console.log('PSBackToSurvey: HIDE');

              button.style.display = 'none';

            },
            show() {
PSDom.when('#air_init_holder').then((tag) =>{
  console.dir(tag)
})
              return
              console.log('PSBackToSurvey: DISPLAYED');

              const placement = SimpliTag.vplacement().wrapper;
              let addBreak;

              for(var i =0; i < placement.childNodes.length; i++) {
                if(!placement.childNodes[i].id !== 'air_init_holder') {
                  break;
                }
                addBreak = placement.childNodes[i];
              }

              console.log(addBreak)
console.log('HEIGHT AD BREAK:',addBreak.clientHeight)
              let unit = +(addBreak?.clientHeight + button?.offsetHeight + 15);
console.log(unit, addBreak)
    // if(unit < 340) { unit = 340 }

              addBreak.style.height = `${unit}px`;

              button.style.display = 'block';
            },
          });

          // [STEP 2] Auto register placeholders
          PSToolKit
            .placeholder
            .keys(tag.dataset.url)
            .forEach((key) => this.take(key));

          // [STEP 3] Auto register the target URL
          this.url(tag.dataset.url);

          // [STEP 4] Bind required events
          button.addEventListener('click', () => {
            window.open(this.getUrl(), '_blank');
          });
          // When at first load, if the creative is not visible, add a watcher event
          // to know when the creative is visible and then show the button.
          if (!(SimpliTag?.runtime()?.creative?.mainCreativeViewed ?? false)) {
            SimpliTag.listeners.add(
              'onStandardEventTracked',
              function (event) {
                if (event.label === 'main creative viewed') {
                  button.show();
                }
              },
            );
          }
          // If instead the creative is already visible, show the button ASAP.
          else {
            button.show();
          }

          // [STEP 5] - Draw in the wrapper
          PSToolKit.insertAfter(SimpliTag.vplacement().wrapper.firstChild, button);
        });

      return this;
    };
  };

  w.onload = function () {
    console.log('PSBackToSurvey: MAKE');
    const simpli = w.__simpli;

    if (typeof simpli === 'undefined') {
      throw new TypeError(
        'PSBackToSurvey rely on Simpli Tag script. PLease include the required script first.',
      );
    }

    w.PSBackToSurvey = (new PSBackToSurvey(simpli)).start();
  };

})(window);
