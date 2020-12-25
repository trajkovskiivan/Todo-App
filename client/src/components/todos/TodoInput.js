import React, {Component} from 'react';

import {postTodo} from '../../actions/index'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';


class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
  }

  handleInput = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handlePost = async () => {
    this.props.postTodo(this.state.title, this.state.body);
    this.setState({
      title: "",
      body: ""
    })
  }


  render() {
    console.log('From the input', this.props)
    return (
      <div>
        <h4>TodoInput</h4>
        <form className="" >
          <TextField
            name="title"
            value={this.state.title}
            id="outlined-basic"
            label="Title"
            variant="outlined"
            autoComplete="off"
            onChange={(e) => this.handleInput(e)}
          />
          <br />
          <br />
          <TextField
            name="body"
            value={this.state.body}
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            autoComplete="off"
            onChange={(e) => this.handleInput(e)}
          />
          <br />
          <br />
          {/* <Button type="submit" variant='contained' color='primary' >Add Todo</Button> */}
          <Button variant='contained' color='primary' onClick={() => this.handlePost()} >Click Me</Button>
        </form>
      </div>
    );
  }
}

export default connect(null, {postTodo})(TodoInput);