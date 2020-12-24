import {
  FETCH_USER,
  DELETE_TODO,
  POST_TODO
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case DELETE_TODO:
      return action.payload;
    case POST_TODO:
      return {...state, ...action.payload};
    default:
      return state
  }
}