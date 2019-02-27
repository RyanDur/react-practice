"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
describe('util helpers', function () {
    it('should add a previously unselected selection', function () {
        var actual = helpers_1.toggle('row', []);
        expect(actual).toEqual(['row']);
    });
    it('should remove a previously selected selection', function () {
        var actual = helpers_1.toggle('row', ['row']);
        expect(actual).toEqual([]);
    });
    it('should always return the original list if nothing is given', function () {
        var actual = helpers_1.toggle(null, []);
        expect(actual).toEqual([]);
    });
});
//# sourceMappingURL=helpers.test.js.map