import {Data, Rows} from '../../core/types';
import {sumColumns, union} from '../helpers';

describe('helpers', () => {

  describe('summing the columns', () => {
    it('should handle empty rows', () => {
      const rows = [{}];
      const columns = ['foo'];
      const aggrigated = sumColumns(rows, columns);
      expect(aggrigated).toEqual({foo: 0});
    });

    it('should handle empty columns', () => {
      const rows = [{bar: 1}];
      const columns = [] as string[];
      const aggregated = sumColumns(rows, columns);
      expect(aggregated).toEqual({});
    });

    it('should handle empty columns and rows', () => {
      const rows = [] as Array<Data<number>>;
      const columns = [] as string[];
      const aggregated = sumColumns(rows, columns);
      expect(aggregated).toEqual({});
    });
  });

  describe('sets', () => {
    describe('Union (a ∪ b)', () => {
      it('should create a set that contains the elements of both set a and set b.', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 3, 2];
        expect(union(arr1, arr2)).toEqual([1, 2, 3, 4]);
      });

      it('should do nothing if first array is empty', () => {
        const arr1 = ([] as number[]);
        const arr2 = [4, 3, 2];
        expect(union(arr1, arr2)).toEqual([4, 3, 2]);
      });

      it('should do nothing if second array is empty', () => {
        const arr1 = [1, 2, 3];
        const arr2 = ([] as number[]);
        expect(union(arr1, arr2)).toEqual([1, 2, 3]);
      });

      it('should do nothing if all arrays are empty', () => {
        const arr1 = ([] as number[]);
        const arr2 = ([] as number[]);
        expect(union(arr1, arr2)).toEqual([]);
      });

      it('should do nothing if first array is null', () => {
        const arr1 = (null as number[]);
        const arr2 = [4, 3, 2];
        expect(union(arr1, arr2)).toEqual([4, 3, 2]);
      });

      it('should do nothing if second array is null', () => {
        const arr1 = [1, 2, 3];
        const arr2 = (null as number[]);
        expect(union(arr1, arr2)).toEqual([1, 2, 3]);
      });

      it('should not have duplicates', () => {
        const arr1 = [4, 4, 4, 4, 4, 4, 4, 4];
        const arr2 = [4, 4, 4, 4, 4, 4, 4, 4, 4];
        expect(union(arr1, arr2)).toEqual([4]);
      });
    });
  });
});
