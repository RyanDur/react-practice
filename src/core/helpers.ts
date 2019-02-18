import {merge, remove} from '../util/ObjectHelpers';
import {Rows} from './types';
import {ResponseData} from './types/Response';

const createStateFrom = ({newState}: { newState: ResponseData[]}): Rows =>
  newState.map(newRow => ({
    [newRow.name]: remove<string, number>(newRow, 'name')
  })).reduce(merge, {});

export const normalize = (
  currentState: Rows = {},
  newState: ResponseData[] = []
): Rows =>
  (newState.length === 0) ?
    currentState :
    createStateFrom({newState});
