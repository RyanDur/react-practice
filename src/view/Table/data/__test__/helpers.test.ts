import {reconcile} from '../helpers';
import {DataResponse, Table} from '../types';

describe('normalizing the data', () => {

  it('should take the data and turn it into a table', () => {
    const currentState: Table = {
      foo: {data: {fip: 4}}
    };

    const newState: DataResponse = {
      data: [{name: 'foo', fip: 3}],
      columnNames: ['fip'],
      rowNames: ['foo']
    };

    expect(reconcile(currentState, newState)).toEqual({
      foo: {data: {fip: 3}}
    });
  });

  it('should take multiple data points and turn it into current state', () => {
    const currentState: Table = {
      foo: {data: {fip: 4, fop: 5}},
      far: {data: {fip: 3, fop: 1}}
    };

    const newState: DataResponse = {
      data: [
        {name: 'foo', fip: 3, fop: 6},
        {name: 'far', fip: 6, fop: 7}
      ],
      columnNames: ['fip', 'fop'],
      rowNames: ['foo', 'far']
    };

    expect(reconcile(currentState, newState)).toEqual({
      foo: {data: {fip: 3, fop: 6}},
      far: {data: {fip: 6, fop: 7}}
    });
  });

  it('should remove the row from the current ste if it is not in the new rows', () => {
    const currentState: Table = {
      foo: {data: {fip: 4, fop: 5}},
      far: {data: {fip: 3, fop: 1}}
    };

    const newState: DataResponse = {
      data: [{name: 'foo', fip: 3, fop: 6}],
      rowNames: ['foo'],
      columnNames: ['fip', 'fop']
    };

    expect(reconcile(currentState, newState)).toEqual({
      foo: {data: {fip: 3, fop: 6}}
    });
  });

  it('should remove the column that are no longer reflected in the new data', () => {
    const current: Table = {
      foo: {data: {fip: 4, fop: 5}},
      far: {data: {fip: 3, fop: 1}}
    };

    const data: DataResponse = {
      data: [
        {name: 'foo', fip: 3, fop: 6},
        {name: 'far', fip: 6}
      ],
      rowNames: ['fip', 'fop'],
      columnNames: ['foo', 'far']
    };

    expect(reconcile(current, data)).toEqual({
      foo: {data: {fip: 3, fop: 6}},
      far: {data: {fip: 6}}
    });
  });

  it('should handle undefined current state', () => {
    const current: Table = {
      foo: {data: {fip: 4}}
    };

    expect(reconcile(current, undefined)).toEqual({
      foo: {data: {fip: 4}}
    });
  });

  it('should handle undefined new state', () => {
    const newState: DataResponse = {
      data: [
        {name: 'foo', fip: 3, fop: 6},
        {name: 'far', fip: 16}
      ],
      rowNames: ['foo', 'far'],
      columnNames: ['fip', 'fop']
    };

    expect(reconcile(undefined, newState)).toEqual({
      foo: {data: {fip: 3, fop: 6}},
      far: {data: {fip: 16}}
    });
  });

  it('should store the sub-rows and sum them to create the current row', () => {
    const newState: DataResponse = {
      data: [
        {name: 'foo', fip: 3, fop: 6},
        {name: 'foo', fip: 3, fop: 6},
        {name: 'far', fip: 16}
      ],
      rowNames: ['foo', 'far'],
      columnNames: ['fip', 'fop']
    };

    expect(reconcile(undefined, newState)).toEqual({
      foo: {
        data: {fip: 6, fop: 12}, subRows: [
          {fip: 3, fop: 6},
          {fip: 3, fop: 6}]
      },
      far: {data: {fip: 16}}
    });
  });
});
