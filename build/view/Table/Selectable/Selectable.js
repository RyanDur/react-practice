"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var element_1 = require("../element");
var cats_1 = require("../element/cats");
exports.Selectable = function (_a) {
    var totals = _a.totals, rows = _a.rows, toggleSelect = _a.toggleSelect, defaultSelected = _a.defaultSelected, columns = _a.columns;
    return React.createElement(element_1.TotalsTable, { id: 'selectable', totals: totals, columns: columns },
        React.createElement("tbody", null, rows.map(function (row) {
            return React.createElement(element_1.Row, { key: row.name + "-selectable", data: row.data, columns: columns, dataFormatter: cats_1.catFormatter },
                React.createElement("td", null,
                    React.createElement(element_1.SelectableHeader, { classes: ['row-header'], id: 'selectable', value: row, handleSelect: toggleSelect, defaultSelected: defaultSelected })));
        })));
};
//# sourceMappingURL=Selectable.js.map