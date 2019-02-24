import testBrowser from '../mockBrowser';
import {setup, TableData} from './helpers';

describe('the base table', () => {
  const {setupPage, tearDown} = testBrowser();
  let table: TableData;

  beforeEach(async () => {
    table = setup(await setupPage())('base');
  });

  afterEach(async () => {
    await tearDown();
  });

  describe('totals', () => {
    it('should be the sum of the columns', async () => {
      expect(await table.contentsOfEach('.total')).toEqual({
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
  });
});
