import { ITicket } from './record-ticket';

/**
 * Response from /api/v1/tickets/:id
 */
export interface IResponseTicket {
  ticket: ITicket;
  ticketId: string
}
