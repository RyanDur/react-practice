"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var elements_1 = require("../elements");
exports.Base = function (_a) {
    var columns = _a.columns, rows = _a.rows, totals = _a.totals;
    return React.createElement(elements_1.TotalsTable, { id: 'base', columns: columns, totals: totals },
        React.createElement("tbody", null, rows.map(function (row) {
            return React.createElement(elements_1.CatRow, { key: row.name + "-base", columns: columns, row: row },
                React.createElement("td", null, row.name));
        })));
};
//# sourceMappingURL=Base.js.map