"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var element_1 = require("../element");
var cats_1 = require("../element/cats");
exports.Base = function (_a) {
    var columns = _a.columns, rows = _a.rows, totals = _a.totals;
    return React.createElement(element_1.TotalsTable, { id: 'base', columns: columns, totals: totals },
        React.createElement("tbody", null, rows.map(function (row) {
            return React.createElement(element_1.Row, { key: row.name + "-base", dataFormatter: cats_1.catFormatter, columns: columns, data: row.data },
                React.createElement("td", { className: 'row-header' }, row.name));
        })));
};
//# sourceMappingURL=Base.js.map