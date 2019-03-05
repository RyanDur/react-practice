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
    var newState = _a.newState;
    return newState.map(function (newRow) {
        var _a;
        return (_a = {},
            _a[newRow.name] = { row: ObjectHelpers_1.remove(newRow, 'name') },
            _a);
    }).reduce(function (rows, row) {
        var _a;
        var name = Object.keys(row)[0];
        var names = Object.keys(rows);
        var columns = Object.keys(row[name].row);
        if (names.includes(name)) {
            return __assign({}, rows, (_a = {},
                _a[name] = {
                    rows: helpers_1.sumColumns([rows[name].row, row[name].row], columns),
                    subRows: rows[name].subRows
                },
                _a));
        }
        return __assign({}, rows, row);
    }, {});
};
exports.normalize = function (currentState, newState) {
    if (currentState === void 0) { currentState = {}; }
    if (newState === void 0) { newState = []; }
    return (newState.length === 0) ?
        currentState :
        createStateFrom({ newState: newState });
};
//# sourceMappingURL=helpers.js.map