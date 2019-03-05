"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var App_1 = require("./App");
var action_1 = require("./Table/data/action");
exports.default = react_redux_1.connect(function () { return ({}); }, function (dispatch) { return ({
    connect: function () { return dispatch({ type: action_1.socketAction.CONNECT }); }
}); })(App_1.default);
//# sourceMappingURL=connector.js.map