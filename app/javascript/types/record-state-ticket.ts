import { Record } from 'immutable';
import { RecordTicket } from './record-ticket';
import SelectionStep from './enums';

interface IStateTicket {
  loadedTicket: boolean;
  ticket: RecordTicket;
  ticketId: string;
  market: string;
  prices: string;
  products: string;
  selectionStep: SelectionStep;
}

const defaultState = Record<IStateTicket>({
  loadedTicket: false,
  ticket: new RecordTicket(),
  ticketId: '',
  market: 'aaa',
  prices: 'bbb',
  products: 'ccc',
  selectionStep: SelectionStep.market
});

/**
 * Record for ticket state
 */
export default class RecordStateTicket extends defaultState implements IStateTicket { }
