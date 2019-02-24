"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var React = require("react");
var Dropdown_1 = require("../Dropdown");
describe('dropdown', function () {
    var list = [
        { value: 'foo', title: 'bar' },
        { value: 'face', title: 'your' }
    ];
    var dropdown = enzyme_1.mount(React.createElement(Dropdown_1.Dropdown, { options: list, selectionFormat: function (option) { return option.title; } }, list.map(function (option) { return option.title; })));
    it('should show the first option', function () {
        expect(dropdown.find('.selected').text()).toBe('bar');
    });
    it('should have as many options as there are in the list', function () {
        expect(dropdown.find('.option')).toHaveLength(2);
    });
    it('should change the header title to the selected option', function () {
        dropdown.find('.option:last-child').simulate('click');
        expect(dropdown.find('.selected').text()).toBe('your');
    });
    xit('should show the list of options when the header is clicked', function () {
        dropdown.find('.selected').simulate('click');
        expect(dropdown.find('.options').hasClass('hide')).toBe(false);
    });
});
//# sourceMappingURL=dropdown.test.js.map