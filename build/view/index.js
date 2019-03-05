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
var connector_1 = require("./connector");
var ErrorBoundary_1 = require("./ErrorBoundary");
var Table_1 = require("./Table");
exports.middleware = Table_1.tableMiddleware.slice();
exports.reducers = __assign({}, Table_1.tableReducers, { errorBoundary: ErrorBoundary_1.errorBoundary });
exports.default = connector_1.default;
//# sourceMappingURL=index.js.map