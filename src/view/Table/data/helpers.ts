import {remove} from '../../../util/ObjectHelpers';
import {sumColumns} from '../../helpers';
import {DataResponse, Table} from './types';
import {RowData} from './types/DataResponse';

const createStateFrom = ({data, rowNames, columnNames}: DataResponse): Table =>
  data.map((newRow: RowData) => ({
    [newRow.name]: {data: remove(newRow, 'name')}
  })).reduce((table: Table, subTable: Table) => {
    const rowName = Object.keys(subTable)[0];
    if (Object.keys(table).includes(rowName)) {
      const subRows = [...(table[rowName].subRows || [table[rowName].data]), subTable[rowName].data];
      return {
        ...table, [rowName]: {data: sumColumns(subRows, columnNames), subRows}
      };
    }
    return {...table, ...subTable};
  }, {});

export const reconcile = (
  currentState: Table = {},
  newState: DataResponse = {data: [], rowNames: [], columnNames: []}
) => (newState.data.length === 0) ?
  currentState : createStateFrom(newState);
