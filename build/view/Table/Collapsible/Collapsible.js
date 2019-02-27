"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var element_1 = require("../element");
var cats_1 = require("../element/cats");
exports.Collapsible = function (_a) {
    var totals = _a.totals, rows = _a.rows, toggleOpen = _a.toggleOpen, columns = _a.columns;
    return React.createElement(element_1.TotalsTable, { id: 'collapsible', totals: totals, columns: columns },
        React.createElement("tbody", null, rows.map(function (row) {
            if (row.subRows) {
                return React.createElement(element_1.CollapsibleRow, { key: row.name + "-collapsible", dataFormatter: cats_1.catFormatter, columns: columns, data: row.data, open: row.selected, subData: row.subRows },
                    React.createElement("td", null,
                        React.createElement(element_1.SelectableHeader, { classes: ['row-header'], handleSelect: toggleOpen, id: 'collapsible', value: row })));
            }
            else {
                return React.createElement(element_1.Row, { key: row.name + "-collapsible", dataFormatter: cats_1.catFormatter, columns: columns, data: row.data },
                    React.createElement("td", { className: 'row-header' }, row.name));
            }
        })));
};
//# sourceMappingURL=Collapsible.js.map