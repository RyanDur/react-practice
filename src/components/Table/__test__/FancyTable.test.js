import FancyTable from '../FancyTable';
import {mount} from 'enzyme';
import React from 'react';

describe('Fancy Table', () => {
  let wrapper = {};

  beforeEach(() => {
    wrapper = mount(
      <FancyTable getData={jest.fn()} getTotals={jest.fn()}/>
    );
  });

  describe('rows', () => {
    const rows = () => wrapper.render()
      .find('.table-body')
      .children('.table-row');

    it('should have no rows if no data', () => {
      expect(rows()).toHaveLength(0);
    });

    it('should have the same number of rows as there are in data', () => {
      wrapper.setProps({
        data: [
          {'Mendel': {foo: 1, bar: 2, baz: 3}},
          {'Rodolfo': {foo: 1, bar: 2, baz: 3}},
          {'Ryan': {foo: 1, bar: 2, baz: 3}},
          {'Jon': {foo: 1, bar: 2, baz: 3}},
          {'Alex': {foo: 1, bar: 2, baz: 3}}
        ]
      });

      expect(rows()).toHaveLength(5);
    });

    it('should set the name of the row', () => {
      wrapper.setProps({data: [{'Mendel': {foo: 1, bar: 2, baz: 3}}]});
      expect(rows().find('.table-data').first().text()).toBe('Mendel');
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
      const row = {'Shakey': {foo: 0, bar: 0, baz: 0}};
      wrapper.setProps({data: [row]});

      expect(columns()).toHaveLength(3);
    });

    it('should name the columns after the keys in the row', () => {
      wrapper.setProps({data: [{'Anna': {foo: 0, bar: 0, baz: 0, bob: 0}}]});

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
      wrapper.setProps({
        data: [
          {'Harrison': {foo: 1, bar: 2, baz: 3, bob: 4}},
          {'Alex': {foo: 1, bar: 2, baz: 3, bob: 4}},
          {'Krishna': {foo: 1, bar: 2, baz: 3, bob: 4}},
          {'Mohammad': {foo: 1, bar: 2, baz: 3, bob: 4}}
        ],
        totals: {foo: 4, bar: 8, baz: 12, bob: 16}
      });

      expect(footer('foo').text()).toEqual('4');
      expect(footer('bar').text()).toEqual('8');
      expect(footer('baz').text()).toEqual('12');
      expect(footer('bob').text()).toEqual('16');
    });
  });
});