"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../helpers");
var actions_1 = require("./actions");
var defaultState = {
    selected: []
};
exports.reducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case actions_1.selectedAction.TOGGLE_SELECTION:
            return { selected: helpers_1.updateSelected(action.selection, state.selected) };
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map