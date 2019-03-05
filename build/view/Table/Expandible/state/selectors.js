"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandableRows = function (_a) {
    var base = _a.base, expandable = _a.expandable, data = _a.data;
    return base.rowNames.map(function (name) { return ({
        name: name,
        selected: expandable.open.includes(name),
        data: data.rows[name].row,
        subRows: data.rows[name].subRows
    }); });
};
//# sourceMappingURL=selectors.js.map