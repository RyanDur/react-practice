"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collapsibleAction;
(function (collapsibleAction) {
    collapsibleAction["TOGGLE_OPEN"] = "TOGGLE_OPEN";
})(collapsibleAction = exports.collapsibleAction || (exports.collapsibleAction = {}));
exports.toggleOpen = function (dispatch) {
    return function (name) { return dispatch({ type: collapsibleAction.TOGGLE_OPEN, name: name }); };
};
//# sourceMappingURL=actions.js.map