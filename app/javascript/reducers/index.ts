import { combineReducers } from 'redux-immutable';

import thingsReducer from './things';
import ticketReducer from './ticket';

const rootReducer = combineReducers({
  thingsState: thingsReducer,
  ticketState: ticketReducer
});

export default rootReducer;
