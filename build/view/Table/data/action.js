"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketAction;
(function (socketAction) {
    socketAction["CONNECT"] = "CONNECT";
    socketAction["STOP"] = "STOP";
})(socketAction = exports.socketAction || (exports.socketAction = {}));
var dataAction;
(function (dataAction) {
    dataAction["DATA"] = "DATA";
})(dataAction = exports.dataAction || (exports.dataAction = {}));
exports.connectToData = function (dispatch) { return function (_a) {
    var data = _a.data, columnNames = _a.columnNames, rowNames = _a.rowNames;
    return dispatch({
        type: dataAction.DATA,
        data: data,
        columnNames: columnNames,
        rowNames: rowNames
    });
}; };
//# sourceMappingURL=action.js.map