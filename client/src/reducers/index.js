import {combineReducers} from 'redux';

import {reducer as formReducer} from 'redux-form';
import userReducer from './userReducer'

export default combineReducers({
  tryMe: () => {return 'Try Me'},
  user: userReducer
})