import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

// import Home from './components/Home';
import NumberRecognition from './Components/Challenges/NumberRecognition';

function App() {
  return (
    <div className='App'>
      <p>Future ABC MOUSE clone with video conferencing</p>
      <Switch>
        <Route path='/right-number' component={NumberRecognition} />
      </Switch>
    </div>
  );
}

export default App;
