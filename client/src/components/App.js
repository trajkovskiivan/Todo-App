import React from 'react';
import {connect} from 'react-redux';

import UserShow from './todos/UserShow';
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
    console.log('User is logged in ', this.props.auth.isLoggedIn)
    return (
      <div>
        <h1>Todo-App</h1>
        <Auth />
        {this.renderApp()}
        <Button variant='contained' color='primary'>Click Me</Button>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);