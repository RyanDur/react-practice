"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remove = function (things) {
    var thingsToRemove = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        thingsToRemove[_i - 1] = arguments[_i];
    }
    return thingsToRemove.reduce(function (acc, thing) {
        var index = acc.indexOf(thing);
        return acc.slice(0, index).concat(acc.slice(index + 1));
    }, things);
};
exports.toggle = function (selection, selected) {
    if (selected === void 0) { selected = []; }
    if (!selection)
        return selected;
    return selected.includes(selection) ?
        remove(selected, selection) : selected.concat([selection]);
};
//# sourceMappingURL=helpers.js.map