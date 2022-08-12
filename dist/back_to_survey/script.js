import { PadSquadDOM } from './../PadSquadDOM.js';
(async (w) => {
    console?.info('-- BACK TO SURVEY SCRIPT --');
    if (!w.__simpli.isPreview) {
        return;
    }
    const element = await PadSquadDOM.when('#air_init_holder');
    console.log(element);
})(window);
//# sourceMappingURL=script.js.map