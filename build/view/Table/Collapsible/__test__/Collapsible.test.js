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
var element_1 = require("../../element");
var Collapsible_1 = require("../Collapsible");
describe('expandable', function () {
    var collapsible = function (props) { return enzyme_1.mount(React.createElement(Collapsible_1.Collapsible, __assign({}, props))); };
    it('should default to closed', function () {
        expect(collapsible(mockProps()).find(element_1.Row).length).toBe(4);
    });
    it('should only have as many expandable rows as are needed', function () {
        var rows = [
            { name: 'Travis', selected: false, data: { foo: 1, bar: 2 }, subRows: [{ foo: 0, bar: 2 }, { foo: 1, bar: 0 }] },
            { name: 'Chelsea', selected: false, data: { foo: 1, bar: 2 }, subRows: [{ foo: 0, bar: 2 }, { foo: 1, bar: 0 }] },
            { name: 'Caren', selected: false, data: { foo: 2, bar: 3 } }
        ];
        expect(collapsible(mockProps({ rows: rows }))
            .find(element_1.CollapsibleRow).length).toBe(2);
    });
    it('should be able to expand a row', function () {
        var rows = [
            { name: 'Travis', selected: false, data: { foo: 1, bar: 2 }, subRows: [{ foo: 0, bar: 2 }, { foo: 1, bar: 0 }] },
            { name: 'Caren', selected: false, data: { foo: 2, bar: 3 } }
        ];
        expect(collapsible(mockProps({ rows: rows }))
            .find(element_1.Row).length).toBe(2);
        var nextRows = [
            {
                name: 'Travis', selected: true, data: { foo: 1, bar: 2 }, subRows: [
                    { foo: 0, bar: 2 },
                    { foo: 1, bar: 2 },
                    { foo: 1, bar: 0 }
                ]
            },
            { name: 'Caren', selected: false, data: { foo: 2, bar: 3 } }
        ];
        expect(collapsible(mockProps({ rows: nextRows }))
            .find(element_1.Row).length).toBe(5);
    });
    it('should allow a user to select a row', function () {
        var props = mockProps();
        collapsible(props).find('#Travis-checkbox-expandable')
            .simulate('change');
        expect(props.toggleOpen).toHaveBeenCalledWith('Travis');
    });
});
var mockProps = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.columns, columns = _c === void 0 ? ['foo', 'bar'] : _c, _d = _b.rows, rows = _d === void 0 ? [
        {
            name: 'Travis',
            selected: false,
            data: { foo: 1, bar: 2 },
            subRows: [{ foo: 0, bar: 2 }, { foo: 1, bar: 0 }]
        },
        { name: 'Caren', selected: false, data: { foo: 2, bar: 3 } },
        { name: 'Mike', selected: false, data: { foo: 2, bar: 3 } },
        { name: 'Joey', selected: false, data: { foo: 2, bar: 3 } }
    ] : _d, _e = _b.totals, totals = _e === void 0 ? { foo: 2, bar: 3 } : _e, _f = _b.toggleOpen, toggleOpen = _f === void 0 ? jest.fn() : _f;
    return ({ columns: columns, rows: rows, totals: totals, toggleOpen: toggleOpen });
};
//# sourceMappingURL=Expandable.test.js.map
