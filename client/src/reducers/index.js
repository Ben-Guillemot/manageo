import { combineReducers } from 'redux';

import userReducer from './userReducer';
import modalReducer from './modalReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  user: userReducer,
  modal: modalReducer,
  message: messageReducer,
});
