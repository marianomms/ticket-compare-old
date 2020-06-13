import RecordStateTicket from '../types/record-state-ticket';
import { IActionGetTicketData } from '../types/actions-ticket';
import { GET_TICKET_DATA } from '../types/constants';
import { IResponseTicket } from '../types/response-ticket';
import { RecordTicket } from '../types/record-ticket';

const initialState = new RecordStateTicket();

type TypeAction = IActionGetTicketData;

const toTicket = (data: IResponseTicket): RecordTicket => {
  return new RecordTicket(data);
};

export default (state: RecordStateTicket = initialState, action: TypeAction): RecordStateTicket => {
  switch (action.type) {
    case GET_TICKET_DATA:
      return state.set('ticket', toTicket(action.data))
        .set('loaded', true);
    default:
      return state;
  }
};
