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
exports.merge = function (left, right) {
    if (left === void 0) { left = {}; }
    if (right === void 0) { right = {}; }
    return (__assign({}, left, right));
};
exports.remove = function (obj, prop) {
    return Object.keys(obj).reduce(function (object, key) {
        if (key !== prop) {
            object[key] = obj[key];
        }
        return object;
    }, {});
};
//# sourceMappingURL=ObjectHelpers.js.map