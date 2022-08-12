import { PadSquadDOM } from './../PadSquadDOM';

(async (w: Window) => {
        console?.info('-- BACK TO SURVEY SCRIPT --')
        console.log(w.__simpli.analytics())

        // Responsible to build the button to return to survey
        const element: HTMLElement = await PadSquadDOM.when('#simpli-vplacement-')

        console.log(element)

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