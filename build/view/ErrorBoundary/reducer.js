"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
exports.default = (function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case actions_1.errorAction.ERROR:
            return { error: action.error, info: action.info };
        default:
            return state;
    }
});
//# sourceMappingURL=reducer.js.map