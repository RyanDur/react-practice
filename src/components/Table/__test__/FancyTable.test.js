import FancyTable from '../FancyTable';
import {mount} from 'enzyme';
import React from 'react';

describe('Fancy Table', () => {
  let wrapper = {};

  beforeEach(() => {
    wrapper = mount(<FancyTable/>);
  });

  describe('rows', () => {
    const rows = () => wrapper.render()
      .find('.table-body')
      .children('.table-row');

    it('should have no rows if no data', () => {
      expect(rows()).toHaveLength(0);
    });

    it('should have the same number of rows as there are in data', () => {
      const row = {foo: 1, bar: 2, baz: 3};
      wrapper.setProps({data: [row, row, row, row, row]});

      expect(rows()).toHaveLength(5);
    });
  });

  describe('columns', () => {
    const columns = () => wrapper.render()
      .find('.table-head .table-row')
      .children('.column-header');

    it('should have no columns if there is no data', () => {
      expect(columns()).toHaveLength(0);
    });

    it('should have the same columns as there are keys in a row', () => {
      const row = {foo: 0, bar: 0, baz: 0};
      wrapper.setProps({data: [row]});

      expect(columns()).toHaveLength(3);
    });

    it('should name the columns after the keys in the row', () => {
      wrapper.setProps({data: [{foo: 0, bar: 0, baz: 0, bob: 0}]});

      expect(columns().eq(0).text()).toBe('foo');
      expect(columns().eq(1).text()).toBe('bar');
      expect(columns().eq(2).text()).toBe('baz');
      expect(columns().eq(3).text()).toBe('bob');
    });
  });

  describe('Totals', () => {
    const footer = (column) => wrapper.render()
      .find('.table-footer .table-row')
      .find(`.table-data[data-column="${column}"]`);

    it('should sum up columns', () => {
      const row1 = {foo: 1, bar: 2, baz: 3, bob: 4};
      const row2 = {foo: 1, bar: 2, baz: 3, bob: 4};
      const row3 = {foo: 1, bar: 2, baz: 3, bob: 4};
      const row4 = {foo: 1, bar: 2, baz: 3, bob: 4};

      wrapper.setProps({data: [row1, row2, row3, row4]});

      expect(footer('foo').text()).toEqual('4');
      expect(footer('bar').text()).toEqual('8');
      expect(footer('baz').text()).toEqual('12');
      expect(footer('bob').text()).toEqual('16');
    });
  });
});