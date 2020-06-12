import { List } from 'immutable';
import RecordStateThing from '../types/record-state-things';
import { IActionGetThingsSuccess } from '../types/actions-things';
import { IResponseThings } from '../types/response-things';
import RecordThing from '../types/record-thing';
import { GET_THINGS_SUCCESS } from '../types/constants';

const initialState = new RecordStateThing();

type TypeAction = IActionGetThingsSuccess;

const toListLineItems = (response: IResponseThings): List<RecordThing> => {
  const records = response.things.map((t) => { return new RecordThing(t); });
  return List<RecordThing>(records);
};

// eslint-disable-next-line import/prefer-default-export
export const thingsReducer = (state: RecordStateThing = initialState, action: TypeAction): RecordStateThing => {
  console.log(action.type);
  switch (action.type) {
    case GET_THINGS_SUCCESS:
      return state.set('things', toListLineItems(action.data));
    default:
      return state;
  }
};
