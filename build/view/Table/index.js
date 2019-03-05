"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var data_1 = require("./data");
var Expandible_1 = require("./Expandible");
var state_1 = require("./Selectable/state");
exports.tableMiddleware = [
    data_1.middleware
];
exports.tableReducers = {
    base: Base_1.base,
    data: data_1.data,
    selectable: state_1.selectable,
    expandable: Expandible_1.expandable
};
//# sourceMappingURL=index.js.map