"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../helpers");
exports.columns = function (_a) {
    var base = _a.base;
    return base.columns;
};
exports.rows = function (_a) {
    var base = _a.base, data = _a.data;
    return base.rowNames.map(function (name) { return ({ name: name, rows: data.rows[name].row }); });
};
exports.totals = function (_a) {
    var base = _a.base, data = _a.data;
    return helpers_1.sumColumns(base.rowNames.map(function (name) { return data.rows[name].row; }), base.columns);
};
//# sourceMappingURL=selectors.js.map