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
    const before = await page.$eval('#table-data-footer-0', elem => elem.textContent);
    expect(before).toBe('10');

    const checkBox: ElementHandle<Element> = await page.$('#row-check-0');
    await checkBox.click();

    const after = await page.$eval('#table-data-footer-0', elem => elem.textContent);
    expect(after).toBe('9');
  });
});