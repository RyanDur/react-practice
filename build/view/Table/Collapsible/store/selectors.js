"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collapsibleRows = function (_a) {
    var base = _a.base, core = _a.core;
    return base.rows.map(function (name) { return ({ name: name, data: core.data[name] }); });
};
//# sourceMappingURL=selectors.js.map