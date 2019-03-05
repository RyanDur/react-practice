"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../helpers");
exports.columns = function (_a) {
    var base = _a.base;
    return base.columns;
};
exports.rows = function (_a) {
    var base = _a.base, data = _a.data;
    return base.rowNames.map(function (row) { return ({ name: row, data: data.table[row].data }); });
};
exports.totals = function (_a) {
    var base = _a.base, data = _a.data;
    return helpers_1.sumColumns(base.rowNames.map(function (row) { return data.table[row].data; }), base.columns);
};
//# sourceMappingURL=selectors.js.map