"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Row = function (_a) {
    var children = _a.children, columns = _a.columns, data = _a.rows, dataFormatter = _a.dataFormatter;
    return React.createElement("tr", null,
        children,
        columns.map(function (column) {
            return React.createElement("td", { key: column, "data-group": column }, dataFormatter(data[column]));
        }));
};
//# sourceMappingURL=Row.js.map
