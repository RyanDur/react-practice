import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Menu} from '../Menu';
import {ColumnName, Direction, MenuProps} from "../types";

describe('The Menu', () => {
  let props: MenuProps & ColumnName;
  let menu: ReactWrapper<Menu>;

  beforeEach(() => {
    props = mockProps();
    menu = mount(<Menu {...props}/>);
  });

  describe('adding a column', () => {
    it('should have columns to add', () => {
      expect(menu.find('.add-columns').children().length).toBe(2);
    });

    describe('to the right', () => {
      it('should not happen if nothing is selected', () => {
        menu.find('.add-right').simulate('click');
        expect(props.add).not.toHaveBeenCalled();
      });

      it('should allow a user to add one', () => {
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'another'}}});
        menu.find('.add-right').simulate('click');

        expect(props.add).toHaveBeenCalledWith(
          Direction.Right,
          props.column,
          ['another']
        );
      });

      it('should allow a user to change there mind', () => {
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'another'}}});
        menu.find('[data-column="yet_another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'yet_another'}}});
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: false, nextElementSibling: {textContent: 'another'}}});
        menu.find('.add-right').simulate('click');

        expect(props.add).toHaveBeenCalledWith(
          Direction.Right,
          props.column,
          ['yet_another']
        );
      });

      it('should allow a user to add multiple', () => {
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'another'}}});
        menu.find('[data-column="yet_another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'yet_another'}}});
        menu.find('.add-right').simulate('click');

        expect(props.add).toHaveBeenCalledWith(
          Direction.Right,
          props.column,
          ['another', 'yet_another']
        );
      });

      it('should not be able to add a column immediately after adding', () => {
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'another'}}});
        menu.find('.add-right').simulate('click');
        menu.find('.add-right').simulate('click');

        expect(props.add).toBeCalledTimes(1);
      });
    });

    describe('to the left', () => {
      it('should not happen if nothing is selected', () => {
        menu.find('.add-left').simulate('click');
        expect(props.add).not.toHaveBeenCalled();
      });

      it('should allow a user to add one', () => {
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'another'}}});
        menu.find('.add-left').simulate('click');

        expect(props.add).toHaveBeenCalledWith(
          Direction.Left,
          props.column,
          ['another']
        );
      });

      it('should allow a user to change there mind', () => {
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'another'}}});
        menu.find('[data-column="yet_another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'yet_another'}}});
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: false, nextElementSibling: {textContent: 'another'}}});
        menu.find('.add-left').simulate('click');

        expect(props.add).toHaveBeenCalledWith(
          Direction.Left,
          props.column,
          ['yet_another']
        );
      });

      it('should allow a user to add multiple', () => {
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'another'}}});
        menu.find('[data-column="yet_another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'yet_another'}}});
        menu.find('.add-left').simulate('click');

        expect(props.add).toHaveBeenCalledWith(
          Direction.Left,
          props.column,
          ['another', 'yet_another']
        );
      });

      it('should not be able to add a column immediately after adding', () => {
        menu.find('[data-column="another"]')
          .simulate('change', {target: {checked: true, nextElementSibling: {textContent: 'another'}}});
        menu.find('.add-left').simulate('click');
        menu.find('.add-left').simulate('click');

        expect(props.add).toBeCalledTimes(1);
      });
    });
  });
});

const mockProps = (
  column = 'columnName',
  add = jest.fn(),
  columns = {
    active: ['columnName'],
    inactive: ['another', 'yet_another']
  }
): MenuProps & ColumnName =>
  ({column, add, columns});