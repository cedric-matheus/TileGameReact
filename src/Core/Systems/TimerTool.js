import React from 'react';
import { useState, useEffect } from 'react';

const Timer = (totalMinutes = 0, totalscounds = 30) => {
  const [minutes, setMinutes] = useState(totalMinutes);
  const [seconds, setSeconds] = useState(totalscounds);

  //@CEDRIC eu acho que não vou conseguir isolar este effect aqui do componente
  // ja que o effect fica bem fixado ao comp em hook, talvez precisamos repensar nosso modelo
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {' '}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  );
};

export default Timer;
