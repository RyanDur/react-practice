import {remove} from '../../../util/ObjectHelpers';
import {sumColumns} from '../../helpers';
import {dataAction, DataAction} from './action';
import {DataResponse, DataState, Table} from './types';
import {ResponseData} from './types/DataResponse';

export const defaultState: DataState = {
  table: {},
  rows: [],
  columns: []
};

export const reducer = (
  state: DataState = defaultState,
  action: DataAction
): DataState => {
  switch (action.type) {
  case dataAction.DATA:
    return {
      ...state,
      table: buildTable(action),
      rows: action.rowNames,
      columns: action.columnNames
    };
  default:
    return state;
  }
};

const buildTable = ({data, columnNames}: DataResponse): Table =>
  data.length ?
    data.reduce((table: Table, newRow: ResponseData) => {
      if (Object.keys(table).includes(newRow.name)) {
        const subRows = [...(table[newRow.name].subRows || [table[newRow.name].data]), remove(newRow, 'name')];
        return {...table, [newRow.name]: {data: sumColumns(subRows, columnNames), subRows}};
      }
      return {...table, [newRow.name]: {data: remove(newRow, 'name')}};
    }, {}) : {};
