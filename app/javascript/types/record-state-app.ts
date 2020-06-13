import { Record } from 'immutable';
import RecordStateThing from './record-state-things';
import RecordStateTicket from './record-state-ticket';

interface IStateApp {
  thingsState: RecordStateThing,
  ticketState: RecordStateTicket
}

const defaultState = Record<IStateApp>({
  thingsState: new RecordStateThing(),
  ticketState: new RecordStateTicket()
});

/**
 * Record for application state
 */
export default class RecordStateApp extends defaultState implements IStateApp {}
