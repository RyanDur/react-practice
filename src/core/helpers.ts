import {merge, remove} from '../util/ObjectHelpers';
import {sumColumns} from '../view/helpers';
import {Rows} from './types';
import {ResponseData} from './types/DataResponse';
import {Row} from './types/Row';

const createStateFrom = ({newState}: { newState: ResponseData[] }): Rows =>
  newState.map(newRow => ({
    [newRow.name]: {data: remove(newRow, 'name')}
  })).reduce((rows: Rows, row: Rows) => {
    const name = Object.keys(row)[0];
    const names = Object.keys(rows);
    const columns = Object.keys(row[name].data);
    if (names.includes(name)) {
      const subData = [...(rows[name].subData || [rows[name].data]), row[name].data];
      return {
        ...rows, ...{[name]: {data: sumColumns(subData, columns), subData}
        }
      };
    }
    return {...rows, ...row};
  }, {});

export const normalize = (
  currentState: Rows = {},
  newState: ResponseData[] = []
): Rows =>
  (newState.length === 0) ?
    currentState :
    createStateFrom({newState});
