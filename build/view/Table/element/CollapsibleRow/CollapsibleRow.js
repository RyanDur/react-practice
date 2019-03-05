"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var __1 = require("..");
var cats_1 = require("../cats");
exports.CollapsibleRow = function (_a) {
    var open = _a.open, columns = _a.columns, data = _a.data, subData = _a.subData, handleOpen = _a.handleOpen, children = _a.children;
    return React.createElement(React.Fragment, null,
        React.createElement(__1.Row, { handleClick: handleOpen, columns: columns, data: data }, children),
        open && subData.map(function (dataRow, index) { return React.createElement(__1.Row, { key: "collapsible-" + index, handleClick: handleOpen, columns: columns, data: dataRow, dataFormatter: cats_1.catFormatter },
            React.createElement("td", null)); }));
};
//# sourceMappingURL=CollapsibleRow.js.map