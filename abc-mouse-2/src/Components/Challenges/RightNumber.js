import React from 'react';

import NumCard from './NumCard';

function RightNumber() {
  const rightRandomNumber = Math.floor(Math.random() * 11);
  const numbers = uniqueInts();

  function uniqueInts() {
    let numList = [];
    while (numList.length < 3) {
      for (let i = 1; i <= 3; i++) {
        let int = Math.floor(Math.random() * 11);

        if (numList.includes(int) === false && numList.length < 3) {
          numList.push(int);
        }
      }
    }
    return numList;
  }

  return (
    <div>
      <h1>Select the correct number</h1>
      <h3>{rightRandomNumber}</h3>
      <>
        {numbers.map((num, index) => (
          <NumCard key={index} num={num} />
        ))}
      </>
    </div>
  );
}

export default RightNumber;
