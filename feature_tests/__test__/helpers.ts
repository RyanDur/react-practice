import {Page} from "puppeteer";
import {Data} from "../../src/components/Table/TableState";

interface CheckBoxes {
  checked: () => Promise<boolean[]>
}

interface TableData {
  lengthOf: (f: string) => Promise<number>;
  contentOf: (f: string) => Promise<Data>;
  checkboxesOf: (f: string) => CheckBoxes;
  valuesOf: (f: string) => Promise<string[]>
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
    lengthOf: async (selector) => await getAll<number>(selector, length),
    contentOf: async (selector) => await getAll<Data>(selector, content),
    valuesOf: async (selector) => await getAll<string[]>(selector, getText),
    checkboxesOf: (selector) => ({
      checked: async () => await getAll<boolean[]>(selector, checkedInputs)
    })
  }
};