import * as t from 'io-ts';

const DataName = t.type({
  name: t.string
});

const DataNumber = t.UnknownRecord;

export type ResponseData = t.TypeOf<typeof DataName & typeof DataNumber> ;

export const ValidateDataResponse = t.type({
  data: t.array(t.intersection([DataName, DataNumber])),
  rowNames: t.array(t.string),
  columnNames: t.array(t.string)
});

export type DataResponse = t.TypeOf<typeof ValidateDataResponse>;
