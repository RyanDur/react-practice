"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../Base/store/selectors");
var Selectable_1 = require("../Selectable");
var actions_1 = require("./actions");
var selectors_2 = require("./selectors");
exports.default = react_redux_1.connect(function (state) { return ({
    columns: selectors_1.columns(state),
    rows: selectors_2.selectableRows(state),
    totals: selectors_2.selectedTotals(state)
}); }, function (dispatch) { return ({
    toggleSelect: actions_1.toggleSelect(dispatch)
}); })(Selectable_1.Selectable);
//# sourceMappingURL=connector.js.map