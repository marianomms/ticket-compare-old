import { Record } from 'immutable';
import { RecordTicket } from './record-ticket';

interface IStateTicket {
  loaded: boolean;
  ticket: RecordTicket;
}

const defaultState = Record<IStateTicket>({
  loaded: false,
  ticket: new RecordTicket()
});

/**
 * Record for ticcket state
 */
export default class RecordStateTicket extends defaultState implements IStateTicket {}
