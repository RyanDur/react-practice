"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Row = function (_a) {
    var children = _a.children, _b = _a.columns, columns = _b === void 0 ? [] : _b, _c = _a.data, data = _c === void 0 ? {} : _c, _d = _a.dataFormatter, dataFormatter = _d === void 0 ? function (a) { return a; } : _d, handleClick = _a.handleClick;
    return React.createElement("tr", null,
        children,
        columns.map(function (column) {
            return React.createElement("td", { key: column, onClick: handleClick, "data-group": column }, dataFormatter(data[column]));
        }));
};
//# sourceMappingURL=Row.js.map