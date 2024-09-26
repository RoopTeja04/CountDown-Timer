import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {

  const [ sec, SetSec ] = useState(0);
  const [ min, SetMin ] = useState(0);
  const [ hour, SetHour ] = useState(0);
  const [ days, SetDays ] = useState(0);
  const [ isRunning, setIsRunning ] = useState(false);
  const [ isVisible, setIsVisible ] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setTimeout(() => {
        SetSec((sec) => sec + 1);
        if (sec === 59){
          SetSec(0);
          SetMin((min) => min + 1);
          if (min === 59){
            SetMin(0);
            SetHour((hour) => hour + 1)
            if (hour === 59){
              SetHour(0);
              SetDays((days) => days + 1);
            }
          }
        }
      }, 1000); 
    }
  })

  const handleStart = () => {
    setIsRunning(true);
    setIsVisible(false);
  }

  const handleReset = () => {
    setIsRunning(false);
    SetSec(0);
    SetMin(0);
    SetHour(0);
    SetDays(0);
    setIsVisible(true);
  }
  return (
    <>
      <div className='Count-down'>
        <h1 className='heading'> Count Down Timer </h1>
        <div className='numbers-iterate'>
          {
            isRunning && (
              <div>
                <span className='numbers'>{days.toString().padStart(2, '0')} : {hour.toString().padStart(2, '0')} : {min.toString().padStart(2, '0')} : {sec.toString().padStart(2, '0')}</span>
              </div>
            )
          }
        </div>
      </div>
      {
        isVisible && (
          <button className='startBtn' onClick={handleStart}>Start</button>
        )
      }
      {
        isRunning && (
          <button onClick={handleReset} className='resetBtn'>Reset</button>
        )
      }
    </>
  )
}

export default App;