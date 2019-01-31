import {mount} from 'enzyme';
import * as React from 'react';
import {Dropdown} from '../Dropdown';
import {Option} from '../Option';

describe('dropdown', () => {
  const list: Option[] = [
    {value: 'foo', title: 'bar'},
    {value: 'face', title: 'your'}
  ];
  const dropdown = mount(<Dropdown
    options={list}
    selectionFormat={(option) => option.title}>
    {list.map((option) => option.title)}
  </Dropdown>);

  it('should show the first option', () => {
    expect(dropdown.find('.selected').text()).toBe('bar');
  });

  it('should have as many options as there are in the list', () => {
    expect(dropdown.find('.option')).toHaveLength(2);
  });

  it('should change the header title to the selected option', () => {
    dropdown.find('.option:last-child').simulate('click');
    expect(dropdown.find('.selected').text()).toBe('your');
  });

  it('should show the list of options when the header is clicked', () => {
    dropdown.find('.selected').simulate('click');
    expect(dropdown.find('.options').hasClass('hide')).toBe(false);
  });
});