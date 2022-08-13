"use strict";var _PSToolKit=require("./PSToolKit.js"),_PSDom=require("./PSDom.js");(a=>{const b=function(a,b){this.$config={params:{},url:"",trigger:()=>null},this.take=function(a,b){return b||(b=a),this.$config.params[a]=b,this},this.getParamsToUse=()=>b.queryString.only(Object.keys(this.$config.params)),this.getParamsToBeSet=()=>b.placeholder.transform(this.$config.params,this.getParamsToUse()),this.getUrl=()=>b.placeholder.write(this.$config.url,this.getParamsToBeSet()),this.url=function(a){return this.$config.url=a,this},this.start=function(c="#PSBackToSurvey"){_PSDom.PSDom.when(c).then(()=>{});const d=b.draw(`
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
                            Return to Survey
                        </button>
                    `),e=document.querySelector(c);return b.placeholder.keys(e.dataset.url).forEach(a=>this.take(a)),this.url(e.dataset.url),d.addEventListener("click",()=>{window.open(this.getUrl(),"_blank")}),a.listeners.add("onStandardEventTracked",function(a){"main creative viewed"===a.label&&(d.style.display="block")}),b.insertAfter(a.vplacement().wrapper,d),this}};b.prototype.make=function(){const c=a.__simpli;if("undefined"==typeof c)throw new TypeError("PSBackToSurvey rely on Simpli Tag script. PLease include the required script first.");new b(c,_PSToolKit.PSToolKit).start()},a.onload=b.make})(window);