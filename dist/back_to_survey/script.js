import { PadSquadDOM } from './../PadSquadDOM';
(async (w) => {
    console?.info('-- BACK TO SURVEY SCRIPT --');
    console.log(w.__simpli.analytics());
    const element = await PadSquadDOM.when('#simpli-vplacement-');
    console.log(element);
})(window);
//# sourceMappingURL=script.js.map