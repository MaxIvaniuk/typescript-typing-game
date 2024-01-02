import React, { FC } from 'react';


const Status: FC<{
  start: boolean | undefined;
  setStart: (value: boolean) => void;
}> = ({ start, setStart }) => (
  <>
    <h1>
      {typeof start === 'undefined'
        ? `The goal of the game is to type the letters and symbols, excluding spaces, as quickly as possible to beat the timer.`
        : `Oh no you lose.`}
    </h1>
    <div className="start-btn-wrapper">
        <button onClick={() => setStart(true)}>{
            typeof start === 'undefined'
                ? 'Lets go!'
                : 'Try again!'
            }
        </button>
    </div>
  </>
);


export default Status;