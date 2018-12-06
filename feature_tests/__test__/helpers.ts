import {Page} from 'puppeteer';
import {Data} from '../../src/components/Table/types';

interface CheckBoxes {
  checked: () => Promise<boolean[]>;
}

export interface Menu {
  select: (name: string) => Promise<void>;
  addRight: () => Promise<void>;
  addLeft: () => Promise<void>;
  remove: () => Promise<void>;
  open: () => Promise<void>;
  close: () => Promise<void>;
}

interface Column {
  menu: () => Promise<Menu>;
}

interface TableData {
  lengthOf: (f: string) => Promise<number>;
  contentOf: (f: string) => Promise<Data>;
  checkboxesOf: (f: string) => CheckBoxes;
  valuesOf: (f: string) => Promise<string[]>;
  column: (name: string) => Column;
}

export const table = (page: Page): TableData => {
  const getAll = <T>(selector: string, fn: (f: HTMLElement[]) => T) =>
    page.$$eval(selector, fn);

  const length = (elems: HTMLElement[]): number => elems.length;

  const getText = (elems: HTMLElement[]): string[] =>
    elems.map((elem: HTMLElement) => elem.textContent);

  const content = (elems: HTMLElement[]): Data =>
    elems.map(elem => ({
      [elem.dataset.column]: elem.textContent
    })).reduce((acc, elem) => Object.assign({}, acc, elem), {});

  const checkedInputs = (elems: HTMLElement[]): boolean[] =>
    elems.map(elem => elem.querySelector('input').checked);

  return {
    lengthOf: async(selector) => await getAll<number>(selector, length),
    contentOf: async(selector) => await getAll<Data>(selector, content),
    valuesOf: async(selector) => await getAll<string[]>(selector, getText),
    checkboxesOf: (selector) => ({
      checked: async() => await getAll<boolean[]>(selector, checkedInputs)
    }),
    column: (name: string): Column => ({
      menu: async(): Promise<Menu> => {
        const exists = async(selector: string): Promise<boolean> => await page.$(selector) !== null;
        return ({
          open: async(): Promise<void> => {
            await page.click(`.column-header[data-column="${name}"] .drop-down .hamburger`);
          },
          close: async(): Promise<void> => {
            await page.click(`.column-header[data-column="${name}"] .drop-down .hamburger`);
          },
          select: async(column: string): Promise<void> => {
            const selector = `.column-header[data-column="${name}"] .drop-down [data-column="${column}"]`;
            if (await exists(selector)) await page.click(selector);
          },
          addRight: async(): Promise<void> => {
            await page.click(`.column-header[data-column="${name}"] .drop-down .add-right`);
          },
          addLeft: async(): Promise<void> => {
            await page.click(`.column-header[data-column="${name}"] .drop-down .add-left`);
          },
          remove: async(): Promise<void> => {
            await page.click(`.column-header[data-column="${name}"] .drop-down .remove`);
          }
        });
      }
    })
  };
};