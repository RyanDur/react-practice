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
require("./DropDown.css");
var DropDown = (function (_super) {
    __extends(DropDown, _super);
    function DropDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            height: 0
        };
        _this.handleClick = function (event) {
            event.currentTarget.classList.toggle('change');
            event.currentTarget.closest('.column-header')
                .classList.toggle('top');
            var element = event.currentTarget.closest('.drop-down')
                .querySelector('.container');
            if (_this.state.height > 0) {
                _this.setState({ height: 0 });
            }
            else {
                _this.setState({ height: element.children.item(0).clientHeight });
            }
        };
        _this.handleBlur = function (event) {
            event.currentTarget
                .closest('.column-header')
                .classList
                .remove('top');
            event.currentTarget.closest('.drop-down')
                .querySelector('.hamburger')
                .classList.remove('change');
            _this.setState({ height: 0 });
        };
        return _this;
    }
    DropDown.prototype.render = function () {
        return React.createElement("div", { className: 'drop-down' },
            React.createElement("div", { className: 'hamburger', onClick: this.handleClick },
                React.createElement("div", { className: 'bar1' }),
                React.createElement("div", { className: 'bar2' }),
                React.createElement("div", { className: 'bar3' })),
            React.createElement("div", { className: 'container', style: { height: this.state.height }, onMouseLeave: this.handleBlur }, this.props.children));
    };
    return DropDown;
}(react_1.Component));
exports.DropDown = DropDown;
//# sourceMappingURL=DropDown.js.map