import React from 'react';

import UserShow from './todos/UserShow';
import Button from '@material-ui/core/Button';
import './App.css'


const App = () => {
  return (
    <div>
      <h1>Todo-App</h1>
      <UserShow />
      <Button variant='contained' color='primary'>Click Me</Button>
    </div>


  );
};

export default App;