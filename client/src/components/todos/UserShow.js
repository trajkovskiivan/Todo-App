import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../../actions';

import TodoList from './TodoList';




class UserShow extends Component {


  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(this.props.user)
    return (
      <div >
        <h1>Wellcome {this.props.user.firstName} {this.props.user.lastName}</h1>
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