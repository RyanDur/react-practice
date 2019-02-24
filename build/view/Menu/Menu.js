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
var types_1 = require("../Table/elements/types");
require("./Menu.css");
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            addColumns: [],
            removeColumns: []
        };
        _this.reset = function () { return _this.setState({ addColumns: [] }); };
        _this.add = function (direction) {
            return _this.props.add(direction, _this.props.column, _this.state.addColumns);
        };
        _this.handleAddRight = function () {
            _this.add(types_1.direction.Right);
            _this.reset();
        };
        _this.handleAddLeft = function () {
            _this.add(types_1.direction.Left);
            _this.reset();
        };
        _this.handleRemove = function () {
            _this.props.remove(_this.state.removeColumns);
            _this.setState({ removeColumns: [] });
        };
        _this.handleAddChange = function (event) {
            var value = event.target.nextElementSibling.textContent;
            if (event.target.checked) {
                _this.setState({ addColumns: _this.state.addColumns.concat(value) });
            }
            else {
                _this.setState({
                    addColumns: _this.state.addColumns
                        .filter(function (name) { return name !== value; })
                });
            }
        };
        _this.handleRemoveChange = function (event) {
            var value = event.target.nextElementSibling.textContent;
            if (event.target.checked) {
                _this.setState({ removeColumns: _this.state.removeColumns.concat(value) });
            }
            else {
                _this.setState({
                    removeColumns: _this.state.removeColumns
                        .filter(function (name) { return name !== value; })
                });
            }
        };
        return _this;
    }
    Menu.prototype.render = function () {
        var _this = this;
        var _a = this.props.columns, inactive = _a.inactive, active = _a.active;
        return React.createElement("div", { className: 'menu' },
            React.createElement("ul", { className: 'add-columns' }, inactive.map(function (name, index) {
                return React.createElement("li", { key: index },
                    React.createElement("input", { type: 'checkbox', id: _this.props.column + "-" + name, "data-column": name, onChange: _this.handleAddChange, defaultChecked: false }),
                    React.createElement("label", { htmlFor: _this.props.column + "-" + name }, name));
            })),
            React.createElement("button", { className: 'add-left', disabled: this.state.addColumns.length === 0, onClick: this.handleAddLeft }, "Add Left"),
            React.createElement("button", { className: 'add-right', disabled: this.state.addColumns.length === 0, onClick: this.handleAddRight }, "Add Right"),
            React.createElement("ul", { className: 'remove-columns' }, active.filter(function (column) { return _this.props.column !== column; }).map(function (name, index) {
                return React.createElement("li", { key: index },
                    React.createElement("input", { type: 'checkbox', id: _this.props.column + "-" + name, "data-column": name, onChange: _this.handleRemoveChange, defaultChecked: false }),
                    React.createElement("label", { htmlFor: _this.props.column + "-" + name }, name));
            })),
            React.createElement("button", { className: 'remove', disabled: this.state.removeColumns.length === 0, onClick: this.handleRemove }, "Remove"));
    };
    return Menu;
}(react_1.Component));
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map