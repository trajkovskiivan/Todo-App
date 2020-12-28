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


export const logIn = (email, password) => async dispatch => {
  const response = await todos.post('/auth', {email: email, password: password})
  // console.log(response)
  // console.log(response.data)
  if (response.data === null) {
    console.log(`The data is null`);
  } else {
    localStorage.setItem('email', response.data.email.toString());
    dispatch({type: LOG_IN, payload: response.data})
  }

};

export const logOut = (userId) => {
  localStorage.clear();
  return {
    type: LOG_OUT
  };
};



export const fetchUser = () => async dispatch => {
  const email = localStorage.getItem('email');
  console.log(email)
  const response = await todos.get(`/user/${email}`);
  dispatch({type: FETCH_USER, payload: response.data});
};

export const postTodo = (email, title, body) => async dispatch => {
  const response = await todos.post('/user/todo', {email, title, body});
  dispatch({type: POST_TODO, payload: response.data});
}

export const deleteTodo = (id) => async dispatch => {
  const email = localStorage.getItem('email');
  const response = await todos.delete(`/user/todos/${email}/${id}`, {email, id});
  dispatch({type: DELETE_TODO, payload: response.data});
};

