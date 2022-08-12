"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PadSquadDOM_1 = require("./../PadSquadDOM");
(async (w) => {
    if (!w.__simpli.isPreview) {
        return;
    }
    const element = await PadSquadDOM_1.PadSquadDOM.when('#air_init_holder');
    console.log(element);
})(window);
//# sourceMappingURL=script.js.map