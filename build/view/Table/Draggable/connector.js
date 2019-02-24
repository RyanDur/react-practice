"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var helpers_1 = require("../../helpers");
var Draggable_1 = require("./Draggable");
exports.default = react_redux_1.connect(function (_a) {
    var base = _a.base, core = _a.core;
    return ({
        columns: base.columns,
        rows: base.rows.map(function (name) { return ({ name: name, data: core.data[name] }); }),
        totals: helpers_1.sumColumns(base.rows.map(function (row) { return core.data[row]; }), base.columns)
    });
})(Draggable_1.Draggable);
//# sourceMappingURL=connector.js.map