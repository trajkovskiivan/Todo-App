import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUser} from '../../actions'




class UserShow extends Component {


  componentDidMount() {
    // console.log(this.props)
    this.props.fetchUser();
  }

  render() {
    console.log(this.props.user)
    return (
      <div >
        <h1>Wellcome {this.props.user.firstName} {this.props.user.lastName}</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  // console.log(state);
  return state
}

export default connect(mapStateToProps, {fetchUser})(UserShow);