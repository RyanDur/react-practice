"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var actions_1 = require("./actions");
var ErrorBoundary_1 = require("./ErrorBoundary");
exports.default = react_redux_1.connect(function (state) { return ({
    error: state.errorBoundary.error,
    info: state.errorBoundary.info
}); }, function (dispatch) { return ({
    setError: function (error, info) { return dispatch({ type: actions_1.errorAction.ERROR, error: error, info: info }); }
}); })(ErrorBoundary_1.ErrorBoundary);
//# sourceMappingURL=connector.js.map