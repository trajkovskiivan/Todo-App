import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUser, deleteUser} from '../../actions';



import TodoList from './TodoList';
import TodoInput from './TodoInput';
import DeleteUser from './DeleteUser';

const style = {
  color: "blue", textDecoration: "underline", cursor: "pointer"
}


class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteIsClicked: false
    }
  }

  changeVisibility = () => {
    this.setState({
      deleteIsClicked: !this.state.deleteIsClicked
    })
  }
  renderDeleteOpthion = () => {
    if (this.state.deleteIsClicked === false) {
      return <p>Don't like this app? <span style={style} onClick={() => this.changeVisibility()}>Delete your account</span></p>
    } else if (this.state.deleteIsClicked === true) {
      return (
        <div>
          <h3 style={style} onClick={this.changeVisibility}>X</h3>
          <DeleteUser user={this.props.user} changeVisibility={this.changeVisibility} deleteUser={this.props.deleteUser} />
        </div>
      )
    }

  }


  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(this.state.deleteIsClicked)
    return (
      <div >
        <h4>Wellcome {this.props.user.firstName}</h4>
        {this.renderDeleteOpthion()}
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

export default connect(mapStateToProps, {fetchUser, deleteUser})(UserShow);