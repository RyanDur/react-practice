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
var __1 = require("..");
var __2 = require("..");
exports.TotalsTable = function (props) {
    return React.createElement("table", { id: props.id },
        React.createElement(__1.Columns, __assign({}, props)),
        props.children,
        React.createElement(__2.Totals, __assign({}, props)));
};
//# sourceMappingURL=TotalsTable.js.map