"use strict";
exports.__esModule = true;
exports.PadSquadDOM = void 0;
var PadSquadDOM = (function () {
    function PadSquadDOM() {
    }
    PadSquadDOM.findOrFail = function (selector) {
        var element = PadSquadDOM.find(selector);
        if (!element) {
            throw new DOMException("No elements found for ".concat(selector, "."));
        }
        return element;
    };
    PadSquadDOM.find = function (selector) {
        return document.querySelector(selector);
    };
    PadSquadDOM.when = function (selector) {
        return new Promise(function (resolve, reject) {
            try {
                var element = PadSquadDOM.findOrFail(selector);
                resolve(element);
            }
            catch (error) {
                var observer = new MutationObserver(function () {
                    var element = PadSquadDOM.find(selector);
                    if (!element) {
                        return;
                    }
                    resolve(element);
                });
                observer.observe(document.body, { childList: true, subtree: true });
            }
        });
    };
    return PadSquadDOM;
}());
exports.PadSquadDOM = PadSquadDOM;
//# sourceMappingURL=PadSquadDOM.js.map