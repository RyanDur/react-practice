import {setup, TableData} from '../helpers';
import testBrowser from '../mockBrowser';

describe('the collapsible id', () => {
  const {setupPage, tearDown} = testBrowser();
  let table: TableData;

  beforeEach(async () => {
    table = setup(await setupPage())('collapsible');
  });

  afterEach(async () => {
    await tearDown();
  });

  describe('on load', () => {
    describe('the rows', () => {
      it('should be closed', async () => {
        expect((await table.inputOfType('checkbox', 'checked')).length).toBe(0);
        expect(await table.numberOf('.row-header')).toBe(10);
      });
    });
  });
});
