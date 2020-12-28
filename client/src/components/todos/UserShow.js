import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../../actions'


import TodoList from './TodoList';
import TodoInput from './TodoInput';




class UserShow extends Component {


  componentDidMount() {
    this.props.fetchUser();

  }

  render() {
    return (
      <div >
        <h4>Wellcome {this.props.user.firstName}</h4>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth
  }
}

export default connect(mapStateToProps, {fetchUser})(UserShow);