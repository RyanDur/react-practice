import {merge, remove} from '../util/ObjectHelpers';
import {Rows} from './types';
import {ResponseData} from './types/DataResponse';

const createStateFrom = ({newState}: { newState: ResponseData[]}): Rows =>
  newState.map(newRow => ({
    [newRow.name]: remove(newRow, 'name')
  })).reduce(merge, {});

export const normalize = (
  currentState: Rows = {},
  newState: ResponseData[] = []
): Rows =>
  (newState.length === 0) ?
    currentState :
    createStateFrom({newState});
