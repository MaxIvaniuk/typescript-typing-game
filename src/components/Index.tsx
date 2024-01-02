import React, { useEffect, useState, KeyboardEvent, FC } from "react";
import _sample from "lodash/sample";
import _round from "lodash/round";

import ConfettiSplash from "./ConfettiSplash";
import LettersCount from "./LettersCount";
import Status from "./Status";
import Victory from "./Victory";
import ErrorCounter from "./ErrorsCount";

import quotes from "../data/quotes.json";
import sound from "../../src/content/wrong.mp3";

import "./index.scss";

const returnQuoteLetters = (quote: string) =>
  quote.replace(/\s/g, "").split("_").join("");
const generateQuote = () => _sample(quotes);

const Index = () => {
  const [confetti, setConfetti] = useState(false);
  const [start, setStart] = useState<undefined | boolean>();
  const [victory, setVictory] = useState(0);
  const [exception, setException] = useState(generateQuote);
  const [enteredVal, setEnteredVal] = useState<any>('')
  const quoteLetters = returnQuoteLetters(exception);
  const [counter, setCounter] = useState(_round(quoteLetters.length * 0.5));
  const [errorsCounter, setErrorsCounter] = useState<number>(0)

  const countError = (count: number) => (count + 1)
  
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
  
      if (exception.startsWith(key)) {
        setEnteredVal([...enteredVal, key])
        setException(exception.slice(1));
      } else if (!exception.startsWith(key) && key !== "Shift"){
        const audio = new Audio(sound);
        audio.play();
        setErrorsCounter(countError)
      }
    };

    window.addEventListener("keydown", keyDownHandler, false);
    return () => window.removeEventListener("keydown", keyDownHandler, false);
  }, [exception]);


  useEffect(() => {
    const timer = counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);

    if (counter === 0) {
      setStart(false);
    }

    return () => clearInterval(timer);
  }, [counter]);


  useEffect(() => {
    if (!quoteLetters) {
      const newQuote = generateQuote();
      setVictory(victory + 1);
      setConfetti(true);
      setEnteredVal('')
      setErrorsCounter(0)
      setException(newQuote);
      setCounter(_round(returnQuoteLetters(newQuote).length / 0.5));
      setTimeout(() => setConfetti(false), 4000);
    }
  }, [victory, exception]);


  useEffect(() => {
    if (start) {
      const newQuote = generateQuote();
      setVictory(0);
      setException(newQuote);
      setCounter(_round(returnQuoteLetters(newQuote).length / 0.5));
    }
  }, [start]);


  return (
    <>
      <ConfettiSplash confetti={confetti} />
      <div className="section-quote">
        <div className="wrapper">
          {start ? (
            <>
              <div className="timer">Timer:{counter}</div>
              <h1><span>{enteredVal}</span>{exception}</h1>
              <div className="info-wrapper">
                <LettersCount quoteLetters={quoteLetters} />
                <Victory victory={victory} />
                <ErrorCounter errors={errorsCounter}/>
              </div>
            </>
          ) : (
            <Status start={start} setStart={setStart} />
          )}
        </div>
      </div>
    </>
  );
};


export default Index;