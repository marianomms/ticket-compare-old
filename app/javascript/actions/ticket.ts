import { Dispatch } from 'redux';
import { IActionGetTicketData } from '../types/actions-ticket';
import { IResponseTicket } from '../types/response-ticket';
import { GET_TICKET_DATA } from '../types/constants';

const getTicketDataDispatch = (data: IResponseTicket): IActionGetTicketData => {
  return { type: GET_TICKET_DATA, data };
};

const getTicketData = (ticketId: string): unknown => {
  return (dispatch: Dispatch<IActionGetTicketData>) => {
    fetch(`api/v1/tickets/${ticketId}`)
      .then((response) => response.json())
      .then((data) => dispatch(getTicketDataDispatch(data)))
      .catch((error) => console.log(error));
  };
};

export default getTicketData;
