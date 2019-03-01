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
var redux_1 = require("redux");
var core_1 = require("../../../../../core");
var action_1 = require("../../../../../core/action");
var middleware_1 = require("../../../../../core/middleware");
var initialState_1 = require("../../../__test__/initialState");
var Base_1 = require("../../../Base");
var actions_1 = require("../actions");
var reducer_1 = require("../reducer");
var selectors_1 = require("../selectors");
describe('expandable table state', function () {
    var store;
    var open;
    var clientConnector = jest.fn(function (fn) { return fn(initialState_1.initialState); });
    beforeEach(function () {
        store = redux_1.createStore(redux_1.combineReducers(__assign({ collapsible: reducer_1.reducer,
            base: Base_1.base }, core_1.reducers)), redux_1.applyMiddleware(middleware_1.socketMiddleware(clientConnector)));
        open = actions_1.toggleOpen(store.dispatch);
        action_1.connectToData(store.dispatch);
        store.dispatch({ type: action_1.socketAction.CONNECT });
    });
    describe('creating the row data', function () {
        it('should create a row for each row name', function () {
            var rows = selectors_1.collapsibleRows(store.getState());
            expect(rows).toEqual([]);
        });
    });
});
//# sourceMappingURL=state.test.js.map
