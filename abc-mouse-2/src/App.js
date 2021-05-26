import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

// import Home from './components/Home';
import RightNumber from './Components/Challenges/RightNumber';

function App() {
  return (
    <div className='App'>
      <p>Future ABC MOUSE clone with video conferencing</p>
      <Switch>
        <Route path='/right-number' component={RightNumber} />
      </Switch>
    </div>
  );
}

export default App;
