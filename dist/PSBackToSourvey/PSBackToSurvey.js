"use strict";

var _PSToolKit = require("../PSToolKit.js");

var _PSDom = require("../PSDom.js");

(w => {
  const PSBackToSurvey = function (SimpliTag) {
    this.$config = {
      params: {},
      url: ''
    };

    this.take = function (originalKeyName, targetKeyName) {
      if (!targetKeyName) {
        targetKeyName = originalKeyName;
      }

      this.$config.params[originalKeyName] = targetKeyName;
      return this;
    };

    this.getParamsToUse = () => _PSToolKit.PSToolKit.queryString.only(Object.keys(this.$config.params));

    this.getParamsToBeSet = () => _PSToolKit.PSToolKit.placeholder.transform(this.$config.params, this.getParamsToUse());

    this.getUrl = () => _PSToolKit.PSToolKit.placeholder.write(this.$config.url, this.getParamsToBeSet());

    this.url = function (targetUrl) {
      this.$config.url = targetUrl;
      return this;
    };

    this.start = function (id = '#PSBackToSurvey') {
      console.log('PSBackToSurvey: START');

      _PSDom.PSDom.when(id).then(tag => {
        console.log('PSBackToSurvey: TAG READY');

        const button = _PSDom.PSDom.draw(`
                        <button 
                            type="button"
                            style="
                                display:none;
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
                            ${tag.dataset.text ?? 'Return to Survey'}
                        </button>
                    `);

        _PSToolKit.PSToolKit.placeholder.keys(tag.dataset.url).forEach(key => this.take(key));

        this.url(tag.dataset.url);
        button.addEventListener('click', () => {
          window.open(this.getUrl(), '_blank');
        });
        SimpliTag.listeners.add('onStandardEventTracked', function (event) {
          console.log(event);

          if (event.label === 'main creative viewed') {
            console.log('PSBackToSurvey: DISPLAYED');
            button.style.display = 'block';
          }
        });

        _PSToolKit.PSToolKit.insertAfter(SimpliTag.vplacement().wrapper, button);
      });

      return this;
    };
  };

  w.onload = function () {
    console.log('PSBackToSurvey: MAKE');
    const simpli = w.__simpli;

    if (typeof simpli === 'undefined') {
      throw new TypeError('PSBackToSurvey rely on Simpli Tag script. PLease include the required script first.');
    }

    new PSBackToSurvey(simpli).start();
  };
})(window);