import React, { useState } from 'react';
import classnames from 'classnames/bind';
import RESULT_TYPES from './ResultTypes';
import './Sheet.scss';

const Sheet = ({ game, index }) => {
  const cn = classnames({
    sheet__result: true,
    'sheet__result--default': game.result === RESULT_TYPES.DEFAULT,
    'sheet__result--success': game.result === RESULT_TYPES.SUCCESS,
    'sheet__result--fail': game.result === RESULT_TYPES.FAIL,
  });
  return (
    <div className='sheet'>
      <p className='sheet__label'>Game {index}</p>
      <div className={cn}>{game.result}</div>
    </div>
  );
};

export default Sheet;
