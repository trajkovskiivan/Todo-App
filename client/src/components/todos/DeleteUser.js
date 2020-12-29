import React, {Component} from 'react';


import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';


class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
      <React.Fragment>

        <Button variant='contained' color='secondary' onClick={() => this.props.deleteUser(this.props.user.email, this.state.password)}>Delete Account</Button>
        <Button variant='contained' color='default' onClick={() => this.props.changeVisibility()} >Cancel</Button>

      </React.Fragment >
    )
  };

  renderContent() {
    console.log(this.state)
    console.log(this.props)
    return (
      <div >
        <h4>Sorry to see you go {this.props.user.firstName}</h4>
        <label htmlFor="password">Please enter your password:</label>
        <br />
        <input type='password' name='password' placeholder={`password for ${this.props.user.email}`} value={this.state.password} onChange={(e) => this.handleInput(e)} />

      </div >
    )
  }




  render() {
    console.log(this.state)
    return (
      <div>
        {this.renderContent()}
        {this.renderActions()}
      </div>
    );
  }



}

export default connect(null)(DeleteUser);






