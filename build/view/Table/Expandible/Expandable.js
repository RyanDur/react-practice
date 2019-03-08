"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var element_1 = require("../element");
var cats_1 = require("../element/cats");
exports.Expandable = function (_a) {
    var totals = _a.totals, rows = _a.rows, toggleOpen = _a.toggleOpen, columns = _a.columns, classes = _a.classes;
    return React.createElement(element_1.TotalsTable, { id: 'collapsible', totals: totals, columns: columns, classes: classes },
        React.createElement("tbody", null, rows.map(function (row) {
            if (row.subRows) {
                return React.createElement(element_1.CollapsibleRow, { key: row.name, dataFormatter: cats_1.catFormatter, columns: columns, data: row.data, open: row.selected, handleOpen: function () { return toggleOpen(row.name); }, subData: row.subRows },
                    React.createElement("td", null,
                        React.createElement(element_1.Select, { classes: ['row-header'], handleSelect: toggleOpen, id: 'expandable', value: row })));
            }
            else {
                return React.createElement(element_1.Row, { key: row.name, dataFormatter: cats_1.catFormatter, columns: columns, data: row.data },
                    React.createElement("td", { className: 'row-header' }, row.name));
            }
        })));
};
//# sourceMappingURL=Expandable.js.map