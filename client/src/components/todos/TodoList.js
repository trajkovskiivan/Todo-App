import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteTodo} from '../../actions'


import Todo from './Todo';





class TodoList extends Component {
  render() {
    return (
      <div>
        <h5>TodoList</h5>
        {this.props.todos && this.props.todos.map(todo => {
          return <Todo key={todo._id} {...todo} deleteTodo={() => this.props.deleteTodo(todo._id)} />
        })}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.user.todos
  }
}
export default connect(mapStateToProps, {deleteTodo})(TodoList);