import {Browser, Page} from "puppeteer";
const Path = require('path');
const express = require('express');
const server = require('../fake/backend');
const puppeteer = require('puppeteer');

interface Puppet {
  headless: boolean
  slowMo: number
}

const testBrowser = ({headless = true, slowMo = 0}: Puppet) => {
  let browser: Browser;
  let fakeBackendHandle: { close: () => void; };
  let appServerHandle: { close: () => void; };
  let page: Page;
  const app = express();
  app.use(express.static(Path.join(__dirname, '..', 'dist')));

  return {
    setup: async (): Promise<Page> => {
      await new Promise((resolve) => {
        fakeBackendHandle = server.listen(7771, () => {
          appServerHandle = app.listen(7770, () => {
            resolve()
          })
        })
      });

      browser = await puppeteer.launch({
        headless,
        slowMo,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      page = await browser.newPage();
      await page.goto('http://localhost:7770/index.html');
      return page;
    },
    tearDown: async () => {
      appServerHandle.close();
      fakeBackendHandle.close();

      try {
        await browser.close();
      } catch (err) {
        console.log(err);
      }
    }
  }
};

module.exports = testBrowser;