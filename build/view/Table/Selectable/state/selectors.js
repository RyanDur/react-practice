"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../helpers");
exports.selectedTotals = function (_a) {
    var base = _a.base, selectable = _a.selectable, data = _a.data;
    return helpers_1.sumColumns(selectable.selected.map(function (selection) { return data.rows[selection].row; }), data.columns);
};
exports.selectableRows = function (_a) {
    var base = _a.base, selectable = _a.selectable, data = _a.data;
    return base.rowNames.map(function (rowName) { return ({
        name: rowName,
        selected: selectable.selected.includes(rowName),
        data: data.rows[rowName].row
    }); });
};
//# sourceMappingURL=selectors.js.map