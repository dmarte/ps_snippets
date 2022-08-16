window.addEventListener('load', () => { 

    const simpliTagEnvouterWrapper = __simpli.runtime().environment.outerWrapper;

    if(simpliTagEnvouterWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb')){

        // simpliTagEnvouterWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb').style.visibility = 'visible';
        // simpliTagEnvouterWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb').style.margin = '12px 0px';
        // simpliTagEnvouterWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb').style.zIndex = '100 !important';
    
    }
    
    if(simpliTagEnvouterWrapper.closest('.Card--card--HiWPW')){
        simpliTagEnvouterWrapper.closest('.Card--card--HiWPW').style.overflow = 'visible';
        // simpliTagEnvouterWrapper.closest('.Card--card--HiWPW').style.margin = '12px 0px';
    }  

    var getParents = function (elem) {

        // Set up a parent array
        var parents = [];
    
        // Push each parent element to the array
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            parents.push(elem);
        }

        // Return our parent array
        return parents;
    
    };

    var parents = getParents(simpliTagEnvouterWrapper);
    
    console.log("papa",parents);

    parents.forEach(element => {
        console.log("el",element); 
        console.log("computed",window.getComputedStyle(element).overflow);
        if(window.getComputedStyle(element).overflow === "hidden"){
            element.style.visibility = 'visible';
        }
    });

})