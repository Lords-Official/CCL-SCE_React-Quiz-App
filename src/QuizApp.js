import { useState } from 'react'
import { quizQuestions } from './questions.js'
import './QuizApp.css'

/**
 * The QuizApp function is a React component that displays a quiz with multiple choice questions and tracks the user's score and results.

 * @returns: The QuizApp component is being returned, which renders a quiz with multiple choice questions and displays the result at the end.
*/
const QuizApp = () => {
  /* `const [activeQuestion, setActiveQuestion] = useState(0)` is using the `useState` hook to declare a state variable `activeQuestion` with an initial value of 0, and a function `setActiveQuestion` to update the value of `activeQuestion`. This is used to keep track of the current question being
  displayed in the quiz. */
  const [activeQuestion, setActiveQuestion] = useState(0)

  /* `const [selectedAnswer, setSelectedAnswer] = useState('')` is using the `useState` hook to declare a state variable `selectedAnswer` with an initial value of an empty string, and a function `setSelectedAnswer` to update the value of `selectedAnswer`. This is used to keep track of the user's selected answer for the current question in the quiz. */
  const [selectedAnswer, setSelectedAnswer] = useState('')

  /* `const [showResult, setShowResult] = useState(false)` is using the `useState` hook to declare a state variable `showResult` with an initial value of `false`, and a function `setShowResult` to update the value of `showResult`. This is used to keep track of whether or not to display the quiz result at the end of the quiz. */
  const [showResult, setShowResult] = useState(false)

  /* `const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)` is using the `useState` hook to declare a state variable `selectedAnswerIndex` with an initial value of `null`, and a function `setSelectedAnswerIndex` to update the value of `selectedAnswerIndex`. This is used to keep track of the index of the user's selected answer for the current question in the quiz. It is
  initialized as `null` because no answer has been selected yet. */
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)

  /* `const [result, setResult] = useState({ score: 0, correctAnswers: 0, wrongAnswers: 0 })` is using the `useState` hook to declare a state variable `result` with an initial value of an object containing three properties: `score`, `correctAnswers`, and `wrongAnswers`, all initialized to 0. This is used to keep track of the user's quiz results, including their score and the number of correct and wrong answers. The `setResult` function can be used to update the value of `result` as needed. */
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  /* `const { questions } = quizQuestions` is destructuring the `questions` property from the `quizQuestions` object and assigning it to a new constant variable `questions`. This allows the `questions` array to be accessed and used within the `Quiz` component. */
  const { questions } = quizQuestions

  /* `const { question, choices, correctAnswer } = questions[activeQuestion]` is destructuring the properties `question`, `choices`, and `correctAnswer` from the object at the `activeQuestion` index of the `questions` array. This allows the `question`, `choices`, and `correctAnswer` values  for the current question to be accessed and used within the `Quiz` component. */
  const { question, choices, correctAnswer } = questions[activeQuestion]

  /**
   * The function updates the result and active question state variables and shows the result if it is the last question.
  */
  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  /**
   * The function sets the selected answer index and checks if the answer is correct.
   * @param answer - The answer parameter is a variable that represents the answer selected by the user.
   * @param index - The index parameter is the index of the answer option that was selected by the user.
  */
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  /**
   * The function adds a leading zero to a number if it is less than 10.
   * @param number - The parameter `number` is a number that we want to add a leading zero to if it is less than 10.
  */
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  /* The `return` statement is returning the JSX code that will be rendered on the screen. */
  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          { /* This code is rendering the current question number and the total number of questions in the quiz. It is using the `addLeadingZero` function to add a leading zero to the question number and total number of questions if they are less than 10. The `activeQuestion` variable is the current question number, and `questions.length` is the total number of questions in the quiz. The `className` attribute is being used to conditionally apply the `selected-answer` class to the selected answer option. */ }
          <div>
            <span className="active-question-number">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>

          <h2>{question}</h2>
          {/* This code is rendering a list of answer options for the current question in the quiz. It is using the `map` method to iterate over the `choices` array and create a new array of `li` elements for each answer option. The `onClick` attribute is being used to call the `onAnswerSelected` function when an answer option is clicked, passing in the `answer` and `index` parameters. The `key` attribute is being used to assign a unique key to each `li` element. The `className` attribute is being used to conditionally apply the `selected-answer` class to the selected answer option. The `answer` variable is being used to display the text of the answer option within the `li` element. The `ul` element is being used to wrap the list of answer options. */}
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                }>
                {answer}
              </li>
            ))}
          </ul>

          { /* This code is rendering a button that allows the user to move to the next question in the quiz. The `onClick` attribute is being used to call the `onClickNext` function when the button is clicked. The `disabled` attribute is being used to disable the button if no answer option has been selected for the current question. The `activeQuestion` variable is
          being used to determine whether the button should display "Next" or "Finish" text, depending on whether the current question is the last question in the quiz. The `className` attribute is being used to apply the `flex-right` class to the `div` element, which aligns the button to the right side of the screen. */ }
          <div className="bottom-right-buttons">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        /* This code is rendering the result of the quiz. It is conditionally rendered based on the `showResult` state variable. If `showResult` is `true`, it will display the result of the quiz. The result includes the total number of questions, the number of correct answers, the
        number of wrong answers, and the total score. The values for these properties are obtained from the `result` state variable. The `className` attribute is being used to apply the `result` class to the `div` element, which is used to style the result section of the quiz. */
        <div className="result">
          <h3>Result of Quiz</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
          <p className='total-score'>
            Total Score: <span> {result.score}</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default QuizApp