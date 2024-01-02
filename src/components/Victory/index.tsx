import React, { FC } from 'react';


const Victory: FC<{ victory: number }> = ({ victory }) => {
  return (
    <>
      {victory > 0 && (
        <div className="quote-letters-count">
          Victor{victory === 1 ? 'y' : 'ies'}:
          <span className="badge">You won {victory} times</span>
        </div>
      )}
    </>
  );
};


export default Victory;