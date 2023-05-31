import React, { useState, useEffect } from 'react';
import './index.scss';

function AlertGetEvents() {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`alert ${showAlert ? 'show' : ''}`}>
      Для просмотра событий необходимо авторизоваться!
    </div>
  );
}

export default AlertGetEvents;
