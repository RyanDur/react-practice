import {ElementHandle, Page} from 'puppeteer';
const testBrowser = require('../mockBackend');

describe('the table', () => {
  const {setup, tearDown} = testBrowser({headless: true, slowMo: 0});
  let page: Page;
  beforeEach(async () => {
    page = await setup();
  });

  afterEach(async () => {
    await tearDown()
  });

  it('should update the total row if a name is unchecked', async () => {
    const expected = '9';
    const checkBox: ElementHandle<Element> = await page.$('#row-check-0');
    await checkBox.click();

    const firstTotal = await page.$('#table-data-0');
    const actual = await (await firstTotal.getProperty('value')).jsonValue()
    expect(actual).toBe(expected);
  });
});