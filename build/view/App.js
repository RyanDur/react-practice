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
var Carousel_1 = require("./Carousel");
var ErrorBoundary_1 = require("./ErrorBoundary");
var Base_1 = require("./Table/Base");
var Expandible_1 = require("./Table/Expandible");
var Selectable_1 = require("./Table/Selectable");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentDidMount = function () {
        this.props.connect();
    };
    App.prototype.render = function () {
        return (React.createElement(ErrorBoundary_1.ErrorBoundary, null,
            React.createElement(Carousel_1.Carousel, null,
                React.createElement(Base_1.Base, null),
                React.createElement(Selectable_1.Selectable, { defaultSelected: true }),
                React.createElement(Expandible_1.Expandable, null))));
    };
    return App;
}(react_1.Component));
exports.App = App;
exports.default = App;
//# sourceMappingURL=App.js.map