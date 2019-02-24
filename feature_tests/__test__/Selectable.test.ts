import testBrowser from '../mockBrowser';
import {setup, TableData} from './helpers';

describe('the selectable table', () => {
  const {setupPage, tearDown} = testBrowser();
  const columns: string[] = ['bar', 'baz', 'bob', 'coo', 'cop', 'cor', 'far', 'faz', 'foo', 'fop', 'another', 'yet_another'];
  let table: TableData;

  beforeEach(async () => {
    table = setup(await setupPage())('selectable');
  });

  afterEach(async () => {
    await tearDown();
  });

  describe('columns', () => {
    it('should have default titles', async () => {
      expect(await table.valuesOf('.header.title')).toEqual(columns);
    });
  });

  describe('row', () => {
    const rowNames: string[] = ['Anna', 'Travis', 'Mendel', 'Harrison', 'Alex', 'Jordan', 'Mike', 'Krishna', 'Mohammad', 'Paulina'];

    describe('headers', () => {
      it('should have names', async () => {
        expect(await table.valuesOf('.row-header')).toEqual(rowNames);
      });

      it('should default to selected', async () => {
        expect((await table.inputOfType('checkbox', 'checked')).length).toEqual(rowNames.length);
      });
    });
  });

  describe('the totals', () => {
    it('should be the same length as their are columns', async () => {
      expect((await table.numberOf('.total'))).toBe(columns.length);
    });

    it('should sum the columns', async () => {
      expect(await table.contentsOf('.total')).toEqual({
        bar: '10',
        baz: '20',
        bob: '30',
        coo: '40',
        cop: '50',
        cor: '60',
        far: '70',
        faz: '80',
        foo: '90',
        fop: '100',
        another: '110',
        yet_another: '120'
      });
    });

    it('should update if a name is unchecked', async () => {
      await table.select('Travis');
      expect(await table.contentsOf('.total')).toEqual({
        bar: '9',
        baz: '18',
        bob: '27',
        coo: '36',
        cop: '45',
        cor: '54',
        far: '63',
        faz: '72',
        foo: '81',
        fop: '90',
        another: '99',
        yet_another: '108'
      });
    });
  });
});
