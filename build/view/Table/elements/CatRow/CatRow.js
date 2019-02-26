"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var cats_1 = require("./cats");
exports.CatRow = function (_a) {
    var children = _a.children, columns = _a.columns, row = _a.row;
    return React.createElement("tr", null,
        children,
        columns.map(function (column) {
            return React.createElement("td", { key: column, "data-group": column }, cats_1.cats[row.data[column]] || '—');
        }));
};
//# sourceMappingURL=Row.js.map
