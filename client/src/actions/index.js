import {
  FETCH_USER,
  DELETE_TODO,
  POST_TODO,
  LOG_IN,
  LOG_OUT
} from './types';
import todos from '../apis/todos';
// eslint-disable-next-line
import history from '../history';

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//   }
// };

export const logIn = (userId) => {
  return {
    type: LOG_IN,
    payload: userId
  };
};
// export const logIn = (email, password) => async dispatch => {
//   const response = await todos.get('/auth', {email, password});
//   dispatch({type: LOG_IN, payload: response.data})

// };

export const logOut = (userId) => {
  return {
    type: LOG_OUT
  };
};



export const fetchUser = () => async dispatch => {
  const response = await todos.get('/todos');
  dispatch({type: FETCH_USER, payload: response.data});
};

export const postTodo = (title, body) => async dispatch => {
  const response = await todos.post('/todo', {title, body});
  dispatch({type: POST_TODO, payload: response.data});
}

export const deleteTodo = (id) => async dispatch => {
  const response = await todos.delete(`/todos/${id}`);
  dispatch({type: DELETE_TODO, payload: response.data});
};

