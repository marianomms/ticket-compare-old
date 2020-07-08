import { List } from 'immutable';
import RecordStateThing from 'app/types/record-state-things';
import { IActionGetThingsSuccess } from 'app/types/actions-things';
import { IResponseThings } from 'app/types/response-things';
import RecordThing from 'app/types/record-thing';
import { GET_THINGS_SUCCESS } from 'app/types/constants';

const initialState = new RecordStateThing();

type TypeAction = IActionGetThingsSuccess;

const toListLineItems = (response: IResponseThings): List<RecordThing> => {
  const records = response.things.map((t) => { return new RecordThing(t); });
  return List<RecordThing>(records);
};

export default (state: RecordStateThing = initialState, action: TypeAction): RecordStateThing => {
  switch (action.type) {
    case GET_THINGS_SUCCESS:
      return state.set('things', toListLineItems(action.data));
    default:
      return state;
  }
};
