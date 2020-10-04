import { Dispatch } from 'redux';
import {
  IActionGetTicketData, IActionSetSelectionStep, IActionSetSelectionType, IActionSetSelectionDate, IActionSetTicketView
} from 'app/types/actions-ticket';
import { IResponseTicket } from 'app/types/response-ticket';
import {
  GET_TICKET_DATA, SET_SELECTION_STEP, SET_SELECTION_TYPE, SET_SELECTION_DATE, SET_TICKET_VIEW
} from 'app/types/constants';
import { SelectionStep, TicketView } from 'app/types/enums';
import { DateType } from '@date-io/type';

const getTicketDataDispatch = (ticketId: string, data: IResponseTicket): IActionGetTicketData => {
  data.ticketId = ticketId;
  return { type: GET_TICKET_DATA, data };
};

const getTicketData = (ticketId: string): unknown => {
  return (dispatch: Dispatch<IActionGetTicketData>) => {
    fetch(`api/v1/tickets/${ticketId}`)
      .then((response) => response.json())
      .then((data) => dispatch(getTicketDataDispatch(ticketId, data)))
      .catch(() => {});
  };
};

const setSelectionStep = (step: SelectionStep): unknown => {
  return (dispatch: Dispatch<IActionSetSelectionStep>) => {
    dispatch({ type: SET_SELECTION_STEP, step });
  };
};

const setSelectionType = (id: string, type: SelectionStep): unknown => {
  return (dispatch: Dispatch<IActionSetSelectionType>) => {
    dispatch({ type: SET_SELECTION_TYPE, data: { id, type } });
  };
};

const setSelectionDate = (date: DateType): unknown => {
  return (dispatch: Dispatch<IActionSetSelectionDate>) => {
    dispatch({ type: SET_SELECTION_DATE, date });
  };
};

const setTicketView = (view: TicketView): unknown => {
  return (dispatch: Dispatch<IActionSetTicketView>) => {
    dispatch({ type: SET_TICKET_VIEW, view });
  };
};

export {
  getTicketData,
  setSelectionStep, setSelectionType, setSelectionDate, setTicketView
};
