import testBrowser from '../mockBrowser';
import {setup, TableData} from '../helpers';

describe('the selectable table', () => {
  const {setupPage, tearDown} = testBrowser();
  let table: TableData;

  beforeEach(async () => {
    table = setup(await setupPage())('selectable');
  });

  afterEach(async () => {
    await tearDown();
  });

  describe('on load', () => {
    describe('the rows', () => {
      it('should default to selected', async () => {
        expect((await table.inputOfType('checkbox', 'checked')).length).toEqual(10);
      });
    });

    describe('the totals', () => {
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

  describe('totals', () => {
    it('should update if a name is unselected', async () => {
      await table.select('Travis');
      expect(await table.contentsOfEach('.total')).toEqual({
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
