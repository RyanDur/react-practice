"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
describe('normalizing the data', function () {
    it('should take the data and turn it into a row', function () {
        var row = {
            foo: { row: { fip: 4 }, subRows: [] }
        };
        var data = [{
                name: 'foo',
                fip: 3
            }];
        expect(helpers_1.normalize(row, data)).toEqual({
            foo: {
                name: 'foo',
                row: { fip: 3 }
            }
        });
    });
    it('should take multiple data points and turn it into current state', function () {
        var row = {
            foo: { row: { fip: 4, fop: 5 }, subRows: [] },
            far: { row: { fip: 3, fop: 1 }, subRows: [] }
        };
        var data = [
            { name: 'foo', fip: 3, fop: 6 },
            { name: 'far', fip: 6, fop: 7 }
        ];
        expect(helpers_1.normalize(row, data)).toEqual({
            foo: {
                name: 'foo',
                rows: { fip: 3, fop: 6 }
            },
            far: {
                name: 'far',
                rows: { fip: 6, fop: 7 }
            }
        });
    });
    it('should remove the row from the current ste if it is not in the new rows', function () {
        var currentState = {
            foo: { row: { fip: 4, fop: 5 }, subRows: [] },
            far: { row: { fip: 3, fop: 1 }, subRows: [] }
        };
        var newData = [
            { name: 'foo', fip: 3, fop: 6 }
        ];
        expect(helpers_1.normalize(currentState, newData)).toEqual({
            foo: {
                name: 'foo',
                row: { fip: 3, fop: 6 }
            }
        });
    });
    it('should remove the column that are no longer reflected in the new data', function () {
        var current = {
            foo: { row: { fip: 4, fop: 5 }, subRows: [] },
            far: { row: { fip: 3, fop: 1 }, subRows: [] }
        };
        var data = [
            { name: 'foo', fip: 3, fop: 6 },
            { name: 'far', fip: 6 }
        ];
        expect(helpers_1.normalize(current, data)).toEqual({
            foo: {
                name: 'foo',
                rows: { fip: 3, fop: 6 }
            },
            far: {
                name: 'far',
                rows: { fip: 6 }
            }
        });
    });
    it('should handle undefined current state', function () {
        var current = {
            foo: { row: { fip: 4 }, subRows: [] }
        };
        expect(helpers_1.normalize(current, undefined)).toEqual({
            foo: {
                name: 'foo',
                row: { fip: 4 }
            }
        });
    });
    it('should handle undefined new state', function () {
        var data = [
            { name: 'foo', fip: 3, fop: 6 },
            { name: 'far', fip: 16 }
        ];
        expect(helpers_1.normalize(undefined, data)).toEqual({
            foo: {
                name: 'foo',
                row: { fip: 3, fop: 6 }
            },
            far: {
                name: 'far',
                row: { fip: 16 }
            }
        });
    });
});
//# sourceMappingURL=helpers.test.js.map