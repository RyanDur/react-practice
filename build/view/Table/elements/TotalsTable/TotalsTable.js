"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Columns_1 = require("../Columns/Columns");
var Totals_1 = require("../Totals/Totals");
exports.TotalsTable = function (props) {
    return React.createElement("table", { id: props.id },
        React.createElement(Columns_1.Columns, __assign({}, props)),
        props.children,
        React.createElement(Totals_1.Totals, __assign({}, props)));
};
//# sourceMappingURL=TotalsTable.js.map