import React, { useState } from 'react'
import './Quiz.css'

const questions = [
  {
    question: "1. In React, which hook is used to manage state in a functional component?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    correctAnswer: "useState"
  },
  {
    question: "2. Which method is used to add an element at the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()"
  },
  {
    question: "3. What will `typeof null` return in JavaScript?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    correctAnswer: "'object'"
  },
  {
    question: "4. Which React hook is used to perform side effects like API calls?",
    options: ["useReducer", "useMemo", "useEffect", "useState"],
    correctAnswer: "useEffect"
  },
  {
    question: "5. In JavaScript, which operator is used for strict equality check?",
    options: ["=", "==", "===", "!="],
    correctAnswer: "==="
  }
];

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const checkAns = (option) => {
    setSelected(option);
  };

  const nextQue = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
    }
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{questions[index].question}</h2>
      <ul>
        {questions[index].options.map((option, i) => (
          <li
            key={i}
            onClick={() => checkAns(option)}
            className={
              selected === option
                ? option === questions[index].correctAnswer
                  ? "correct"
                  : "wrong"
                : ""
            }>
            {option}
          </li>
        ))}
      </ul>
      <button onClick={nextQue}>Next</button>
      <div className='index'>
        Question {index + 1} of {questions.length}
      </div>
    </div>
  )
}

export default Quiz
