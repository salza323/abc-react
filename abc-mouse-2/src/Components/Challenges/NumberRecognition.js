import React, { useState } from 'react';

import NumCard from './NumCard';
import ScoreSheet from './Scoresheet';

import './NumberRecognition.scss';

function NumberRecognition() {
  const rightRandomNumber = Math.floor(Math.random() * 11);
  const numbers = uniqueInts();

  // TODO REMOVE AND USE REAL DATA
  const games = [
    { result: 1 },
    { result: 2 },
    { result: 1 },
    { result: 0 },
    { result: 0 },
    { result: 0 },
    { result: 1 },
    { result: 2 },
    { result: 1 },
    { result: 0 },
    { result: 0 },
    { result: 0 },
  ];

  function uniqueInts() {
    let numList = [];
    while (numList.length < 3) {
      let int = Math.floor(Math.random() * 11);

      if (numList.includes(int) === false) {
        numList.push(int);
      }
    }
    return numList;
  }

  return (
    <div className='number-recognition'>
      <h1 className='number-recognition__title title--h1'>
        Select the correct number
      </h1>
      <h3 className='number-recognition__title title--h3'>
        {rightRandomNumber}
      </h3>
      <div className='number-recognition__NumCard'>
        {[0, 1, 2, 3, 4, 5].map((num, index) => (
          <NumCard
            key={index}
            num={num}
            rightRandomNumber={rightRandomNumber}
          />
        ))}
      </div>

      <ScoreSheet games={games} />
    </div>
  );
}

export default NumberRecognition;
