"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../../util/helpers");
var actions_1 = require("./actions");
var defaultState = {
    open: []
};
exports.reducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case actions_1.collapsibleAction.TOGGLE_OPEN:
            return { open: helpers_1.toggle(action.name, state.open) };
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map