import { useState } from "react";
import "./Quiz.css";

function buildPhrase(words) {
  return words.map(({ word, display }) => (display ? word : "_")).join(" ");
}

function Quiz(props) {
  const [words, setWords] = useState(props.words);
  const [isCorrect, setIsCorrect] = useState(false);
  const phrase = buildPhrase(words);

  function handleClick(option) {
    const blankIndex = words.findIndex(({ display }) => !display);
    const newWords = [...words];
    newWords[blankIndex] = { word: option, display: true };
    setWords(newWords);
  }

  function checkAnswer() {
    const phrase = buildPhrase(words);
    setIsCorrect(phrase === props.answer);
  }

  return (
    <>
      <p className="phrase">{phrase}</p>
      <section>
        {props.options.map((option) => {
          return (
            <button
              className="option"
              key={option}
              onClick={() => handleClick(option)}
            >
              {option}
            </button>
          );
        })}
      </section>
      <>
        <button className={["option", "check"].join(" ")} onClick={checkAnswer}>
          Check
        </button>
        {isCorrect ? <p>Well done!</p> : null}
      </>
    </>
  );
}

export default Quiz;
