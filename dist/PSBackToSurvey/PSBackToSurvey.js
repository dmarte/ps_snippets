"use strict";var _PSToolKit=require("../PSToolKit.js"),_PSDom=require("../PSDom.js");(a=>{const b=function(a){this.$config={params:{},url:""},this.take=function(a,b){return b||(b=a),this.$config.params[a]=b,this},this.getParamsToUse=()=>_PSToolKit.PSToolKit.queryString.only(Object.keys(this.$config.params)),this.getParamsToBeSet=()=>_PSToolKit.PSToolKit.placeholder.transform(this.$config.params,this.getParamsToUse()),this.getUrl=()=>_PSToolKit.PSToolKit.placeholder.write(this.$config.url,this.getParamsToBeSet()),this.url=function(a){return this.$config.url=a,this},this.start=function(b="#PSBackToSurvey"){return _PSDom.PSDom.when(b).then(b=>{const c=_PSDom.PSDom.draw(`
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
                            ${b.dataset.text??"Return to Survey"}
                        </button>
                    `);_PSToolKit.PSToolKit.placeholder.keys(b.dataset.url).forEach(a=>this.take(a)),this.url(b.dataset.url),c.addEventListener("click",()=>{window.open(this.getUrl(),"_blank")}),a.listeners.add("onStandardEventTracked",function(a){"main creative viewed"===a.label&&(c.style.display="block")}),_PSToolKit.PSToolKit.insertAfter(a.vplacement().wrapper,c)}),this}};a.onload=function(){const c=a.__simpli;if("undefined"==typeof c)throw new TypeError("PSBackToSurvey rely on Simpli Tag script. PLease include the required script first.");new b(c).start()}})(window);