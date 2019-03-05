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
var action_1 = require("./action");
var helpers_1 = require("./helpers");
var defaultState = {
    table: {},
    rows: [],
    columns: []
};
exports.reducer = function (state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case action_1.dataAction.DATA:
            return __assign({}, state, { table: helpers_1.reconcile(state.table, action), rows: action.rowNames, columns: action.columnNames });
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map