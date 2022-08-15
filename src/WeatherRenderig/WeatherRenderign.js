window.addEventListener('load', () => { 
    console.log('simpli...');
    console.log(__simpli.runtime().environment);
    __simpli.runtime().environment.outerWrapper.parentNode.parentNode.style.margin = '12px 0px';
    __simpli.runtime().environment.outerWrapper.parentNode.parentNode.style.visibility = 'visible';
    __simpli.runtime().environment.outerWrapper.closest('.Card--card--HiWPW').style.margin = "20px 0px"; 
})