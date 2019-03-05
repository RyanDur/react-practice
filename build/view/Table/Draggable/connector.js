"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var helpers_1 = require("../../helpers");
var Draggable_1 = require("./Draggable");
exports.default = react_redux_1.connect(function (_a) {
    var base = _a.base, core = _a.rows;
    return ({
        columns: base.columns,
        rowNames: base.rowNames.map(function (name) { return ({ name: name, rows: core.rows[name] }); }),
        totals: helpers_1.sumColumns(base.rowNames.map(function (row) { return core.rows[row]; }), base.columns)
    });
})(Draggable_1.Draggable);
//# sourceMappingURL=connector.js.map
