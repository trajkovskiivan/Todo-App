import React from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../actions/index';

import UserShow from './todos/UserShow';
// eslint-disable-next-line
import Button from '@material-ui/core/Button';
import './App.css'

import Auth from './auth/Auth'



class App extends React.Component {


  renderApp = () => {
    if (this.props.auth.isLoggedIn === true) {
      return <UserShow />
    }
  }

  render() {
    return (
      <div>
        <h1>Todo-App</h1>
        <Auth />
        {this.renderApp()}
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, {fetchUser})(App);