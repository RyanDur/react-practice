"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ErrorBoundary = (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, info) {
        this.props.setError(error, info);
    };
    ErrorBoundary.prototype.render = function () {
        if (this.props.error) {
            return React.createElement(React.Fragment, null,
                React.createElement("h1", null, this.props.error.message),
                this.props.info.componentStack.split('in').map(function (stack) { return React.createElement("div", { key: stack }, "in " + stack); }));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(react_1.Component));
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map