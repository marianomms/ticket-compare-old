import { Record, List } from 'immutable';
import RecordThing from './record-thing';

interface IStateThing {
  things: List<RecordThing>;
}

const defaultState = Record<IStateThing>({
  things: List<RecordThing>()
});

/**
 * Record for thing state
 */
export default class RecordStateThing extends defaultState implements IStateThing {}
