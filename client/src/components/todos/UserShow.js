import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../../actions';

import TodoList from './TodoList';
import TodoInput from './TodoInput';




class UserShow extends Component {


  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    // console.log(this.props.user)
    return (
      <div >
        <TodoInput />
        <TodoList />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {fetchUser})(UserShow);