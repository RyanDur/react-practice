import * as t from 'io-ts';

const ValidateDataNumber = t.record(t.string, t.number);

const ValidateDataName = t.interface({
  name: t.union([t.string, t.undefined])
});

export const ValidateResponse = t.type({
  data: t.array(t.union([ValidateDataName , ValidateDataNumber, t.undefined])),
  rowNames: t.union([t.array(t.string), t.undefined]),
  columnNames: t.union([t.array(t.string), t.undefined])
});

interface DataName {
  name: string;
}
type DataNumber = Record<string, number>;
type Data = DataName & DataNumber;

export interface Response {
  data: Data[];
  rowNames: string[];
  columnNames: string[];
}
