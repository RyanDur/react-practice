import {FancyAction} from './components';
import {DataAction, SocketAction} from './core/action';

export type AppAction = FancyAction | SocketAction | DataAction;
