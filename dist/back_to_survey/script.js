var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./../PadSquadDOM"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const PadSquadDOM_1 = require("./../PadSquadDOM");
    ((w) => __awaiter(void 0, void 0, void 0, function* () {
        console === null || console === void 0 ? void 0 : console.info('-- BACK TO SURVEY SCRIPT --');
        const element = yield PadSquadDOM_1.PadSquadDOM.when('#simpli-vplacement-');
        console.log('ELEMENT: ---> ', element);
    }))(window);
});
//# sourceMappingURL=script.js.map