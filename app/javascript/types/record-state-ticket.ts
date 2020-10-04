import { Record } from 'immutable';
import { DateType } from '@date-io/type';
import moment from 'moment';
import { RecordTicket } from './record-ticket';
import { SelectionStep, TicketView } from './enums';

interface IStateTicket {
  loadedTicket: boolean;
  ticket: RecordTicket;
  ticketId: string;
  market: string;
  prices: string;
  products: string;
  selectionStep: SelectionStep;
  selectionDate: DateType;
  ticketView: TicketView;
}

const defaultState = Record<IStateTicket>({
  loadedTicket: false,
  ticket: new RecordTicket(),
  ticketId: '',
  market: '',
  prices: '',
  products: '',
  selectionStep: SelectionStep.market,
  selectionDate: moment(),
  ticketView: TicketView.image
});

/**
 * Record for ticket state
 */
export default class RecordStateTicket extends defaultState implements IStateTicket { }
