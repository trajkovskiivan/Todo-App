import React from 'react';



// eslint-disable-next-line
import {connect} from 'react-redux';
// eslint-disable-next-line
import {deleteTodo} from '../../actions/index';

import Button from '@material-ui/core/Button';




const Todo = ({deleteTodo, title, body}) => {

  // console.log(props._id)
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <Button variant='contained' color='secondary' onClick={deleteTodo}>Delete</Button>
    </div>);
}

export default Todo;






// class Todo extends React.Component {
//   removeOne = () => {
//     this.props.deleteTodo(this.props._id)
//   }
//   render() {
//     return (
//       <div>
//         <h3>{this.props.title}</h3>
//         <p>{this.props.body}</p>
//         <Button variant='contained' color='secondary' onClick={this.removeOne}>Delete</Button>
//       </div>
//     );
//   }
// }
// export default connect(null, {deleteTodo})(Todo);