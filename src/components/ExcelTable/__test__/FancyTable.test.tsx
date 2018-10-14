import FancyTable from '../FancyTable';
import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {TableProps} from "../connector";
import {TableState} from "../reducer";

describe('Fancy ExcelTable', () => {
  let props: TableProps;
  let wrapper: ReactWrapper<React.Component<TableProps, TableState>>;

  beforeEach(() => {
    props = mockProps({});
    wrapper = mount(<FancyTable {...props}/>);
  });

  describe('rows', () => {
    const rows = () => wrapper.render()
      .find('.table-body')
      .children('.table-row');

    it('should have no rows if no data', () => {
      wrapper = mount(<FancyTable {...mockProps({rows: []})}/>);
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

        expect((props.toggleChecked as any).mock.calls).toHaveLength(1);
        expect((props.toggleChecked as any).mock.calls[0][0])
          .toEqual({name: 'Ryan', data: {foo: 1, bar: 2, baz: 3}, checked: true});
      });
    });
  });

  describe('columns', () => {
    const columns = () => wrapper.render()
      .find('.table-head .table-row')
      .children('.column-header');

    it('should have no columns if there is no data', () => {
      wrapper = mount(<FancyTable {...mockProps({columns: []})}/>);
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
    const footer = (column: string) => wrapper.render()
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
  updateRows = jest.fn(),
  updateTotals = jest.fn(),
  toggleChecked = jest.fn(),
  rows = [
    {name: 'Mendel', data: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Rodolfo', data: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Ryan', data: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Jon', data: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Alex', data: {foo: 1, bar: 2, baz: 3}, checked: true}
  ],
  totals = {foo: 5, bar: 10, baz: 15},
  columns = ['foo', 'bar', 'baz']
}): TableProps => ({updateRows, updateTotals, toggleChecked, rows, totals, columns});