import {Page} from 'puppeteer';
import testBrowser from '../mockBrowser';
import {table} from "./helpers";

describe('the table flow', () => {
  const {setup, tearDown} = testBrowser({});
  let page: Page;
  const columns: string[] = ["bar", "baz", "bob", "coo", "cop", "cor", "far", "faz", "foo", "fop"];

  afterEach(async () => {
    await tearDown()
  });

  describe('with data', () => {
    beforeEach(async () => {
      page = await setup();
    });

    it('should have default columns', async () => {
      const columnHeaders = await table(page).valuesOf('.column-header');

      expect(columnHeaders.sort()).toEqual(columns.sort());
    });

    describe('the table rows', () => {
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

    describe('the totals row', () => {
      it('should be the same length as their are columns', async () => {
        expect((await table(page).lengthOf('.total'))).toBe(columns.length);
      });

      it('should sum the columns', async () => {
        expect(await table(page).contentOf('.total')).toEqual({
          bar: "10",
          baz: "20",
          bob: "30",
          coo: "40",
          cop: "50",
          cor: "60",
          far: "70",
          faz: "80",
          foo: "90",
          fop: "100"
        });
      });

      it('should update the total row if a name is unchecked', async () => {
        const getFirstTotalValue = () =>
          page.$eval('.total[data-column="bar"]',
            elem => elem.textContent);

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

    it('should have default columns', async () => {
      const columnHeaders = await table(page).valuesOf('.column-header');

      expect(columnHeaders.sort()).toEqual(columns.sort());
    });

    describe('the totals row', () => {
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