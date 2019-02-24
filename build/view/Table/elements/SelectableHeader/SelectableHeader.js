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
var react_1 = require("react");
var React = require("react");
var SelectableHeader = (function (_super) {
    __extends(SelectableHeader, _super);
    function SelectableHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getOnChange = function () {
            _this.props.handleSelect(_this.props.value.name);
        };
        return _this;
    }
    SelectableHeader.prototype.componentDidMount = function () {
        if (this.props.defaultSelected) {
            this.props.handleSelect(this.props.value.name);
        }
    };
    SelectableHeader.prototype.render = function () {
        var value = this.props.value;
        return (React.createElement("td", null,
            React.createElement("input", { type: 'checkbox', id: value.name + "-checkbox", checked: value.selected, value: value.name, onChange: this.getOnChange }),
            React.createElement("label", { htmlFor: value.name + "-checkbox", className: 'row-header' }, value.name)));
    };
    return SelectableHeader;
}(react_1.Component));
exports.SelectableHeader = SelectableHeader;
//# sourceMappingURL=SelectableHeader.js.map