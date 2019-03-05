"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../Base/store/selectors");
var Collapsible_1 = require("../Collapsible");
var selectors_2 = require("./selectors");
exports.default = react_redux_1.connect(function (state) { return ({
    columns: selectors_1.columns(state),
    rowNames: selectors_2.collapsibleRows(state),
    totals: selectors_1.totals(state)
}); })(Collapsible_1.Collapsible);
//# sourceMappingURL=connector.js.map
