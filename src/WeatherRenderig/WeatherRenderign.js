window.addEventListener('load', () => { 
   // __simpli.runtime().environment.outerWrapper.parentNode.parentNode.style.margin = '12px 0px';
    // __simpli.runtime().environment.outerWrapper.parentNode.parentNode.style.visibility = 'visible';
    if(__simpli.runtime().environment.outerWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb')){
        __simpli.runtime().environment.outerWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb').style.visibility = 'visible';
    }else{
        console.log('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb NOT');
    }
    
    if(__simpli.runtime().environment.outerWrapper.closest('.Card--card--HiWPW')){
        __simpli.runtime().environment.outerWrapper.closest('.Card--card--HiWPW').style.margin = "20px 0px"; 
    }else{
        console.log('.Card--card--HiWPW NOT');
    }
    
})