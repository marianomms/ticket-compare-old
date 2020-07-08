import RecordStateTicket from 'app/types/record-state-ticket';
import { IActionGetTicketData } from 'app/types/actions-ticket';
import { GET_TICKET_DATA } from 'app/types/constants';
import { IResponseTicket } from 'app/types/response-ticket';
import { RecordTicket } from 'app/types/record-ticket';

const initialState = new RecordStateTicket();

type TypeAction = IActionGetTicketData;

const toRecordTicket = (data: IResponseTicket): RecordTicket => {
  return new RecordTicket(data.ticket);
};

export default (state: RecordStateTicket = initialState, action: TypeAction): RecordStateTicket => {
  switch (action.type) {
    case GET_TICKET_DATA:
      return state.set('ticket', toRecordTicket(action.data))
        .set('loaded', true);
    default:
      return state;
  }
};
