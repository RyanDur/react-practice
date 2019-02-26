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
        store = redux_1.createStore(redux_1.combineReducers(__assign({ selectable: index_1.selectable,
            base: Base_1.base }, core_1.reducers)), redux_1.applyMiddleware(middleware_1.socketMiddleware(clientConnector)));
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
//# sourceMappingURL=State.test.js.map