import { GET_TICKET_DATA } from './constants';
import { IResponseTicket } from './response-ticket';

/**
 * Redux action to be used in reducers get ticket data
 */
export interface IActionGetTicketData {
  type: typeof GET_TICKET_DATA;
  data: IResponseTicket
}
