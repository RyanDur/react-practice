import {default as Paginator} from './state/connector';
import {default as page, CarState as PaginationState} from './state/reducer';
import {PaginationAction} from './state/actions';

export {
  Paginator,
  PaginationAction,
  page,
  PaginationState
};
