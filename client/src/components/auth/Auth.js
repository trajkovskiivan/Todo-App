import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logIn, logOut} from '../../actions/index';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
          <TextField
            name="email"
            type="email"
            id="outlined-basic"
            label="e-mail"
            variant="outlined"
            autoComplete="off"
            onChange={(e) => this.handleInput(e)}
          />
          <TextField
            id="outlined-password-input"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => this.handleInput(e)}
          />
          <Button variant='contained' color='secondary' onClick={this.props.logIn}>Log In</Button>
        </React.Fragment >
      )
    }
  }


  render() {
    console.log(this.state)
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