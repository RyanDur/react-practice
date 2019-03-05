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
var enzyme_1 = require("enzyme");
var React = require("react");
var Selectable_1 = require("../Selectable");
describe('selectable id', function () {
    var mockProps = function () { return ({
        defaultSelected: false,
        columns: ['foo', 'bar'],
        rows: [{ name: 'Caren', data: { foo: 1, bar: 2 }, selected: false }],
        toggleSelect: jest.fn(),
        totals: {}
    }); };
    it('should update the selection if default is true', function () {
        var props = mockProps();
        enzyme_1.mount(React.createElement(Selectable_1.Selectable, __assign({}, __assign({}, props, { rowNames: [{ name: 'Ryan', rows: { foo: 1, bar: 2 }, selected: false }], defaultSelected: true }))));
        expect(props.toggleSelect).toBeCalledTimes(1);
        expect(props.toggleSelect).toBeCalledWith('Ryan');
    });
    it('should not update the selection if default is false', function () {
        var props = mockProps();
        enzyme_1.mount(React.createElement(Selectable_1.Selectable, __assign({}, props)));
        expect(props.toggleSelect).toBeCalledTimes(0);
    });
    it('should not update the selection if default is not set', function () {
        var props = mockProps();
        enzyme_1.mount(React.createElement(Selectable_1.Selectable, __assign({}, __assign({}, props, { defaultSelected: undefined }))));
        expect(props.toggleSelect).toBeCalledTimes(0);
    });
    it('should update the selection when selected', function () {
        var props = mockProps();
        var selectable = enzyme_1.mount(React.createElement(Selectable_1.Selectable, __assign({}, props)));
        selectable.find('#Caren-checkbox').simulate('change');
        expect(props.toggleSelect).toBeCalledTimes(1);
        expect(props.toggleSelect).toBeCalledWith('Caren');
    });
});
//# sourceMappingURL=Selectable.test.js.map