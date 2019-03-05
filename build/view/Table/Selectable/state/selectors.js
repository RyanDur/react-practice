"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../helpers");
exports.selectedTotals = function (_a) {
    var base = _a.base, selectable = _a.selectable, data = _a.data;
    return helpers_1.sumColumns(selectable.selected.map(function (row) { return data.table[row].data; }), data.columns);
};
exports.selectableRows = function (_a) {
    var base = _a.base, selectable = _a.selectable, data = _a.data;
    return base.rowNames.map(function (row) { return ({
        name: row,
        selected: selectable.selected.includes(row),
        data: data.table[row].data
    }); });
};
//# sourceMappingURL=selectors.js.map