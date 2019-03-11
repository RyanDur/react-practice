import {remove} from '../../../util/ObjectHelpers';
import {sumColumns} from '../../helpers';
import {DataResponse, Table} from './types';
import {ResponseData} from './types/DataResponse';

const buildTable = ({data, columnNames}: DataResponse): Table =>
  data.reduce((table: Table, newRow: ResponseData) => {
    if (Object.keys(table).includes(newRow.name)) {
      const subRows = [...(table[newRow.name].subRows || [table[newRow.name].data]), remove(newRow, 'name')];
      return {
        ...table, [newRow.name]: {data: sumColumns(subRows, columnNames), subRows}
      };
    }
    return {...table, [newRow.name]: {data: remove(newRow, 'name')}};
  }, {});

export const reconcile = (
  currentTable: Table = {},
  newState: DataResponse = {data: [], rowNames: [], columnNames: []}
) => newState.data.length ? buildTable(newState) : currentTable;
