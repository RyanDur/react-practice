"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var elements_1 = require("../elements");
var cats_1 = require("../elements/cats");
exports.Collapsible = function (_a) {
    var totals = _a.totals, rows = _a.rows, toggleOpen = _a.toggleOpen, columns = _a.columns;
    return React.createElement(elements_1.TotalsTable, { id: 'collapsible', totals: totals, columns: columns },
        React.createElement("tbody", null, rows.map(function (row) {
            return React.createElement(elements_1.Row, { key: row.name + "-collapsible", dataFormatter: cats_1.catFormatter, columns: columns, data: row.data },
                React.createElement("td", { className: 'row-header' }, row.name));
        })));
};
//# sourceMappingURL=Collapsible.js.map