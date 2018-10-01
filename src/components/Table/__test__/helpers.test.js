import {
  collectEntries,
  flattenObjects, getKeyValues,
  sum,
  sumColumns,
  transposeRows
} from '../helpers';
import {initialState} from './initialState';

describe('helpers', () => {
  const rows = [
    {foo: 1, bar: 2, baz: 3},
    {foo: 1, bar: 2, baz: 3},
    {foo: 1, bar: 2, baz: 3}
  ];

  describe('transpose', () => {
    it('should turn columns into rows', () => {
      const expected = [
        [['foo', 1], ['foo', 1], ['foo', 1]],
        [['bar', 2], ['bar', 2], ['bar', 2]],
        [['baz', 3], ['baz', 3], ['baz', 3]]
      ];

      expect(transposeRows(rows)).toEqual(expected);
    });
  });

  describe('collectEntries', () => {
    it('should collect each entry into key value pairs', () => {
      const totals = transposeRows(rows)
        .map(collectEntries(sum));

      expect(totals).toEqual([{foo: 3}, {bar: 6}, {baz: 9}]);
    });
  });

  describe('flattenObjects', () => {
    it('should flatten a list of objects', () => {
      const totals = transposeRows(rows)
        .map(collectEntries(sum))
        .reduce(flattenObjects, {});

      expect(totals).toEqual({foo: 3, bar: 6, baz: 9});
    });
  });

  describe('sumColumns', () => {
    it('should sum the columns', () => {
      const totals = sumColumns(rows);
      expect(totals).toEqual({foo: 3, bar: 6, baz: 9});
    });
  });

  describe('getKeyValues', () => {
    it('should get the key value pairs', () => {
      const row = {'Rodolfo': [{foo: 3, bar: 6, baz: 9}]};
      const kv = getKeyValues(row);

      expect(kv.key).toBe('Rodolfo');
      expect(kv.value).toEqual([{foo: 3, bar: 6, baz: 9}]);
    });
  });

  describe('summing up the table data', () => {
    const expected = {
      foo: 10,
      bar: 20,
      baz: 30,
      bob: 40,
      far: 50,
      faz: 60,
      fop: 70,
      coo: 80,
      cor: 90,
      cop: 100
    };

    expect(sumColumns(initialState.data
      .map(getKeyValues)
      .map(foo => foo.value))).toEqual(expected);
  });
});