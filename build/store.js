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
var core_1 = require("./core");
var clientConnector_1 = require("./core/clientConnector");
var middleware_1 = require("./core/middleware");
exports.store = redux_1.createStore(redux_1.combineReducers(__assign({}, view_1.reducers, { core: core_1.core })), redux_1.applyMiddleware(middleware_1.socketMiddleware(clientConnector_1.clientConnector(new WebSocket('ws://localhost:7771')))));
//# sourceMappingURL=store.js.map