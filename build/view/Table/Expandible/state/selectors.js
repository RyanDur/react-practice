"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandableRows = function (_a) {
    var base = _a.base, expandable = _a.expandable, data = _a.data;
    return base.rowNames.map(function (row) { return ({
        name: row,
        selected: expandable.open.includes(row),
        data: data.table[row].data,
        subRows: data.table[row].subRows
    }); });
};
//# sourceMappingURL=selectors.js.map