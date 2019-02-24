import {mount} from 'enzyme';
import * as React from 'react';
import {Selectable, ManuallyDefinedProps} from '../Selectable';
import {SelectableProps} from '../store/connector';

describe('selectable table', () => {
  const mockProps: () => SelectableProps & ManuallyDefinedProps = () => ({
    defaultSelected: false,
    columns: ['foo', 'bar'],
    rows: [{name: 'Caren', data: {foo: 1, bar: 2}, selected: false}],
    toggleSelect: jest.fn(),
    totals: {}
  });

  it('should update the selection if default is true', () => {
    const props = mockProps();
    mount(<Selectable{...{...props,
      rows: [{name: 'Ryan', data: {foo: 1, bar: 2}, selected: false}],
      defaultSelected: true
    }} />);

    expect(props.toggleSelect).toBeCalledTimes(1);
    expect(props.toggleSelect).toBeCalledWith('Ryan');
  });

  it('should not update the selection if default is false', () => {
    const props = mockProps();
    mount(<Selectable {...props}/>);

    expect(props.toggleSelect).toBeCalledTimes(0);
  });

  it('should not update the selection if default is not set', () => {
    const props = mockProps();
    mount(<Selectable{...{...props, defaultSelected: undefined}} />);

    expect(props.toggleSelect).toBeCalledTimes(0);
  });

  it('should update the selection when selected', () => {
    const props = mockProps();
    const selectable = mount(<Selectable{...props} />);

    selectable.find('#Caren-checkbox').simulate('change');

    expect(props.toggleSelect).toBeCalledTimes(1);
    expect(props.toggleSelect).toBeCalledWith('Caren');
  });
});
