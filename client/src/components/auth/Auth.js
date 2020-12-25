import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn, logOut} from '../../actions/index';


import Button from '@material-ui/core/Button';

class Auth extends Component {

  renderAuth = (status) => {
    if (status) {
      return (
        < React.Fragment >
          <h4>Wellcome {this.props.user.firstName} {this.props.user.lastName}</h4>
          <Button variant='contained' color='secondary' onClick={this.props.logOut}>Log Out</Button>
        </React.Fragment>
      )
    } else {
      return (
        < React.Fragment >
          <h4>Here will be the inputs</h4>
          <Button variant='contained' color='secondary' onClick={this.props.logIn}>Log In</Button>
        </React.Fragment >
      )
    }
  }


  render() {
    return (
      <div>
        {this.renderAuth(this.props.auth.isLoggedIn)}
      </div>

    );
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    auth: state.auth
  }
}

export default connect(mapStateToProps, {logIn, logOut})(Auth);