import {
  collectEntries,
  flattenObjects,
  getRowsData,
  sumEntry,
  sumColumns,
  transposeRows,
  updateChecked,
  getCheckedRowsData
} from '../helpers';
import {initialState} from './initialState';

describe('helpers', () => {
  const rows = [
    {name: 'Mendel', data: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Ryan', data: {foo: 1, bar: 2, baz: 3}, checked: true},
    {name: 'Alex', data: {foo: 1, bar: 2, baz: 3}, checked: true}
  ];

  describe('getCheckedRowsData', () => {
    it('should get the rows that are checked', () => {
      const updatedRows = updateChecked({name: 'Ryan', data: {foo: 1, bar: 2, baz: 3}, checked: true}, rows);
      const expected = [{foo: 1, bar: 2, baz: 3}, {foo: 1, bar: 2, baz: 3}];

      const checkedRows = getCheckedRowsData(updatedRows);
      expect(checkedRows).toEqual(expected);
    });
  });

  describe('transpose', () => {
    it('should turn columns into rows', () => {
      const expected = [
        [['foo', 1], ['foo', 1], ['foo', 1]],
        [['bar', 2], ['bar', 2], ['bar', 2]],
        [['baz', 3], ['baz', 3], ['baz', 3]]
      ];

      expect(transposeRows(getCheckedRowsData(rows))).toEqual(expected);
    });
  });

  describe('collectEntries', () => {
    it('should collect each entry into key value pairs', () => {
      const totals = transposeRows(getRowsData(rows))
        .map(collectEntries(sumEntry));

      expect(totals).toEqual([{foo: 3}, {bar: 6}, {baz: 9}]);
    });
  });

  describe('flattenObjects', () => {
    it('should flatten a list of objects', () => {
      const totals = transposeRows(getRowsData(rows))
        .map(collectEntries(sumEntry))
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

  describe('getRowsData', () => {
    it('should get the rows', () => {
      const state = {
        rows: [
          {data: {foo: 1}, name: '', checked: false},
          {data: {bar: 2}, name: '', checked: false},
          {data: {baz: 3}, name: '', checked: false}]
      };
      expect(getRowsData(state.rows)).toEqual([{foo: 1}, {bar: 2}, {baz: 3}]);
    });
  });
});