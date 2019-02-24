"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = require("./action");
exports.socketMiddleware = function (clientConnector) {
    return function (store) { return function (next) { return function (action) {
        if (action.type === action_1.socketAction.CONNECT) {
            clientConnector(action_1.connectToData(store.dispatch));
        }
        next(action);
    }; }; };
};
//# sourceMappingURL=middleware.js.map