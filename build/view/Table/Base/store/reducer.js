"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../../../core/types");
var defaultState = {
    columns: [],
    rows: []
};
exports.reducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case types_1.dataAction.DATA:
            return __assign({}, state, { columns: action.response.columns, rows: action.response.rows });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map