import {
  collectEntries,
  flattenObjects,
  getKeyValues,
  getRows,
  isEmpty,
  sum,
  sumColumns,
  transposeRows,
  updateChecked,
  getCheckedRows
} from '../helpers';
import {initialState} from './initialState';

describe('helpers', () => {
  const rows = [
    {name: 'Mendel', row: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Ryan', row: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Alex', row: {foo: 1, bar: 2, baz: 3}, checked: true}
  ];

  describe('getCheckedRows', () => {
    const updatedRows = updateChecked({name: 'Ryan'}, rows);
    const expected = [{foo: 1, bar: 2, baz: 3}, {foo: 1, bar: 2, baz: 3}];

    expect(getCheckedRows(updatedRows)).toEqual(expected);
  });

  describe('transpose', () => {
    it('should turn columns into rows', () => {
      const expected = [
        [['foo', 1], ['foo', 1], ['foo', 1]],
        [['bar', 2], ['bar', 2], ['bar', 2]],
        [['baz', 3], ['baz', 3], ['baz', 3]]
      ];

      expect(transposeRows(getCheckedRows(rows))).toEqual(expected);
    });
  });

  describe('collectEntries', () => {
    it('should collect each entry into key value pairs', () => {
      const totals = transposeRows(getRows(rows))
        .map(collectEntries(sum));

      expect(totals).toEqual([{foo: 3}, {bar: 6}, {baz: 9}]);
    });
  });

  describe('flattenObjects', () => {
    it('should flatten a list of objects', () => {
      const totals = transposeRows(getRows(rows))
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

  describe('summing up the reducer data', () => {
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

    const actual = sumColumns(initialState.data);
    expect(actual).toEqual(expected);
  });

  describe('isEmpty', () => {
    it('should know if an object is empty', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should know if an object is not empty', () => {
      expect(isEmpty({foo: 1})).toBe(false);
    });
  });

  describe('getRows', () => {
    it('should get the rows', () => {
      const state = {data: [{row: {foo: 1}}, {row: {bar: 2}}, {row: {baz: 3}}]};
      expect(getRows(state.data)).toEqual([{foo: 1}, {bar: 2}, {baz: 3}]);
    });
  });
});