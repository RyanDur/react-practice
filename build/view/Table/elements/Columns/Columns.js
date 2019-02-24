"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Columns = function (_a) {
    var columns = _a.columns;
    return React.createElement("thead", null,
        React.createElement("tr", null,
            React.createElement("th", null, "Columns:"),
            columns.map(function (column) { return React.createElement("th", { key: column + "-header" }, column); })));
};
//# sourceMappingURL=Columns.js.map