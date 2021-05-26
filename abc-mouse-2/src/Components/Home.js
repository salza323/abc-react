import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  let history = useHistory();

  return (
    <div>
      <h1>This is the Home</h1>
      <h2 onClick={history.push('/right-number')}>Right Number Game!</h2>
    </div>
  );
}

export default Home;
