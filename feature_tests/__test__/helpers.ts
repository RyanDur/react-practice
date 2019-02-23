import {Page} from 'puppeteer';
import {Data} from '../../src/core/types';

interface Elem extends HTMLInputElement {
  [key: string]: any;
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

export interface TableData {
  lengthOf: (f: string) => Promise<number>;
  contentOf: <T>(f: string) => Promise<Data<string>>;
  inputOfType: (type: string, method: string) => Promise<boolean[]>;
  valuesOf: (f: string) => Promise<string[]>;
  column: (name: string) => Column;
}

export const setup = (page: Page) => (table: string): TableData => {
  const getAll = <T>(selector: string, fn: (f: HTMLElement[]) => T) => {
    return page.$$eval(selector, fn).then((f) => f);
  };

  const checks = (method: string) =>
    (elems: Elem[]) => {
      const anies = elems.map(elem => elem.checked);
      return anies;
    };

  const length = (elems: HTMLElement[]): number => elems.length;

  const text = (elems: HTMLElement[]): string[] =>
    elems.map((elem: HTMLElement) => elem.textContent);

  const content = (elems: HTMLElement[]): Data<string> =>
    elems.map(elem => ({
      [elem.dataset.column]: elem.textContent
    })).reduce((acc, elem) => ({...acc, ...elem}), {});

  return {
    lengthOf: (selector) => getAll<number>(`${table} ${selector}`, length),
    contentOf: async (selector: string) => getAll<Data<string>>(`${table} ${selector}`, content),
    valuesOf: async (selector) => getAll<string[]>(`${table} ${selector}`, text),
    inputOfType: async (type, method) => getAll<boolean[]>(
      `${table} input[type=${type}]`,
      checks(method)).then(boxes => boxes.filter(checked => checked)),
    column: (name: string): Column => ({
      menu: async (): Promise<Menu> => {
        const exists = async (selector: string): Promise<boolean> => await page.$(selector) !== null;
        return ({
          open: async (): Promise<void> => {
            await page.click(`${table} .column-header[data-group="${name}"] .drop-down .hamburger`);
          },
          close: async (): Promise<void> => {
            await page.click(`${table} .column-header[data-group="${name}"] .drop-down .hamburger`);
          },
          select: async (column: string): Promise<void> => {
            const selector = `${table} .column-header[data-group="${name}"] .drop-down [data-group="${column}"]`;
            if (await exists(selector)) {
              await page.click(selector);
            }
          },
          addRight: async (): Promise<void> => {
            await page.click(`${table} .column-header[data-group="${name}"] .drop-down .add-right`);
          },
          addLeft: async (): Promise<void> => {
            await page.click(`${table} .column-header[data-group="${name}"] .drop-down .add-left`);
          },
          remove: async (): Promise<void> => {
            await page.click(`${table} .column-header[data-group="${name}"] .drop-down .remove`);
          }
        });
      }
    })
  };
};
