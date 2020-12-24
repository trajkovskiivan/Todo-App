import React, {Component} from 'react';
import {connect} from 'react-redux';


import Todo from './Todo';



class TodoList extends Component {



  render() {
    // console.log("From TodoList", this.props)
    return (
      <div>
        <h5>TodoList</h5>
        {this.props.todos && this.props.todos.map(todo => {
          return <Todo key={todo._id} {...todo} />
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.user.todos
  }
}
export default connect(mapStateToProps)(TodoList);