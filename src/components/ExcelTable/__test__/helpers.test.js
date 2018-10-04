import {
  collectEntries,
  flattenObjects,
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
    {name: 'Mendel', data: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Ryan', data: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Alex', data: {foo: 1, bar: 2, baz: 3}, checked: true}
  ];

  describe('getCheckedRows', () => {
    const updatedRows = updateChecked({name: 'Ryan'}, rows);
    const expected = [{foo: 1, bar: 2, baz: 3}, {foo: 1, bar: 2, baz: 3}];

    const checkedRows = getCheckedRows(updatedRows);
    expect(checkedRows).toEqual(expected);
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

    expect(sumColumns(initialState.rows)).toEqual(expected);
  });

  describe('getRows', () => {
    it('should get the rows', () => {
      const state = {rows: [{data: {foo: 1}}, {data: {bar: 2}}, {data: {baz: 3}}]};
      expect(getRows(state.rows)).toEqual([{foo: 1}, {bar: 2}, {baz: 3}]);
    });
  });
});