"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var initialState_1 = require("../../../__test__/initialState");
var Base_1 = require("../../../Base");
var data_1 = require("../../../data");
var action_1 = require("../../../data/action");
var middleware_1 = require("../../../data/middleware");
var actions_1 = require("../actions");
var index_1 = require("../index");
var selectors_1 = require("../selectors");
describe('selectable state', function () {
    var store;
    var select;
    var clientConnector = jest.fn(function (fn) { return fn(initialState_1.initialState); });
    var selected = function (state) {
        return selectors_1.selectableRows(state)
            .filter(function (row) { return row.selected; })
            .map(function (selection) { return selection.name; });
    };
    beforeEach(function () {
        store = redux_1.createStore(redux_1.combineReducers({
            selectable: index_1.selectable,
            base: Base_1.base,
            data: data_1.data
        }), redux_1.applyMiddleware(middleware_1.socketMiddleware(clientConnector)));
        select = actions_1.toggleSelect(store.dispatch);
        action_1.connectToData(store.dispatch);
        store.dispatch({ type: action_1.socketAction.CONNECT });
    });
    it('should default the selections to empty', function () {
        expect(selected(store.getState())).toEqual([]);
    });
    it('should add the selection', function () {
        select('Alex');
        expect(selected(store.getState())).toEqual(['Alex']);
    });
    it('should remove the selection that is already selected', function () {
        select('Alex');
        select('Alex');
        expect(selected(store.getState())).toEqual([]);
    });
});
//# sourceMappingURL=state.test.js.map