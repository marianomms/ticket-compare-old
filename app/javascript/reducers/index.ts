  import { combineReducers } from 'redux-immutable';

import { thingsReducer } from './things';

const rootReducer = combineReducers({
  thingsState: thingsReducer,
});

export default rootReducer;
