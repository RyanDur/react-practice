"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectHelpers_1 = require("../util/ObjectHelpers");
var createStateFrom = function (_a) {
    var newState = _a.newState;
    return newState.map(function (newRow) {
        var _a;
        return (_a = {},
            _a[newRow.name] = ObjectHelpers_1.remove(newRow, 'name'),
            _a);
    }).reduce(ObjectHelpers_1.merge, {});
};
exports.normalize = function (currentState, newState) {
    if (currentState === void 0) { currentState = {}; }
    if (newState === void 0) { newState = []; }
    return (newState.length === 0) ?
        currentState :
        createStateFrom({ newState: newState });
};
//# sourceMappingURL=helpers.js.map