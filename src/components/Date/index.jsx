import { today } from '@constants';
import dateFormat from 'dateformat';
import React from 'react';

import './index.scss';
import Clock from './Clock';

function Date() {
  return (
    <div className='date'>
      <h2 className='date__time'>
        <Clock />
      </h2>
      <h3 className='date__more'>{dateFormat(today, 'fullDate')} </h3>
    </div>
  );
}

export default Date;
