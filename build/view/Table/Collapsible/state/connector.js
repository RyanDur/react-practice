"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../Base/store/selectors");
var Collapsible_1 = require("../Collapsible");
var actions_1 = require("./actions");
var selectors_2 = require("./selectors");
exports.default = react_redux_1.connect(function (state) { return ({
    columns: selectors_1.columns(state),
    rows: selectors_2.collapsibleRows(state),
    totals: selectors_1.totals(state)
}); }, function (dispatch) { return ({
    toggleOpen: actions_1.toggleOpen(dispatch)
}); })(Collapsible_1.Collapsible);
//# sourceMappingURL=connector.js.map