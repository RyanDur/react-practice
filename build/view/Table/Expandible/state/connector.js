"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../Base/store/selectors");
var Expandable_1 = require("../Expandable");
var actions_1 = require("./actions");
var selectors_2 = require("./selectors");
exports.default = react_redux_1.connect(function (state) { return ({
    columns: selectors_1.columns(state),
    rows: selectors_2.expandableRows(state),
    totals: selectors_1.totals(state)
}); }, function (dispatch) { return ({
    toggleOpen: actions_1.toggleOpen(dispatch)
}); })(Expandable_1.Expandable);
//# sourceMappingURL=connector.js.map