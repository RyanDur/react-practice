"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var elements_1 = require("../elements");
var cats_1 = require("../elements/cats");
exports.Selectable = function (_a) {
    var totals = _a.totals, rows = _a.rows, toggleSelect = _a.toggleSelect, defaultSelected = _a.defaultSelected, columns = _a.columns;
    return React.createElement(elements_1.TotalsTable, { id: 'selectable', totals: totals, columns: columns },
        React.createElement("tbody", null, rows.map(function (row) {
            return React.createElement(elements_1.Row, { key: row.name + "-selectable", data: row.data, columns: columns, dataFormatter: cats_1.catFormatter },
                React.createElement("td", null,
                    React.createElement(elements_1.SelectableHeader, { classes: ['row-header'], value: row, handleSelect: toggleSelect, defaultSelected: defaultSelected })));
        })));
};
//# sourceMappingURL=Selectable.js.map