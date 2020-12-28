import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteTodo} from '../../actions/index';

import Button from '@material-ui/core/Button';


class Todo extends Component {

  removeOne = () => {
    this.props.deleteTodo(this.props._id)
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <Button variant='contained' color='secondary' onClick={() => this.removeOne()}>Delete</Button>
      </div>
    );
  }
}



export default connect(null, {deleteTodo})(Todo);