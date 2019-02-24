"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remove = function (thingsToRemove, things) {
    return thingsToRemove.reduce(function (acc, thing) {
        var index = acc.indexOf(thing);
        return acc.slice(0, index).concat(acc.slice(index + 1));
    }, things);
};
exports.toggleSelected = function (selection, selected) {
    if (selected === void 0) { selected = []; }
    if (!selection)
        return [];
    return selected.includes(selection) ?
        remove([selection], selected) : selected.concat([selection]);
};
//# sourceMappingURL=helpers.js.map