"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../../helpers");
exports.columns = function (_a) {
    var base = _a.base;
    return base.columns;
};
exports.rows = function (_a) {
    var base = _a.base, core = _a.core;
    return base.rows.map(function (name) { return ({ name: name, data: core.data[name] }); });
};
exports.totals = function (_a) {
    var base = _a.base, core = _a.core;
    return helpers_1.sumColumns(base.rows.map(function (name) { return core.data[name]; }), base.columns);
};
//# sourceMappingURL=selectors.js.map