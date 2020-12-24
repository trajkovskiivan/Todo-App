import React from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';


const Todo = (props) => {
  console.log("From Todo  ", props)
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <Button variant='contained' color='secondary'>Delete</Button>
    </div>
  );
}



export default Todo;