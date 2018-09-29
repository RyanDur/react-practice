import FancyTable from '../FancyTable';
import {mount} from 'enzyme';
import React from 'react';

describe('Fancy Table', () => {
  let wrapper = mount(<FancyTable/>);
  beforeEach(() => {
    wrapper = mount(<FancyTable/>);
  });

  xdescribe('rows', () => {
    xit('should be able to create a row', () => {
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
});