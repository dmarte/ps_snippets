import { PadSquadDOM } from './../PadSquadDOM';
(async (w) => {
    console?.info('-- BACK TO SURVEY SCRIPT --');
    console.log(w.__simpli)
    if (!w.__simpli.isPreview) {
        return;
    }
    const element = await PadSquadDOM.when('#air_init_holder');
    console.log(element);
})(window);
//# sourceMappingURL=script.js.map