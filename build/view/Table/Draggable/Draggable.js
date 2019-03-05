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
var cats_1 = require("../elements/CatRow/cats");
var Draggable = (function (_super) {
    __extends(Draggable, _super);
    function Draggable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleDragHeaderEnter = function (event) {
            console.log(event.pageX);
            console.log(event.currentTarget.getClientRects());
        };
        return _this;
    }
    Draggable.prototype.render = function () {
        var _this = this;
        var _a = this.props, columns = _a.columns, rows = _a.rowNames, totals = _a.totals;
        return React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Header:"),
                    columns.map(function (column, index) {
                        return React.createElement("th", { key: column + "-header-draggable-" + index, "data-group": column, onDragEnter: _this.handleDragHeaderEnter, draggable: true }, column);
                    }))),
            React.createElement("tbody", null, rows.map(function (row, index) {
                return React.createElement("tr", { key: row.name + "-draggable-" + index },
                    React.createElement("td", { draggable: true }, row.name),
                    columns.map(function (column) {
                        return React.createElement("td", { "data-group": column, key: column }, cats_1.cats[row.rows[column]]);
                    }));
            })),
            React.createElement("tfoot", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "Footer:"),
                    columns.map(function (column, index) {
                        return React.createElement("td", { key: column + "-footer-draggable-" + index, "data-group": column }, cats_1.cats[Math.trunc(totals[column] / 10)]);
                    }))));
    };
    return Draggable;
}(react_1.Component));
exports.Draggable = Draggable;
//# sourceMappingURL=Draggable.js.map
