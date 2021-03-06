"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
var socketAction;
(function (socketAction) {
    socketAction["CONNECT"] = "CONNECT";
    socketAction["STOP"] = "STOP";
})(socketAction = exports.socketAction || (exports.socketAction = {}));
exports.connectToData = function (dispatch) { return function (_a) {
    var data = _a.rows, columnNames = _a.columnNames, rowNames = _a.rowNames;
    return dispatch({
        type: types_1.dataAction.DATA, response: {
            rows: data,
            columns: columnNames,
            rowNames: rowNames
        }
    });
}; };
//# sourceMappingURL=action.js.map
