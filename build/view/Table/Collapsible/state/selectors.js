"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collapsibleRows = function (_a) {
    var base = _a.base, collapsible = _a.expandable, core = _a.rows;
    return base.rowNames.map(function (name) { return ({
        name: name,
        open: collapsible.open.includes(name),
        rows: core.rows[name]
    }); });
};
//# sourceMappingURL=selectors.js.map
