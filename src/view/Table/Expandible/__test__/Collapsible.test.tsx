import {mount} from 'enzyme';
import * as React from 'react';
import {CollapsibleRow, Row} from '../../element';
import {Expandable, ExpandableProps} from '../Expandable';

describe('expandable', () => {

  const collapsible = (props: ExpandableProps) => mount(<Expandable {...props}/>);

  it('should default to closed', () => {
    expect(collapsible(mockProps()).find(Row).length).toBe(4);
  });

  it('should only have as many expandable rows as are needed', () => {
    const rows = [
      {name: 'Travis', selected: false, data: {foo: 1, bar: 2}, subRows: [{foo: 0, bar: 2}, {foo: 1, bar: 0}]},
      {name: 'Chelsea', selected: false, data: {foo: 1, bar: 2}, subRows: [{foo: 0, bar: 2}, {foo: 1, bar: 0}]},
      {name: 'Caren', selected: false, data: {foo: 2, bar: 3}}
    ];
    expect(collapsible(mockProps({rows}))
      .find(CollapsibleRow).length).toBe(2);
  });

  it('should be able to expand a row', () => {
    const rows = [
      {name: 'Travis', selected: false, data: {foo: 1, bar: 2}, subRows: [{foo: 0, bar: 2}, {foo: 1, bar: 0}]},
      {name: 'Caren', selected: false, data: {foo: 2, bar: 3}}
    ];
    expect(collapsible(mockProps({rows}))
      .find(Row).length).toBe(2);

    const nextRows = [
      {
        name: 'Travis', selected: true, data: {foo: 1, bar: 2}, subRows: [
          {foo: 0, bar: 2},
          {foo: 1, bar: 2},
          {foo: 1, bar: 0}
        ]
      },
      {name: 'Caren', selected: false, data: {foo: 2, bar: 3}}
    ];
    expect(collapsible(mockProps({rows: nextRows}))
      .find(Row).length).toBe(5);
  });

  it('should allow a user to select a row', () => {
    const props = mockProps();
    collapsible(props).find('#Travis-checkbox-expandable')
      .simulate('change');

    expect(props.toggleOpen).toHaveBeenCalledWith('Travis');
  });
});

const mockProps = (
  {
    columns = ['foo', 'bar'],
    rows = [
      {
        name: 'Travis',
        selected: false,
        data: {foo: 1, bar: 2},
        subRows: [{foo: 0, bar: 2}, {foo: 1, bar: 0}]
      },
      {name: 'Caren', selected: false, data: {foo: 2, bar: 3}},
      {name: 'Mike', selected: false, data: {foo: 2, bar: 3}},
      {name: 'Joey', selected: false, data: {foo: 2, bar: 3}}
    ],
    totals = {foo: 2, bar: 3},
    toggleOpen = jest.fn()
  } = {}): ExpandableProps => ({columns, rows, totals, toggleOpen});
