import React from 'react';
import { useState } from 'react';
import './Slides.css';

function Slides({ slides }) {
  const [levl, setLevl] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isReset, setIsResest] = useState(true);

  const handleNext = () => {
    if (levl !== slides.length - 1) {
      setLevl(levl + 1);
      setIsPrevDisabled(false);
      setIsResest(false);
      console.log('next', levl);
    } else {
      setIsNextDisabled(true);
    }
  };

  const handlePrev = () => {
    if (levl !== 1) {
      console.log(levl);
      setLevl((prev) => prev - 1);
      setIsNextDisabled(false);
      setIsResest(false);
    } else {
      setLevl(0);
      setIsPrevDisabled(true);
      setIsResest(true);
      console.log('level else', levl);
    }
  };

  const handleReset = () => {
    setLevl(0);
    setIsResest(true);
    setIsPrevDisabled(true);
    setIsNextDisabled(false);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={isReset}
          data-testid="button-restart"
          className="small outlined"
          onClick={() => handleReset()}
        >
          Restart
        </button>
        <button
          disabled={isPrevDisabled}
          data-testid="button-prev"
          className="small"
          onClick={() => handlePrev()}
        >
          Prev
        </button>
        <button
          disabled={isNextDisabled}
          data-testid="button-next"
          className="small"
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[levl].title}</h1>
        level : {levl}
        <p data-testid="text">{slides[levl].text}</p>
      </div>
    </div>
  );
}

export default Slides;
