interface data {
  name: string
  foo: number
  bar: number
  baz: number
  bob: number
  far: number
  faz: number
  fop: number
  coo: number
  cor: number
  cop: number
}

const row = (name: string): data => {
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
    fop: 10
  }
};

export const createRow = (name: string) => row(name);