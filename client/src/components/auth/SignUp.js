import React from 'react';
import Modal from '../Modal';
import {Link} from 'react-router-dom';
import history from '../../history';

import {createUser} from '../../actions'


import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';



class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  renderActions = () => {
    const {firstName, lastName, email, password} = this.state
    return (
      <React.Fragment>
        <Link to='/'>
          <Button variant='contained' color='primary' onClick={() => this.props.createUser(firstName, lastName, email, password)}>Sign Up</Button>
        </Link>

        <Link to='/'>
          <Button variant='contained' color='default'  >Cancel</Button>
        </Link>
      </React.Fragment >
    )
  };
  renderContent() {
    console.log(this.state)
    return (
      <div >
        <form>
          <label htmlFor="firstName">First Name:</label> <br />
          <input name="firstName" type='text' placeholder='First Name' autoComplete="off" value={this.state.firstName} onChange={(e) => this.handleInput(e)} />
          <br />
          <br />
          <label htmlFor="lastName">Last Name:</label> <br />
          <input type='text' name="lastName" placeholder="Last Name" autoComplete="off" value={this.state.lastName} onChange={(e) => this.handleInput(e)} />
          <br />
          <br />
          <label htmlFor="email">e-mail:</label> <br />
          <input type='email' name='email' placeholder="e-mail" autoComplete="off" value={this.state.email} onChange={(e) => this.handleInput(e)} />
          <br />
          <br />
          <label htmlFor="password">Password:</label> <br />
          <input type='password' name='password' placeholder="password" value={this.state.password} onChange={(e) => this.handleInput(e)} />
        </form>
      </div >
    )
  }
  render() {
    return (
      <div>
        SIgnup
        <Modal
          title='Sign Up'
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }

}

export default connect(null, {createUser})(SignUp);