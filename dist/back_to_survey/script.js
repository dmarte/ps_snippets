import { PadSquadDOM } from './../PadSquadDOM';
(async (w) => {
    if (!w.__simpli.isPreview) {
        return;
    }
    const element = await PadSquadDOM.when('#air_init_holder');
    console.log(element);
})(window);
//# sourceMappingURL=script.js.map