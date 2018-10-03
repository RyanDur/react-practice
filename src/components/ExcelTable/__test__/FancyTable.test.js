import FancyTable from '../FancyTable';
import {mount} from 'enzyme';
import React from 'react';

describe('Fancy ExcelTable', () => {
  let wrapper;
  let props = {};

  beforeEach(() => {
    props = mockProps({});
    wrapper = mount(<FancyTable {...props}/>);
  });

  describe('rows', () => {
    const rows = () => wrapper.render()
      .find('.table-body')
      .children('.table-row');

    it('should have no rows if no data', () => {
      wrapper.setProps({data: []});
      expect(rows()).toHaveLength(0);
    });

    it('should have the same number of rows as there are in data', () => {
      expect(rows()).toHaveLength(5);
    });

    it('should set the name of the row', () => {
      expect(rows().find('.table-data').first().text()).toBe('Mendel');
    });

    describe('filtering', () => {
      it('should update the checked row', () => {
        wrapper.find('#row-check-2').simulate('change');

        expect(props.toggleChecked.mock.calls).toHaveLength(1);
        expect(props.toggleChecked.mock.calls[0][0])
          .toEqual({name: 'Ryan'});
      });
    });
  });

  describe('columns', () => {
    const columns = () => wrapper.render()
      .find('.table-head .table-row')
      .children('.column-header');

    it('should have no columns if there is no data', () => {
      wrapper.setProps({columns: []});
      expect(columns()).toHaveLength(0);
    });

    it('should have the same columns as there are keys in a row', () => {
      expect(columns()).toHaveLength(3);
    });

    it('should name the columns after the keys in the row', () => {
      expect(columns().eq(0).text()).toBe('foo');
      expect(columns().eq(1).text()).toBe('bar');
      expect(columns().eq(2).text()).toBe('baz');
    });
  });

  describe('Totals', () => {
    const footer = (column) => wrapper.render()
      .find('.table-footer .table-row')
      .find(`.table-data[data-column="${column}"]`);

    it('should sum up columns', () => {
      expect(footer('foo').text()).toEqual('5');
      expect(footer('bar').text()).toEqual('10');
      expect(footer('baz').text()).toEqual('15');
    });
  });
});

const mockProps = ({
  updateData = jest.fn(),
  updateTotals = jest.fn(),
  toggleChecked = jest.fn(),
  data = [
    {name: 'Mendel', row: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Rodolfo', row: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Ryan', row: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Jon', row: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Alex', row: {foo: 1, bar: 2, baz: 3}, checked: true}
  ],
  totals = {foo: 5, bar: 10, baz: 15},
  columns = ['foo', 'bar', 'baz']
}) => ({updateData, updateTotals, toggleChecked, data, totals, columns});