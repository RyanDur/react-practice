"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Base_1 = require("../Base");
var selectors_1 = require("./selectors");
exports.default = react_redux_1.connect(function (state) { return ({
    columns: selectors_1.columns(state),
    rows: selectors_1.rows(state),
    totals: selectors_1.totals(state)
}); })(Base_1.Base);
//# sourceMappingURL=connector.js.map