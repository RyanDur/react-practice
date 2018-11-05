import {
  collectEntries,
  flattenObjects,
  getCheckedRowsData,
  getRowsData,
  normalize,
  sumColumns,
  sumEntry,
  transposeRows,
  updateChecked
} from '../helpers';
import {Data} from "../TableState";
import {initialTableState} from "./initialState";

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

    expect(sumColumns(initialTableState.rows)).toEqual(expected);
  });

  describe('getRowsData', () => {
    it('should get the rows', () => {
      const state = {
        rows: [
          {data: {foo: 1}, name: '', checked: false},
          {data: {foo: 2}, name: '', checked: false},
          {data: {foo: 3}, name: '', checked: false}]
      };
      expect(getRowsData(state.rows)).toEqual([{foo: 1}, {foo: 2}, {foo: 3}]);
    });
  });

  describe('normalizing data', () => {
    describe('initial state', () => {
      it('should normalize the data it is given', () => {
        const state: Data[] = [
          {foo: 1, name: 'one'},
          {foo: 2, name: 'two'},
          {foo: 3, name: 'three'}];
        const expected = [
          {data: {foo: 1}, name: 'one', checked: true},
          {data: {foo: 2}, name: 'two', checked: true},
          {data: {foo: 3}, name: 'three', checked: true}];

        expect(normalize(state, [], true).rows)
          .toEqual(expected)
      });
    });

    describe('with old state', () => {
      it('should incorporate the unknown data into then new', () => {
        const newState: Data[] = [
          {foo: 1, bar: 4, name: 'one'},
          {foo: 2, bar: 5, name:'two'},
          {foo: 3, bar: 6, name: 'three'}];
        const oldState = [
          {data: {foo: 3, bar: 6}, name: 'one', checked: true},
          {data: {foo: 4, bar: 7}, name: 'two', checked: true},
          {data: {foo: 5, bar: 8}, name: 'three', checked: true}];

        const expected = {
          rows: [
            {data: {foo: 1, bar: 4}, name: 'one', checked: true},
            {data: {foo: 2, bar: 5}, name: 'two', checked: true},
            {data: {foo: 3, bar: 6}, name: 'three', checked: true}],
          totals: {foo: 6, bar: 15}
        };

        expect(normalize(newState, oldState, true)).toEqual(expected);
      });

      it('should not override the check', () => {
        const newState: Data[] = [
          {foo: 1, bar: 4, name: 'one'},
          {foo: 2, bar: 5, name:'two'},
          {foo: 3, bar: 6, name: 'three'}];
        const oldState = [
          {data: {foo: 3, bar: 6}, name: 'one', checked: true},
          {data: {foo: 4, bar: 7}, name: 'two', checked: false},
          {data: {foo: 5, bar: 8}, name: 'three', checked: true}];

        const expected = {
          rows: [
            {data: {foo: 1, bar: 4}, name: 'one', checked: true},
            {data: {foo: 2, bar: 5}, name: 'two', checked: false},
            {data: {foo: 3, bar: 6}, name: 'three', checked: true}],
          totals: {foo: 4, bar: 10}
        };

        expect(normalize(newState, oldState, true)).toEqual(expected)
      });
    });
  });
});