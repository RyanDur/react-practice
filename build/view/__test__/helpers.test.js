"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
describe('helpers', function () {
    describe('summing the columns', function () {
        it('should handle empty rows', function () {
            var rows = [{}];
            var columns = ['foo'];
            var aggrigated = helpers_1.sumColumns(rows, columns);
            expect(aggrigated).toEqual({ foo: 0 });
        });
        it('should handle empty columns', function () {
            var rows = [{ bar: 1 }];
            var columns = [];
            var aggregated = helpers_1.sumColumns(rows, columns);
            expect(aggregated).toEqual({});
        });
        it('should handle empty columns and rows', function () {
            var rows = [];
            var columns = [];
            var aggregated = helpers_1.sumColumns(rows, columns);
            expect(aggregated).toEqual({});
        });
    });
    describe('sets', function () {
        describe('Union (a ∪ b)', function () {
            it('should create a set that contains the elements of both set a and set b.', function () {
                var arr1 = [1, 2, 3];
                var arr2 = [4, 3, 2];
                expect(helpers_1.union(arr1, arr2)).toEqual([1, 2, 3, 4]);
            });
            it('should do nothing if first array is empty', function () {
                var arr1 = [];
                var arr2 = [4, 3, 2];
                expect(helpers_1.union(arr1, arr2)).toEqual([4, 3, 2]);
            });
            it('should do nothing if second array is empty', function () {
                var arr1 = [1, 2, 3];
                var arr2 = [];
                expect(helpers_1.union(arr1, arr2)).toEqual([1, 2, 3]);
            });
            it('should do nothing if all arrays are empty', function () {
                var arr1 = [];
                var arr2 = [];
                expect(helpers_1.union(arr1, arr2)).toEqual([]);
            });
            it('should do nothing if first array is null', function () {
                var arr1 = null;
                var arr2 = [4, 3, 2];
                expect(helpers_1.union(arr1, arr2)).toEqual([4, 3, 2]);
            });
            it('should do nothing if second array is null', function () {
                var arr1 = [1, 2, 3];
                var arr2 = null;
                expect(helpers_1.union(arr1, arr2)).toEqual([1, 2, 3]);
            });
            it('should not have duplicates', function () {
                var arr1 = [4, 4, 4, 4, 4, 4, 4, 4];
                var arr2 = [4, 4, 4, 4, 4, 4, 4, 4, 4];
                expect(helpers_1.union(arr1, arr2)).toEqual([4]);
            });
        });
    });
});
//# sourceMappingURL=helpers.test.js.map