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
var types_1 = require("./Table/element/types");
var sum = function (acc, num) {
    if (num === void 0) { num = 0; }
    return acc + num;
};
var rowData = function (column) { return function (data) {
    if (data === void 0) { data = {}; }
    return data[column] || 0;
}; };
exports.sumColumns = function (data, columns) {
    if (data === void 0) { data = []; }
    if (columns === void 0) { columns = []; }
    return columns.map(function (column) {
        var _a;
        return (_a = {}, _a[column] = data.map(rowData(column)).reduce(sum, 0), _a);
    }).reduce(function (acc, col) { return (__assign({}, acc, col)); }, {});
};
exports.updateSelected = function (selection, selected) {
    if (selected === void 0) { selected = []; }
    return selected.includes(selection) ? remove([selection], selected) : selected.concat([selection]);
};
exports.addColumns = function (side, column, columnsToAdd, columns) {
    return {
        active: addTo({ side: side, column: column, columnsToAdd: columnsToAdd, columns: columns.active }),
        inactive: remove(columnsToAdd, columns.inactive)
    };
};
exports.removeColumns = function (columnsToRemove, columns) { return ({
    active: remove(columnsToRemove, columns.active),
    inactive: columns.inactive.concat(columnsToRemove)
}); };
var remove = function (thingsToRemove, things) {
    return thingsToRemove.reduce(function (acc, thing) {
        var index = acc.indexOf(thing);
        return acc.slice(0, index).concat(acc.slice(index + 1));
    }, things);
};
var addTo = function (parameters) {
    var side = parameters.side, column = parameters.column, columnsToAdd = parameters.columnsToAdd, columns = parameters.columns;
    var columnIndex = columns.indexOf(column);
    var front = function (n) { return columns.slice(0, columnIndex + n); };
    var back = function (n) { return columns.slice(columnIndex + n); };
    return side === types_1.direction.Right ? front(1).concat(columnsToAdd, back(1)) : front(0).concat(columnsToAdd, back(0));
};
exports.union = function (arr1, arr2) {
    return Array.from(new Set((arr1 || []).concat((arr2 || []))));
};
//# sourceMappingURL=helpers.js.map