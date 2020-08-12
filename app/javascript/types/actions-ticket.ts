import { GET_TICKET_DATA, SET_SELECTION_STEP, SET_SELECTION_TYPE } from './constants';
import { IResponseTicket } from './response-ticket';
import SelectionStep from './enums';

/**
 * Redux action to be used in reducers get ticket data
 */
export interface IActionGetTicketData {
  type: typeof GET_TICKET_DATA;
  data: IResponseTicket
}

/**
 * Redux action to be used in reducers to set selection step
 */
export interface IActionSetSelectionStep {
  type: typeof SET_SELECTION_STEP;
  step: number;
}

interface IActionSeSelectionTypeData {
  id: string;
  type: SelectionStep
}

/**
 * Redux action to be used in reducers to set selection
 */
export interface IActionSetSelectionType {
  type: typeof SET_SELECTION_TYPE;
  data: IActionSeSelectionTypeData;
}
