"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connector_1 = require("./connector");
var Base_1 = require("./Table/Base");
var Collapsible_1 = require("./Table/Collapsible");
var Selectable_1 = require("./Table/Selectable");
exports.middleware = [];
exports.reducers = {
    base: Base_1.base,
    selectable: Selectable_1.selectable,
    collapsible: Collapsible_1.collapsible
};
exports.default = connector_1.default;
//# sourceMappingURL=index.js.map