import { Record } from 'immutable';
import RecordStateThing from './record-state-things';

interface IStateApp {
  thingsState: RecordStateThing
}

const defaultState = Record<IStateApp>({
  thingsState: new RecordStateThing()
});

/**
 * Record for application state
 */
export default class RecordStateApp extends defaultState implements IStateApp {}
