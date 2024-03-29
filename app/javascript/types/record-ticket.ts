import { Record } from 'immutable';

// interface IPosition {
//   x: number;
//   y: number;
// }

// interface IVertice {
//   table: IPosition;
// }

// interface ITable {
//   vertices: IVertice[];
//   guid: string;
// }

// interface IBound {
//   table: ITable
// }

/**
 * Represents a ticket
 */
export interface ITicket {
  /**
   * Bound for the ticket
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any,
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
  blocks: [],
  width: 0,
  height: 0,
  url: ''
});

/**
 * Class for record Ticket
 */
export class RecordTicket extends defaultState implements ITicket { }
