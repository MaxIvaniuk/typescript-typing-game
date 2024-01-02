import React, { FC } from 'react';


const LettersCount: FC<{ quoteLetters: string }> = ({
  quoteLetters
}) => (
  <div className="quote-letters-count">
    Symbols left:
    <span className="badge">{quoteLetters?.length}</span>
  </div>
);


export default LettersCount;