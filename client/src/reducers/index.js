import {combineReducers} from 'redux';
// eslint-disable-next-line
import {reducer as formReducer} from 'redux-form';
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
  tryMe: () => {return 'Try Me'},
  auth: authReducer,
  user: userReducer
})