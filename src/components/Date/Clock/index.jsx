import { UPDATE_THE_TIME } from '@constants';
import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, UPDATE_THE_TIME);
    return () => clearInterval(timerID);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}

export default Clock;
