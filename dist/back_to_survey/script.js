import { PadSquadDOM } from './../PadSquadDOM';
(async (w) => {
    console?.info('-- BACK TO SURVEY SCRIPT --');
    console.log(PadSquadDOM.find('#simpli-vplacement-'))
    const element = await PadSquadDOM.when('#simpli-vplacement-');
    console.log('ELEMENT: ---> ', element);
})(window);
//# sourceMappingURL=script.js.map