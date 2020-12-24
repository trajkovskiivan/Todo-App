import {FETCH_USER} from './types';
import todos from '../apis/todos';

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//   }
// };



export const fetchUser = () => async dispatch => {
  const response = await todos.get('/todos');
  dispatch({type: FETCH_USER, payload: response.data})
}