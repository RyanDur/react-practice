import {Data} from '../src/core/types';

interface FakeData extends Data {
  name: string;
  foo: number;
  bar: number;
  baz: number;
  bob: number;
  far: number;
  faz: number;
  fop: number;
  coo: number;
  cor: number;
  cop: number;
  another: number;
  yet_another: number;
}

const row = (name: string): FakeData => {
  return {
    name,
    bar: 1,
    baz: 2,
    bob: 3,
    coo: 4,
    cop: 5,
    cor: 6,
    far: 7,
    faz: 8,
    foo: 9,
    fop: 10,
    another: 11,
    yet_another: 12
  };
};

export const createRow = (name: string) => row(name);
