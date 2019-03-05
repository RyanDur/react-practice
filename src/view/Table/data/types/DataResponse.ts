import * as t from 'io-ts';

const ValidateData = t.union([
  t.interface({name: t.string}) ,
  t.record(t.string, t.number)
]);

export const ValidateDataResponse = t.type({
  data: t.array(ValidateData),
  rowNames: t.array(t.string),
  columnNames: t.array(t.string)
});

export type RowData = t.TypeOf<typeof ValidateData>;

export type DataResponse = t.TypeOf<typeof ValidateDataResponse>;
