"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collapsibleRows = function (_a) {
    var base = _a.base, core = _a.rows;
    return base.rowNames.map(function (name) { return ({ name: name, rows: core.rows[name] }); });
};
//# sourceMappingURL=selectors.js.map
