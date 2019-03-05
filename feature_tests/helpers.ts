import {Page} from 'puppeteer';
import {Data} from '../src/data/types';

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

export interface TableData {
  numberOf: (f: string) => Promise<number>;
  contentsOfEach: <T>(f: string) => Promise<Data<any>>;
  inputOfType: (type: string, method: string) => Promise<boolean[]>;
  select: (selector: string) => Promise<void>;
  valuesOf: (f: string) => Promise<string[]>;
}

export const setup = (page: Page) => (table: string): TableData => {
  const merge = <T>(vals: Array<Data<T>>): Data<T> =>
    vals.reduce((acc, val) => ({...acc, ...val}), {});
  const getAll = <T>(selector: string, fn: (f: HTMLElement[]) => T) =>
    page.$$eval(selector, fn);

  const inputMethods = (method: string) => {
    switch (method) {
    case 'checked':
      return (elems: Elem[]) => elems.map(elem => elem.checked)
        .filter(checked => checked);
    }
  };

  const length = (elems: HTMLElement[]): number => elems.length;

  const text = (elems: HTMLElement[]): string[] =>
    elems.map((elem: HTMLElement) => elem.textContent);

  const contents = (elems: HTMLElement[]): Array<Data<any>> =>
    elems.map(elem => ({
      [elem.dataset.group]: elem.textContent
    }));

  return {
    numberOf: (selector) => getAll<number>(`#${table} ${selector}`, length),
    contentsOfEach: async (selector: string) =>
      getAll<Array<Data<any>>>(`#${table} ${selector}`, contents).then(merge),
    valuesOf: async (selector) => getAll<string[]>(`#${table} ${selector}`, text),
    inputOfType: async (type, method) =>
      getAll<any[]>(`${table} input[type=${type}]`, inputMethods(method)),
    select: (selector: string) => page.click(`#${table} #${selector}-checkbox`)
  };
};
