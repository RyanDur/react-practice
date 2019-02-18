import {FancyState} from '../Fancy/types';

export const initialTableState: FancyState = {
  rows: [
    'Anna',
    'Travis',
    'Mendel',
    'Harrison',
    'Alex',
    'Jordan',
    'Mike',
    'Krishna',
    'Mohammad',
    'Paulina'
  ],
  selected: [
    'Anna',
    'Travis',
    'Mendel',
    'Harrison',
    'Alex',
    'Jordan',
    'Mike',
    'Krishna',
    'Mohammad',
    'Paulina'
  ],
  totals: {},
  columns: {
    active: ['foo', 'bar', 'baz', 'bob', 'far', 'faz', 'fop', 'coo', 'cor', 'cop'],
    inactive: ['another']
  }
};

export const initialState = [
  {name: 'Anna', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Travis', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Mendel', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Harrison', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Alex', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Jordan', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Mike', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Krishna', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Mohammad', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12},
  {name: 'Paulina', foo: 1, bar: 2, baz: 3, bob: 4, far: 5, faz: 6, fop: 7, coo: 8, cor: 9, cop: 10, another: 11, yet_another: 12}
];
