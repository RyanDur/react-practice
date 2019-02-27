"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collapsibleRows = function (_a) {
    var base = _a.base, collapsible = _a.collapsible, core = _a.core;
    return base.rows.map(function (name) { return ({
        name: name,
        open: collapsible.open.includes(name),
        data: core.data[name]
    }); });
};
//# sourceMappingURL=selectors.js.map