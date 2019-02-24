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
require("./Dropdown.css");
var Dropdown = (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.getOptionsList = function (event) {
            return event.currentTarget
                .closest('.dropdown')
                .querySelector('.options')
                .classList;
        };
        _this.handleSelection = function (option) {
            return _this.setState({ selected: option });
        };
        _this.state = {
            selected: undefined
        };
        return _this;
    }
    Dropdown.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, defaultSelected = _a.defaultSelected, options = _a.options, selectionFormat = _a.selectionFormat;
        return React.createElement("section", { className: 'dropdown', onMouseLeave: function (event) { return _this.getOptionsList(event).add('hide'); } },
            React.createElement("h1", { className: 'selected', onClick: function (event) { return _this.getOptionsList(event).toggle('hide'); } }, selectionFormat(this.state.selected || defaultSelected || options[0])),
            React.createElement("ul", { className: 'options hide' }, options.map(function (option, index) {
                return React.createElement("li", { key: index, onClick: function () { return _this.handleSelection(option); }, className: 'option' }, children[index]);
            })));
    };
    return Dropdown;
}(react_1.Component));
exports.Dropdown = Dropdown;
//# sourceMappingURL=Dropdown.js.map