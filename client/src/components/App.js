import React from 'react';
import {connect} from 'react-redux';
import {Router, Route} from 'react-router-dom';

import {fetchUser} from '../actions/index';

import history from '../history';

import Auth from './auth/Auth';
import UserShow from './todos/UserShow';
import SignUp from './auth/SignUp';
// eslint-disable-next-line
import Button from '@material-ui/core/Button';
import './App.css';





class App extends React.Component {
  state = {
    year: 2001
  }

  renderApp = () => {
    if (this.props.auth.isLoggedIn === true) {
      return <UserShow />
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <h1>Todo-App</h1>
          <Route path='/' exact component={Auth} />
          {/* <Route path='/loggedin' component={Auth} />
          <Route path='/loggedin' component={UserShow} /> */}
          <Route path='/signup' exact component={SignUp} date={this.state.year} />
        </Router>
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