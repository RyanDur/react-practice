"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../helpers");
exports.selectedTotals = function (_a) {
    var base = _a.base, selectable = _a.selectable, core = _a.core;
    return helpers_1.sumColumns(selectable.selected.map(function (selection) { return core.data[selection]; }), core.columns);
};
exports.selectableRows = function (_a) {
    var base = _a.base, selectable = _a.selectable, core = _a.core;
    return base.rows.map(function (rowName) { return ({
        name: rowName,
        selected: selectable.selected.includes(rowName),
        data: core.data[rowName]
    }); });
};
//# sourceMappingURL=selectors.js.map