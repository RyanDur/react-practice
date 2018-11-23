import {Page} from 'puppeteer';
import testBrowser from '../mockBrowser';
import {table} from './helpers';

describe('the table flow', () => {
  const {setup, tearDown} = testBrowser({});
  let page: Page;
  const columns: string[] = ['bar', 'baz', 'bob', 'coo', 'cop', 'cor', 'far', 'faz', 'foo', 'fop'];

  afterEach(async () => {
    await tearDown()
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

      it('should allow a user to add a column to the right of an existing column', async () => {
        const menu = await table(page).column('bar').menu();
        await menu.select('another');
        await menu.addRight();
        const newColumns: string[] = [
          'bar',
          'another',
          'baz',
          'bob',
          'coo',
          'cop',
          'cor',
          'far',
          'faz',
          'foo',
          'fop'
        ];
        const columnHeaders = await table(page).valuesOf('.column-header .value');

        expect(columnHeaders).toEqual(newColumns);
      }, 10000);

      it('should allow a user to add a column to the left of an existing column', async () => {
        const menu = await table(page).column('bar').menu();
        await menu.select('another');
        await menu.addLeft();
        const newColumns: string[] = [
          'another',
          'bar',
          'baz',
          'bob',
          'coo',
          'cop',
          'cor',
          'far',
          'faz',
          'foo',
          'fop'
        ];
        const columnHeaders = await table(page).valuesOf('.column-header .value');

        expect(columnHeaders).toEqual(newColumns);
      }, 10000);

      xit('should allow a user to remove a column', () => {

      });

      xit('should allow a user to add a column when none exist', () => {

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


      xit('should allow a user to add a column to the right of an existing column', () => {

      });

      xit('should allow a user to add a column to the left of an existing column', () => {

      });

      xit('should allow a user to remove a column', () => {

      });

      xit('should allow a user to add a column when none exist', () => {

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
        })
      });
    });
  });
});