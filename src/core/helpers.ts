import {merge, remove} from '../util/ObjectHelpers';
import {NormalizedRows} from './helpers';
import {Data, Row} from './types';

export interface NormalizedRows {
  [name: string]: Row;
}

const mergeData = (
  {data}: Data = {data: {}},
  right: Data = {}
): Data => merge(data, right);

const getData = (
  {data}: Data = {data: {}},
  newData: Data
): Data => ({
  ...Object.keys(newData)
    .map(column => data[column])
    .reduce(merge, {}),
  ...newData
});

const createStateFrom = ({newState, basedOn}: { newState: Data[], basedOn: NormalizedRows }) =>
  newState.map(newRow => ({
    name: newRow.name,
    data: getData(basedOn[newRow.name], remove(newRow, 'name'))
  })).reduce((acc: NormalizedRows, row: Row) => ({
    ...acc, [row.name]: {
      name: row.name,
      data: mergeData(acc[row.name], row.data)
    }
  }), {});

export const normalize = (
  currentState: NormalizedRows = {},
  newState: Data[] = []
): NormalizedRows =>
  (newState.length === 0) ?
    currentState :
    createStateFrom({newState, basedOn: currentState});
