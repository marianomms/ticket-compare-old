import { Record } from 'immutable';

/**
 * Represents a ticket
 */
export interface ITicket {
  /**
   * Ticket image width
   */
  width: number,
  /**
  * Ticket image height
  */
  height: number,
  /**
  * Ticket image url
  */
  url: string
}

const defaultState = Record<ITicket>({
  width: 0,
  height: 0,
  url: ''
});

/**
 * Class for record Ticket
 */
export class RecordTicket extends defaultState implements ITicket { }
