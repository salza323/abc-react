import React, { useState } from 'react';
import Sheet from './Sheet';
import './Scoresheet.scss';

const Scoresheet = ({ games }) => {
  return (
    <div className='scoresheet'>
      <div className='scoresheet__container'>
        {games.map((game, index) => {
          return <Sheet game={game} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Scoresheet;
