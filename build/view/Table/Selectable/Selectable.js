"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var elements_1 = require("../elements");
exports.Selectable = function (_a) {
    var totals = _a.totals, rows = _a.rows, toggleSelect = _a.toggleSelect, defaultSelected = _a.defaultSelected, columns = _a.columns;
    return React.createElement(elements_1.TotalsTable, { id: 'selectable', totals: totals, columns: columns },
        React.createElement("tbody", null, rows.map(function (row) {
            return React.createElement(elements_1.CatRow, { key: row.name + "-selectable", columns: columns, row: row },
                React.createElement(elements_1.SelectableHeader, { value: row, handleSelect: toggleSelect, defaultSelected: defaultSelected }));
        })));
};
//# sourceMappingURL=Selectable.js.map