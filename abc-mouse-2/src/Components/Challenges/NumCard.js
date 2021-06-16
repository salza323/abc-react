import React, { useState } from 'react';

import './NumCard.scss';

const NumCard = ({ num, rightRandomNumber }) => {
  const [selectedNumber, setSelectedNumber] = useState(0);

  const selectNumber = (event, num) => {
    console.log(num);
    // console.log('number selected', numberSelected);
    // setSelectedNumber(num);
    // compareNums(selectedNumber, rightRandomNumber);
    // console.log('selected number', selectedNumber);
  };

  function compareNums(selectedNumber, rightRandomNumber) {
    if (selectedNumber === rightRandomNumber) {
      console.log('correct');
    } else {
      console.log('incorrect');
    }
  }

  //   const numberGuess = document.getElementById('numberGuess');
  //   console.log('number guess', numberGuess);

  return (
    <>
      <div className='number-card'>
        <button
          className={'card__button'}
          onClick={(event) => selectNumber(event, num)}
          id={`numberGuess-${num}`}
        >
          <p className='button__paragraph'>{num}</p>
        </button>
      </div>
    </>
  );
};

export default NumCard;
