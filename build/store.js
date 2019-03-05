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
var redux_1 = require("redux");
var view_1 = require("./view");
var view_2 = require("./view");
exports.store = redux_1.createStore(redux_1.combineReducers(__assign({}, view_2.reducers)), redux_1.applyMiddleware.apply(void 0, view_1.middleware));
//# sourceMappingURL=store.js.map