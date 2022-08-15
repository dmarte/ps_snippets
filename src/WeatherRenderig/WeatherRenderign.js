window.addEventListener('load', () => { 

    console.log('hi fron script ap');

    if(__simpli.runtime().environment.outerWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb')){
        __simpli.runtime().environment.outerWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb').style.visibility = 'visible';
        __simpli.runtime().environment.outerWrapper.closest('.BaseAd--adWrapper--2qtTX.BaseAd--card--1NlKb').style.margin = '12px 0px';
    }
    
    if(__simpli.runtime().environment.outerWrapper.closest('.Card--card--HiWPW')){
        __simpli.runtime().environment.outerWrapper.closest('.Card--card--HiWPW').style.visibility = 'visible';
        __simpli.runtime().environment.outerWrapper.closest('.Card--card--HiWPW').style.margin = '12px 0px';
    }
    
})