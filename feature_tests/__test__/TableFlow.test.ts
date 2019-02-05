import {Page} from 'puppeteer';
import testBrowser from '../mockBrowser';
import {Menu, table} from './helpers';

xdescribe('the table flow', () => {
  const {setup, tearDown} = testBrowser({});
  let page: Page;
  const columns: string[] = ['bar', 'baz', 'bob', 'coo', 'cop', 'cor', 'far', 'faz', 'foo', 'fop'];

  afterEach(async () => {
    await tearDown();
  });

  describe('with data', () => {
    beforeEach(async () => {
      page = await setup();
    });

    describe('the columns', () => {
      it('should have default titles', async () => {
        const columnHeaders = await table(page).valuesOf('.column-header .value');

        expect(columnHeaders).toEqual(columns);
      });

      describe('menu', () => {
        let menu: Menu;
        beforeEach(async () => {
          menu = await table(page).column('bar').menu();
          await menu.open();
        });

        describe('adding', () => {
          beforeEach(async () => {
            await menu.select('yet_another');
          });

          it('should allow to the right', async () => {
            await menu.addRight();
            await menu.close();
            const [head, ...tail] = columns;
            const newColumns: string[] = [head, 'yet_another', ...tail];
            const columnHeaders = await table(page).valuesOf('.column-header .value');

            expect(columnHeaders).toEqual(newColumns);
          });

          it('should allow to the left', async () => {
            await menu.addLeft();
            await menu.close();
            const newColumns: string[] = ['yet_another', ...columns];
            const columnHeaders = await table(page).valuesOf('.column-header .value');

            expect(columnHeaders).toEqual(newColumns);
          });
        });

        describe('removing', () => {
          beforeEach(async () => {
            await menu.select('baz');
          });

          it('should allow a user to remove a column', async () => {
            await menu.remove();
            await menu.close();
            const [first, , ...rest] = columns;
            const newColumns: string[] = [first, ...rest];
            const columnHeaders = await table(page).valuesOf('.column-header .value');

            expect(columnHeaders).toEqual(newColumns);
          });

          it('should not allow a user to remove the column they are on', async () => {
            await menu.select('bar');
            await menu.remove();
            await menu.close();
            const [first, , ...rest] = columns;
            const newColumns: string[] = [first, ...rest];
            const columnHeaders = await table(page).valuesOf('.column-header .value');

            expect(columnHeaders).toEqual(newColumns);
          });
        });
      });
    });

    describe('the rows', () => {
      const rowNames: string[] = ['Anna', 'Travis', 'Mendel', 'Harrison', 'Alex', 'Jordan', 'Mike', 'Krishna', 'Mohammad', 'Paulina'];

      describe('headers', () => {
        it('should have default names', async () => {
          const rowHeaders = await table(page).valuesOf('.row-header');

          expect(rowHeaders).toEqual(rowNames);
        });

        describe('checkbox', () => {
          it('should default to checked', async () => {
            const checks: boolean[] = await table(page).checkboxesOf('.row-header').checked();

            checks.forEach(check => expect(check).toBeTruthy());
          });
        });
      });
    });

    describe('the totals', () => {
      it('should be the same length as their are columns', async () => {
        expect((await table(page).lengthOf('.total'))).toBe(columns.length);
      });

      it('should sum the columns', async () => {
        expect(await table(page).contentOf('.total')).toEqual({
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

      it('should update the total row if a name is unchecked', async () => {
        const getFirstTotalValue = () =>
          page.$eval('.total[data-column="bar"]', elem => elem.textContent);

        const before = await getFirstTotalValue();
        expect(before).toBe('10');

        await page.$('#row-check-0')
          .then(elem => elem.click());

        const after = await getFirstTotalValue();
        expect(after).toBe('9');
      });
    });
  });

  describe('without data', () => {
    beforeEach(async () => {
      page = await setup([]);
    });

    describe('the columns', () => {
      it('should have default titles', async () => {
        const columnHeaders = await table(page).valuesOf('.column-header .value');

        expect(columnHeaders.sort()).toEqual(columns.sort());
      });

      describe('menu', () => {
        let menu: Menu;
        beforeEach(async () => {
          menu = await table(page).column('bar').menu();
        });

        describe('adding', () => {
          beforeEach(async () => {
            await menu.select('another');
          });

          it('should allow to the right', async () => {
            await menu.addRight();
            const [head, ...tail] = columns;
            const newColumns: string[] = [head, 'another', ...tail];
            const columnHeaders = await table(page).valuesOf('.column-header .value');

            expect(columnHeaders).toEqual(newColumns);
          });

          it('should allow to the left', async () => {
            await menu.addLeft();
            const newColumns: string[] = ['another', ...columns];
            const columnHeaders = await table(page).valuesOf('.column-header .value');

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
        expect(await table(page).lengthOf('.total')).toBe(columns.length);
      });

      it('should default to dashes', async () => {
        expect(await table(page).contentOf('.total')).toEqual({
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
