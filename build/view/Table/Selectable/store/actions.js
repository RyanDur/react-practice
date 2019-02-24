"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selectedAction;
(function (selectedAction) {
    selectedAction["TOGGLE_SELECTION"] = "TOGGLE_SELECTION";
})(selectedAction = exports.selectedAction || (exports.selectedAction = {}));
exports.toggleSelect = function (dispatch) { return function (selection) { return dispatch({
    type: selectedAction.TOGGLE_SELECTION,
    selection: selection
}); }; };
//# sourceMappingURL=actions.js.map