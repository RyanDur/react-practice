"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var initialState_1 = require("../../../__test__/initialState");
var Base_1 = require("../../../Base");
var data_1 = require("../../../data");
var action_1 = require("../../../data/action");
var middleware_1 = require("../../../data/middleware");
var actions_1 = require("../actions");
var reducer_1 = require("../reducer");
var selectors_1 = require("../selectors");
var expected_1 = require("./expected");
describe('expandable table state', function () {
    var store;
    var open;
    var clientConnector = jest.fn(function (fn) { return fn(initialState_1.initialState); });
    beforeEach(function () {
        store = redux_1.createStore(redux_1.combineReducers({
            expandable: reducer_1.reducer,
            base: Base_1.base,
            core: data_1.data
        }), redux_1.applyMiddleware(middleware_1.socketMiddleware(clientConnector)));
        open = actions_1.toggleOpen(store.dispatch);
        action_1.connectToData(store.dispatch);
        store.dispatch({ type: action_1.socketAction.CONNECT });
    });
    describe('creating the row data', function () {
        it('should create a row for each row name', function () {
            var rows = selectors_1.expandableRows(store.getState());
            expect(rows).toEqual(expected_1.jordan_closed);
        });
    });
    it('should mark a row open', function () {
        open('Jordan');
        var rows = selectors_1.expandableRows(store.getState());
        expect(rows).toEqual(expected_1.jordan_open);
    });
});
//# sourceMappingURL=state.test.js.map