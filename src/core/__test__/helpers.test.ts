import {normalize} from '../helpers';
import {Rows} from '../types';
import {ResponseData} from '../types/DataResponse';

describe('normalizing the data', () => {

  it('should take the data and turn it into a row', () => {
    const row: Rows = {
      foo: {fip: 4}
    };

    const data: ResponseData[] = [{
      name: 'foo',
      fip: 3
    }];

    expect(normalize(row, data)).toEqual({
      foo: {
        name: 'foo',
        data: {fip: 3}
      }
    });
  });

  it('should take multiple data points and turn it into current state', () => {
    const row: Rows = {
      foo: {fip: 4, fop: 5},
      far: {fip: 3, fop: 1}
    };

    const data = [
      {name: 'foo', fip: 3, fop: 6},
      {name: 'far', fip: 6, fop: 7}
    ];

    expect(normalize(row, data)).toEqual({
      foo: {
        name: 'foo',
        data: {fip: 3, fop: 6}
      },
      far: {
        name: 'far',
        data: {fip: 6, fop: 7}
      }
    });
  });

  it('should remove the row from the current ste if it is not in the new rows', () => {
    const currentState: Rows = {
      foo: {fip: 4, fop: 5},
      far: {fip: 3, fop: 1}
    };

    const newData = [
      {name: 'foo', fip: 3, fop: 6}
    ];

    expect(normalize(currentState, newData)).toEqual({
      foo: {
        name: 'foo',
        data: {fip: 3, fop: 6}
      }
    });
  });

  it('should remove the column that are no longer reflected in the new data', () => {
    const current: Rows = {
      foo: {fip: 4, fop: 5},
      far: {fip: 3, fop: 1}
    };

    const data = [
      {name: 'foo', fip: 3, fop: 6},
      {name: 'far', fip: 6}
    ];

    expect(normalize(current, data)).toEqual({
      foo: {
        name: 'foo',
        data: {fip: 3, fop: 6}
      },
      far: {
        name: 'far',
        data: {fip: 6}
      }
    });
  });

  it('should handle undefined current state', () => {
    const current: Rows = {
      foo: {fip: 4}
    };

    expect(normalize(current, undefined)).toEqual({
      foo: {
        name: 'foo',
        data: {fip: 4}
      }
    });
  });

  it('should handle undefined new state', () => {
    const data = [
      {name: 'foo', fip: 3, fop: 6},
      {name: 'far', fip: 16}
    ];

    expect(normalize(undefined, data)).toEqual({
      foo: {
        name: 'foo',
        data: {fip: 3, fop: 6}
      },
      far: {
        name: 'far',
        data: {fip: 16}
      }
    });
  });
});
