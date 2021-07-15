import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import "./Quiz.css";

const questions = [
  {
    question: "Who is PM of Pakistan in 2021?",
    answerOptions: [
      {
        answer: "Nawaz Shreef",
        isCorrect: false,
      },
      {
        answer: "Asif Zardari",
        isCorrect: false,
      },
      {
        answer: "Imran Khan",
        isCorrect: true,
      },
      {
        answer: "Siraj ul haq",
        isCorrect: false,
      },
    ],
  },

  {
    question: "Who is CEO of Tesla?",
    answerOptions: [
      {
        answer: "Tony Stark",
        isCorrect: false,
      },
      {
        answer: "Elon Musk",
        isCorrect: true,
      },
      {
        answer: "Jeff Bezos",
        isCorrect: false,
      },
      {
        answer: "Bill Gates",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which one is your favourite person?",
    answerOptions: [
      {
        answer: "Tayyab Urdwan",
        isCorrect: true,
      },
      {
        answer: "Shah Faisal",
        isCorrect: false,
      },
      {
        answer: "Donal Trump",
        isCorrect: true,
      },
      {
        answer: "Brat Obama",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the capital of Pakistan?",
    answerOptions: [
      {
        answer: "Lahore",
        isCorrect: false,
      },
      {
        answer: "karachi",
        isCorrect: false,
      },
      {
        answer: "Islamabad",
        isCorrect: true,
      },
      {
        answer: "Peshawar",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Who is your favourite Footbaler?",
    answerOptions: [
      {
        answer: "Messi",
        isCorrect: false,
      },
      {
        answer: "Ronaldo",
        isCorrect: true,
      },
      {
        answer: "Neymar",
        isCorrect: false,
      },
      {
        answer: "Paul Pogba",
        isCorrect: false,
      },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [addScore, setAddScore] = useState(0);
  const [isValidQuiz, setIsValidQuiz] = useState(false);

  const changeQuestionHandler = (correct) => {
    if (correct == true) {
      setAddScore(addScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    // setIsValidQuiz(true);
  };

  const resetQuizHandler = () => {
    setShowScore(false);
  };

  return (
    <Card>
      {!isValidQuiz && (
        <div className="container">
          {showScore ? (
            <div className="show-score">
              You scored {addScore} out of {questions.length}
              <button
                type="submit"
                className="reset-btn"
                onClick={resetQuizHandler}
              >
                Back To Quiz
              </button>
            </div>
          ) : (
            <React.Fragment>
              <div className="question-part">
                <div className="question-inner">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>

                <div className="current-question">
                  {questions[currentQuestion].question}
                </div>
              </div>

              <div className="answer-part">
                {questions[currentQuestion].answerOptions.map((curAns) => {
                  return (
                    <Button
                      onClick={() => changeQuestionHandler(curAns.isCorrect)}
                      type="submit"
                    >
                      {curAns.answer}
                    </Button>
                  );
                })}
              </div>
            </React.Fragment>
          )}
        </div>
      )}
    </Card>
  );
};

export default Quiz;
