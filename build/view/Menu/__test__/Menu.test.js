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
var types_1 = require("../../Table/elements/types");
var Menu_1 = require("../Menu");
describe('The Menu', function () {
    var props;
    var menu;
    beforeEach(function () {
        props = mockProps();
        menu = enzyme_1.mount(React.createElement(Menu_1.Menu, __assign({}, props)));
    });
    xdescribe('adding a column', function () {
        it('should have columns to add', function () {
            expect(menu.find('.add-columns').children().length).toBe(2);
        });
        describe('to the right', function () {
            it('should not happen if nothing is selected', function () {
                menu.find('.add-right').simulate('click');
                expect(props.add).not.toHaveBeenCalled();
            });
            it('should allow a user to add one', function () {
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'another' } } });
                menu.find('.add-right').simulate('click');
                expect(props.add).toHaveBeenCalledWith(types_1.direction.Right, props.column, ['another']);
            });
            it('should allow a user to change there mind', function () {
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'another' } } });
                menu.find('[data-column="yet_another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'yet_another' } } });
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: false, nextElementSibling: { textContent: 'another' } } });
                menu.find('.add-right').simulate('click');
                expect(props.add).toHaveBeenCalledWith(types_1.direction.Right, props.column, ['yet_another']);
            });
            it('should allow a user to add multiple', function () {
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'another' } } });
                menu.find('[data-column="yet_another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'yet_another' } } });
                menu.find('.add-right').simulate('click');
                expect(props.add).toHaveBeenCalledWith(types_1.direction.Right, props.column, ['another', 'yet_another']);
            });
            it('should not be able to add a column immediately after adding', function () {
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'another' } } });
                menu.find('.add-right').simulate('click');
                menu.find('.add-right').simulate('click');
                expect(props.add).toBeCalledTimes(1);
            });
        });
        describe('to the left', function () {
            it('should not happen if nothing is selected', function () {
                menu.find('.add-left').simulate('click');
                expect(props.add).not.toHaveBeenCalled();
            });
            it('should allow a user to add one', function () {
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'another' } } });
                menu.find('.add-left').simulate('click');
                expect(props.add).toHaveBeenCalledWith(types_1.direction.Left, props.column, ['another']);
            });
            it('should allow a user to change there mind', function () {
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'another' } } });
                menu.find('[data-column="yet_another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'yet_another' } } });
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: false, nextElementSibling: { textContent: 'another' } } });
                menu.find('.add-left').simulate('click');
                expect(props.add).toHaveBeenCalledWith(types_1.direction.Left, props.column, ['yet_another']);
            });
            it('should allow a user to add multiple', function () {
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'another' } } });
                menu.find('[data-column="yet_another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'yet_another' } } });
                menu.find('.add-left').simulate('click');
                expect(props.add).toHaveBeenCalledWith(types_1.direction.Left, props.column, ['another', 'yet_another']);
            });
            it('should not be able to add a column immediately after adding', function () {
                menu.find('[data-column="another"]')
                    .simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'another' } } });
                menu.find('.add-left').simulate('click');
                menu.find('.add-left').simulate('click');
                expect(props.add).toBeCalledTimes(1);
            });
        });
    });
    xdescribe('removing a column', function () {
        it('should have columns to remove', function () {
            expect(menu.find('.remove-columns').children().length).toBe(1);
        });
        it('should be able to remove a chosen column', function () {
            menu.find('[data-column="columnName"]').simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'columnName' } } });
            menu.find('.remove').simulate('click');
            expect(props.remove).toHaveBeenCalledWith(['columnName']);
        });
        it('should let a user change their mind', function () {
            menu.find('[data-column="columnName"]').simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'columnName' } } });
            menu.find('[data-column="columnName"]').simulate('change', { target: { selected: false, nextElementSibling: { textContent: 'columnName' } } });
            menu.find('.remove').simulate('click');
            expect(props.remove).not.toHaveBeenCalled();
        });
        it('should not try to remove a column twice', function () {
            menu.find('[data-column="columnName"]').simulate('change', { target: { selected: true, nextElementSibling: { textContent: 'columnName' } } });
            menu.find('.remove').simulate('click');
            menu.find('.remove').simulate('click');
            expect(props.remove).toBeCalledTimes(1);
        });
    });
});
var mockProps = function (column, add, remove, columns) {
    if (column === void 0) { column = 'columnName'; }
    if (add === void 0) { add = jest.fn(); }
    if (remove === void 0) { remove = jest.fn(); }
    if (columns === void 0) { columns = {
        active: ['columnName'],
        inactive: ['another', 'yet_another']
    }; }
    return ({ column: column, add: add, remove: remove, columns: columns });
};
//# sourceMappingURL=Menu.test.js.map