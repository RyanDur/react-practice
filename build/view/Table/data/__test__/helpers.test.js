"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
describe('normalizing the data', function () {
    it('should take the data and turn it into a table', function () {
        var currentState = {
            foo: { data: { fip: 4 } }
        };
        var newState = {
            data: [{ name: 'foo', fip: 3 }],
            columnNames: ['fip'],
            rowNames: ['foo']
        };
        expect(helpers_1.reconcile(currentState, newState)).toEqual({
            foo: { data: { fip: 3 } }
        });
    });
    it('should take multiple data points and turn it into current state', function () {
        var currentState = {
            foo: { data: { fip: 4, fop: 5 } },
            far: { data: { fip: 3, fop: 1 } }
        };
        var newState = {
            data: [
                { name: 'foo', fip: 3, fop: 6 },
                { name: 'far', fip: 6, fop: 7 }
            ],
            columnNames: ['fip', 'fop'],
            rowNames: ['foo', 'far']
        };
        expect(helpers_1.reconcile(currentState, newState)).toEqual({
            foo: { data: { fip: 3, fop: 6 } },
            far: { data: { fip: 6, fop: 7 } }
        });
    });
    it('should remove the row from the current ste if it is not in the new rows', function () {
        var currentState = {
            foo: { data: { fip: 4, fop: 5 } },
            far: { data: { fip: 3, fop: 1 } }
        };
        var newState = {
            data: [{ name: 'foo', fip: 3, fop: 6 }],
            rowNames: ['foo'],
            columnNames: ['fip', 'fop']
        };
        expect(helpers_1.reconcile(currentState, newState)).toEqual({
            foo: { data: { fip: 3, fop: 6 } }
        });
    });
    it('should remove the column that are no longer reflected in the new data', function () {
        var current = {
            foo: { data: { fip: 4, fop: 5 } },
            far: { data: { fip: 3, fop: 1 } }
        };
        var data = {
            data: [
                { name: 'foo', fip: 3, fop: 6 },
                { name: 'far', fip: 6 }
            ],
            rowNames: ['fip', 'fop'],
            columnNames: ['foo', 'far']
        };
        expect(helpers_1.reconcile(current, data)).toEqual({
            foo: { data: { fip: 3, fop: 6 } },
            far: { data: { fip: 6 } }
        });
    });
    it('should handle undefined current state', function () {
        var current = {
            foo: { data: { fip: 4 } }
        };
        expect(helpers_1.reconcile(current, undefined)).toEqual({
            foo: { data: { fip: 4 } }
        });
    });
    it('should handle undefined new state', function () {
        var newState = {
            data: [
                { name: 'foo', fip: 3, fop: 6 },
                { name: 'far', fip: 16 }
            ],
            rowNames: ['foo', 'far'],
            columnNames: ['fip', 'fop']
        };
        expect(helpers_1.reconcile(undefined, newState)).toEqual({
            foo: { data: { fip: 3, fop: 6 } },
            far: { data: { fip: 16 } }
        });
    });
    it('should store the sub-rows and sum them to create the current row', function () {
        var newState = {
            data: [
                { name: 'foo', fip: 3, fop: 6 },
                { name: 'foo', fip: 3, fop: 6 },
                { name: 'far', fip: 16 }
            ],
            rowNames: ['foo', 'far'],
            columnNames: ['fip', 'fop']
        };
        expect(helpers_1.reconcile(undefined, newState)).toEqual({
            foo: {
                data: { fip: 6, fop: 12 }, subRows: [
                    { fip: 3, fop: 6 },
                    { fip: 3, fop: 6 }
                ]
            },
            far: { data: { fip: 16 } }
        });
    });
});
//# sourceMappingURL=helpers.test.js.map