import RecordStateTicket from 'app/types/record-state-ticket';
import {
  IActionGetTicketData, IActionSetSelectionStep, IActionSetSelectionType, IActionSetSelectionDate,
  IActionSetTicketView
} from 'app/types/actions-ticket';
import {
  GET_TICKET_DATA, SET_SELECTION_STEP, SET_SELECTION_TYPE, SET_SELECTION_DATE, SET_TICKET_VIEW
} from 'app/types/constants';
import { IResponseTicket } from 'app/types/response-ticket';
import { RecordTicket } from 'app/types/record-ticket';
import { SelectionStep } from 'app/types/enums';

const initialState = new RecordStateTicket();

type TypeAction = IActionGetTicketData | IActionSetSelectionStep | IActionSetSelectionType | IActionSetSelectionDate
  | IActionSetTicketView;

const toRecordTicket = (data: IResponseTicket): RecordTicket => {
  return new RecordTicket(data.ticket);
};

export default (state: RecordStateTicket = initialState, action: TypeAction): RecordStateTicket => {
  switch (action.type) {
    case GET_TICKET_DATA:
      return state.set('ticket', toRecordTicket(action.data))
        .set('ticketId', action.data.ticketId)
        .set('loadedTicket', true);
    case SET_SELECTION_STEP: {
      let newState = state;
      if (action.step === 0) {
        // reset all values
        newState = state.set('market', '')
          .set('prices', '')
          .set('products', '');
      }
      return newState.set('selectionStep', action.step);
    }
    case SET_SELECTION_DATE:
      return state.set('selectionDate', action.date);
    case SET_SELECTION_TYPE: {
      const type = SelectionStep[action.data.type] as 'market' | 'prices' | 'products';
      return state.set(type, action.data.id);
    }
    case SET_TICKET_VIEW:
      return state.set('ticketView', action.view);
    default:
      return state;
  }
};
