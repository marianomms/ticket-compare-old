import { Record } from 'immutable';
import { DateType } from '@date-io/type';
import moment from 'moment';
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
  selectionDate: DateType;
}

const defaultState = Record<IStateTicket>({
  loadedTicket: false,
  ticket: new RecordTicket(),
  ticketId: '',
  market: '',
  prices: '',
  products: '',
  selectionStep: SelectionStep.market,
  selectionDate: moment()
});

/**
 * Record for ticket state
 */
export default class RecordStateTicket extends defaultState implements IStateTicket { }
