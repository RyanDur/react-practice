"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Totals = function (_a) {
    var columns = _a.columns, totals = _a.totals;
    return React.createElement("tfoot", null,
        React.createElement("tr", null,
            React.createElement("td", null, "Totals:"),
            columns.map(function (column) { return React.createElement("td", { key: column + "-footer", "data-group": column, className: 'total' }, totals[column]); })));
};
//# sourceMappingURL=Totals.js.map