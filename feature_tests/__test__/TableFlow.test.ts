import testBrowser from '../mockBrowser';
import {Menu, setup, TableData} from './helpers';

describe('the tables', () => {
  const {setupPage, tearDown} = testBrowser({
    headless: false
  });
  const columns: string[] = ['bar', 'baz', 'bob', 'coo', 'cop', 'cor', 'far', 'faz', 'foo', 'fop', 'another', 'yet_another'];

  afterEach(async () => {
    await tearDown();
  });

  describe('the selectable table', () => {
    describe('with data', () => {
      let table: TableData;
      beforeEach(async () => {
        table = setup(await setupPage())('#selectable');
      });

      describe('columns', () => {
        it('should have default titles', async () => {
          expect(await table.valuesOf('.column-header')).toEqual(columns);
        });
      });

      describe('row', () => {
        const rowNames: string[] = ['Anna', 'Travis', 'Mendel', 'Harrison', 'Alex', 'Jordan', 'Mike', 'Krishna', 'Mohammad', 'Paulina'];

        describe('headers', () => {
          it('should have names', async () => {
            expect(await table.valuesOf('.row-header')).toEqual(rowNames);
          });

          describe('checkbox', () => {
            it('should default to selected', async () => {
              expect((await table.inputOfType('checkbox', 'checked')).length).toEqual(rowNames.length);
            });
          });
        });
      });

      describe('the totals', () => {
        it('should be the same length as their are columns', async () => {
          expect((await table.lengthOf('.total'))).toBe(columns.length);
        });

        it('should sum the columns', async () => {
          expect(await table.contentOf('.total')).toEqual({
            bar: '10',
            baz: '20',
            bob: '30',
            coo: '40',
            cop: '50',
            cor: '60',
            far: '70',
            faz: '80',
            foo: '90',
            fop: '100'
          });
        });

        // it('should update the total row if a name is unchecked', async () => {
        //   const getFirstTotalValue = () =>
        //     page.$eval('.total[data-column="bar"]', elem => elem.textContent);
        //
        //   const before = await getFirstTotalValue();
        //   expect(before).toBe('10');
        //
        //   await page.$('#row-check-0')
        //     .then(elem => elem.click());
        //
        //   const after = await getFirstTotalValue();
        //   expect(after).toBe('9');
        // });
      });
    });

    describe('without data', () => {
      let table: TableData;
      beforeEach(async () => {
        table = setup(await setupPage([]))('#selectable');
      });

      describe('the columns', () => {
        it('should have default titles', async () => {
          const columnHeaders = await table.valuesOf('.column-header .value');

          expect(columnHeaders.sort()).toEqual(columns.sort());
        });

        describe('menu', () => {
          let menu: Menu;
          beforeEach(async () => {
            menu = await table.column('bar').menu();
          });

          describe('adding', () => {
            beforeEach(async () => {
              await menu.select('another');
            });

            it('should allow to the right', async () => {
              await menu.addRight();
              const [head, ...tail] = columns;
              const newColumns: string[] = [head, 'another', ...tail];
              const columnHeaders = await table.valuesOf('.column-header .value');

              expect(columnHeaders).toEqual(newColumns);
            });

            it('should allow to the left', async () => {
              await menu.addLeft();
              const newColumns: string[] = ['another', ...columns];
              const columnHeaders = await table.valuesOf('.column-header .value');

              expect(columnHeaders).toEqual(newColumns);
            });
          });

          xit('should allow a user to remove a column', () => {
            pending();
          });

          xit('should allow a user to add a column when none exist', () => {
            pending();
          });
        });
      });

      describe('the totals', () => {
        it('should be the same length as their are columns', async () => {
          expect(await table.lengthOf('.total')).toBe(columns.length);
        });

        it('should default to dashes', async () => {
          expect(await table.contentOf('.total')).toEqual({
            foo: '—',
            bar: '—',
            baz: '—',
            bob: '—',
            far: '—',
            faz: '—',
            fop: '—',
            coo: '—',
            cor: '—',
            cop: '—'
          });
        });
      });
    });
  });

});
