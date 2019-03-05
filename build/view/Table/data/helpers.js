"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectHelpers_1 = require("../../../util/ObjectHelpers");
var helpers_1 = require("../../helpers");
var createStateFrom = function (_a) {
    var data = _a.data, rowNames = _a.rowNames, columnNames = _a.columnNames;
    return data.map(function (newRow) {
        var _a;
        return (_a = {},
            _a[newRow.name] = { data: ObjectHelpers_1.remove(newRow, 'name') },
            _a);
    }).reduce(function (table, subTable) {
        var _a;
        var rowName = Object.keys(subTable)[0];
        if (Object.keys(table).includes(rowName)) {
            var subRows = (table[rowName].subRows || [table[rowName].data]).concat([subTable[rowName].data]);
            return __assign({}, table, (_a = {}, _a[rowName] = { data: helpers_1.sumColumns(subRows, columnNames), subRows: subRows }, _a));
        }
        return __assign({}, table, subTable);
    }, {});
};
exports.reconcile = function (currentState, newState) {
    if (currentState === void 0) { currentState = {}; }
    if (newState === void 0) { newState = { data: [], rowNames: [], columnNames: [] }; }
    return (newState.data.length === 0) ?
        currentState : createStateFrom(newState);
};
//# sourceMappingURL=helpers.js.map