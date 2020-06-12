import { Record } from 'immutable';

/**
 * Represents a Thing object
 */
export interface IThing {
  guid: string;
  name: string;
}

const defaultState = Record<IThing>({
  guid: '',
  name: ''
});

/**
 * Class for record  thing
 */
export default class RecordThing extends defaultState implements IThing {}
