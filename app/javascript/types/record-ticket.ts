import { Record } from 'immutable';

interface IPosition {
  x: number;
  y: number;
}

interface IVertice {
  table: IPosition;
}

interface ITable {
  vertices: IVertice[];
  guid: string;
}

interface IBound {
  table: ITable
}

/**
 * Represents a ticket
 */
export interface ITicket {
  /**
   * Bound for the ticket
   */
  bounds: IBound[],
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
  bounds: [],
  width: 0,
  height: 0,
  url: ''
});

/**
 * Class for record Ticket
 */
export class RecordTicket extends defaultState implements ITicket { }
