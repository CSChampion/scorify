import React from 'react';
import { useEffect, useState } from "react";
import '../index.css';

export const Math = () => {
    return (
      <div className='homepage'>
        <h2>Math</h2>
        <h5>Welcome to Math on Scorify! In this section, we cover the following topics:
          Algebra, Trigonometry, Probability and Mensuration.
        </h5>
      </div>
    );
  };
  
  export const Math1 = () => {
    const questions = [
      {
        questionText: 'Graphically, the pair of equations 7x - y = 5; 21x - 3y = 10 represents two lines which are',
        answerOptions: [
          { answerText: 'intersecting at one point', isCorrect: false },
          { answerText: 'parallel', isCorrect: true },
          { answerText: 'intersecting at two points', isCorrect: false },
          { answerText: 'coincident', isCorrect: false },
        ],
      },
      {
        questionText: 'The pair of equations 3x – 5y = 7 and – 6x + 10y = 7 have',
        answerOptions: [
          { answerText: 'a unique solution', isCorrect: false },
          { answerText: 'infinitely many solutions', isCorrect: false },
          { answerText: 'no solution', isCorrect: true },
          { answerText: 'two solutions', isCorrect: false },
        ],
      },
      {
        questionText: 'If a pair of linear equations is consistent, then the lines will be',
        answerOptions: [
          { answerText: 'always coincident', isCorrect: false },
          { answerText: 'parallel', isCorrect: false },
          { answerText: 'always intersecting', isCorrect: false },
          { answerText: 'intersecting or coincident', isCorrect: true },
        ],
      },
      {
        questionText: 'The pair of equations x = 0 and x = 5 has',
        answerOptions: [
          { answerText: 'no solution', isCorrect: false },
          { answerText: 'unique/one solution', isCorrect: false },
          { answerText: 'two solutions', isCorrect: true },
          { answerText: 'infinitely many solutions', isCorrect: false },
        ],
      },
          {
        questionText: 'The pair of equation x = – 4 and y = – 5 graphically represents lines which are',
        answerOptions: [
          { answerText: 'intersecting at (- 5, – 4)', isCorrect: false },
          { answerText: 'intersecting at (- 4, – 5)', isCorrect: true },
          { answerText: 'intersecting at (5, 4)', isCorrect: false },
          { answerText: 'intersecting at (4, 5)', isCorrect: false },
        ],
      },
          {
        questionText: 'One equation of a pair of equations is 2x + 5y = 3. The second equation will be',
        answerOptions: [
          { answerText: '2x + 5y = 6', isCorrect: false },
          { answerText: '3x + 5y = 3', isCorrect: false },
          { answerText: '-10x – 25y + 15 = 0', isCorrect: true },
          { answerText: '10x + 25y = 15', isCorrect: false },
        ],
      },
          {
        questionText: 'The graph of the equation 2x + 3y = 5 is a',
        answerOptions: [
          { answerText: 'vertical line', isCorrect: false },
          { answerText: 'straight line', isCorrect: true },
          { answerText: 'horizontal line', isCorrect: false },
          { answerText: 'none of these', isCorrect: false },
        ],
      },
          {
        questionText: 'The graph of x = -2 is a line parallel to the',
        answerOptions: [
          { answerText: 'x-axis', isCorrect: false },
          { answerText: 'y-axis', isCorrect: true },
          { answerText: 'both x- and y-axis', isCorrect: false },
          { answerText: 'none of these', isCorrect: false },
        ],
      },
          {
        questionText: 'Two equations in two variables taken together are called',
        answerOptions: [
          { answerText: 'linear equations', isCorrect: false },
          { answerText: 'quadratic equations', isCorrect: false },
          { answerText: 'simultaneous equations', isCorrect: true },
          { answerText: 'none of these', isCorrect: false },
        ],
      },
          {
        questionText: 'If in the equation x + 2y = 10, the value of y is 6, then the value of x will be',
        answerOptions: [
          { answerText: '-2', isCorrect: false },
          { answerText: '2', isCorrect: false },
          { answerText: '4', isCorrect: false },
          { answerText: '5', isCorrect: true },
        ],
      },
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
    return (
          <div> <h1>Algebra</h1>
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
          </div>
    );
  };
  
  // export const Math2 = () => {
  //   const questions = [
  //     {
  //       questionText: 'What is the capital of France?',
  //       answerOptions: [
  //         { answerText: 'New York', isCorrect: false },
  //         { answerText: 'London', isCorrect: false },
  //         { answerText: 'Paris', isCorrect: true },
  //         { answerText: 'Dublin', isCorrect: false },
  //       ],
  //     },
  //     {
  //       questionText: 'Who is CEO of Tesla?',
  //       answerOptions: [
  //         { answerText: 'Jeff Bezos', isCorrect: false },
  //         { answerText: 'Elon Musk', isCorrect: true },
  //         { answerText: 'Bill Gates', isCorrect: false },
  //         { answerText: 'Tony Stark', isCorrect: false },
  //       ],
  //     },
  //     {
  //       questionText: 'The iPhone was created by which company?',
  //       answerOptions: [
  //         { answerText: 'Apple', isCorrect: true },
  //         { answerText: 'Intel', isCorrect: false },
  //         { answerText: 'Amazon', isCorrect: false },
  //         { answerText: 'Microsoft', isCorrect: false },
  //       ],
  //     },
  //     {
  //       questionText: 'How many Harry Potter books are there?',
  //       answerOptions: [
  //         { answerText: '1', isCorrect: false },
  //         { answerText: '4', isCorrect: false },
  //         { answerText: '6', isCorrect: false },
  //         { answerText: '7', isCorrect: true },
  //       ],
  //     },
  //         {
  //       questionText: 'How many Harry Potter books are there?',
  //       answerOptions: [
  //         { answerText: '1', isCorrect: false },
  //         { answerText: '4', isCorrect: false },
  //         { answerText: '6', isCorrect: false },
  //         { answerText: '7', isCorrect: true },
  //       ],
  //     },
  //         {
  //       questionText: 'How many Harry Potter books are there?',
  //       answerOptions: [
  //         { answerText: '1', isCorrect: false },
  //         { answerText: '4', isCorrect: false },
  //         { answerText: '6', isCorrect: false },
  //         { answerText: '7', isCorrect: true },
  //       ],
  //     },
  //         {
  //       questionText: 'How many Harry Potter books are there?',
  //       answerOptions: [
  //         { answerText: '1', isCorrect: false },
  //         { answerText: '4', isCorrect: false },
  //         { answerText: '6', isCorrect: false },
  //         { answerText: '7', isCorrect: true },
  //       ],
  //     },
  //         {
  //       questionText: 'How many Harry Potter books are there?',
  //       answerOptions: [
  //         { answerText: '1', isCorrect: false },
  //         { answerText: '4', isCorrect: false },
  //         { answerText: '6', isCorrect: false },
  //         { answerText: '7', isCorrect: true },
  //       ],
  //     },
  //         {
  //       questionText: 'How many Harry Potter books are there?',
  //       answerOptions: [
  //         { answerText: '1', isCorrect: false },
  //         { answerText: '4', isCorrect: false },
  //         { answerText: '6', isCorrect: false },
  //         { answerText: '7', isCorrect: true },
  //       ],
  //     },
  //         {
  //       questionText: 'How many Harry Potter books are there?',
  //       answerOptions: [
  //         { answerText: '1', isCorrect: false },
  //         { answerText: '4', isCorrect: false },
  //         { answerText: '6', isCorrect: false },
  //         { answerText: '7', isCorrect: true },
  //       ],
  //     },
  //   ];
  
  //   const [currentQuestion, setCurrentQuestion] = useState(0);
  //   const [showScore, setShowScore] = useState(false);
  //   const [score, setScore] = useState(0);
  
  //   const handleAnswerOptionClick = (isCorrect) => {
  //     if (isCorrect) {
  //       setScore(score + 1);
  //     }
  
  //     const nextQuestion = currentQuestion + 1;
  //     if (nextQuestion < questions.length) {
  //       setCurrentQuestion(nextQuestion);
  //     } else {
  //       setShowScore(true);
  //     }
  //   };
  //   return (
  //         <div> <h1>Geometry</h1>
  //     <div className='app'>
  //       {showScore ? (
  //         <div className='score-section'>
  //           You scored {score} out of {questions.length}
  //         </div>
  //       ) : (
  //         <>
  //           <div className='question-section'>
  //             <div className='question-count'>
  //               <span>Question {currentQuestion + 1}</span>/{questions.length}
  //             </div>
  //             <div className='question-text'>{questions[currentQuestion].questionText}</div>
  //           </div>
  //           <div className='answer-section'>
  //             {questions[currentQuestion].answerOptions.map((answerOption) => (
  //               <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
  //             ))}
  //           </div>
  //         </>
  //       )}
  //     </div>
  //         </div>
  //   );
  // };
  
  export const Math3 = () => {
    const questions = [
      {
        questionText: 'In ∆ ABC, right-angled at B, AB = 24 cm, BC = 7 cm. The value of tan C is:',
        answerOptions: [
          { answerText: '12/7', isCorrect: false },
          { answerText: '24/7', isCorrect: true },
          { answerText: '20/7', isCorrect: false },
          { answerText: '7/24', isCorrect: false },
        ],
      },
      {
        questionText: '(Sin 30°+cos 60°)-(sin 60° + cos 30°) is equal to:',
        answerOptions: [
          { answerText: '0', isCorrect: false },
          { answerText: '1+2√3', isCorrect: false },
          { answerText: '1-√3', isCorrect: true },
          { answerText: '1+√3', isCorrect: false },
        ],
      },
      {
        questionText: 'The value of tan 60°/cot 30° is equal to:',
        answerOptions: [
          { answerText: '0', isCorrect: false },
          { answerText: '1', isCorrect: true },
          { answerText: '2', isCorrect: false },
          { answerText: '3', isCorrect: false },
        ],
      },
      {
        questionText: '1 – cos²A is equal to:',
        answerOptions: [
          { answerText: 'sin²A', isCorrect: true },
          { answerText: 'tan²A', isCorrect: false },
          { answerText: '1 - sin²A', isCorrect: false },
          { answerText: 'sec²A', isCorrect: false },
        ],
      },
          {
        questionText: 'sin (90° – A) and cos A are:',
        answerOptions: [
          { answerText: 'Different', isCorrect: false },
          { answerText: 'Same', isCorrect: true },
          { answerText: 'Not related', isCorrect: false },
          { answerText: 'None of the above', isCorrect: false },
        ],
      },
          {
        questionText: 'If cos X = ⅔ then tan X is equal to:',
        answerOptions: [
          { answerText: '5/2', isCorrect: false },
          { answerText: '√(5/2)', isCorrect: false },
          { answerText: '√5/2', isCorrect: true },
          { answerText: '2/√5', isCorrect: false },
        ],
      },
          {
        questionText: 'If cos X = a/b, then sin X is equal to:',
        answerOptions: [
          { answerText: '(b²-a²)/b', isCorrect: false },
          { answerText: '(b-a)/b', isCorrect: false },
          { answerText: '√(b²-a²)/b', isCorrect: true },
          { answerText: '√(b-a)/b', isCorrect: false },
        ],
      },
          {
        questionText: 'The value of sin 60° cos 30° + sin 30° cos 60° is:',
        answerOptions: [
          { answerText: '0', isCorrect: false },
          { answerText: '1', isCorrect: true },
          { answerText: '2', isCorrect: false },
          { answerText: '3', isCorrect: false },
        ],
      },
          {
        questionText: '2 tan 30°/(1 + tan²30°) =',
        answerOptions: [
          { answerText: 'sin 60°', isCorrect: true },
          { answerText: 'cos 60°', isCorrect: false },
          { answerText: 'tan 60°', isCorrect: false },
          { answerText: 'sin 30°', isCorrect: false },
        ],
      },
          {
        questionText: 'sin 2A = 2 sin A is true when A =',
        answerOptions: [
          { answerText: '30°', isCorrect: false },
          { answerText: '45°', isCorrect: false },
          { answerText: '0°', isCorrect: true },
          { answerText: '60°', isCorrect: false },
        ],
      },
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
    return (
          <div> <h1>Trigonometry</h1>
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
          </div>
    );
  };

  export const Math4 = () => {
    const questions = [
      {
        questionText: 'The probability of event equal to zero is called;',
        answerOptions: [
          { answerText: 'Unsure event', isCorrect: false },
          { answerText: 'Sure Event', isCorrect: false },
          { answerText: 'Impossible event', isCorrect: true },
          { answerText: 'Independent event', isCorrect: false },
        ],
      },
      {
        questionText: 'The probability that cannot exist from the following is:',
        answerOptions: [
          { answerText: '⅔', isCorrect: false },
          { answerText: '-1.5', isCorrect: true },
          { answerText: '15%', isCorrect: false },
          { answerText: '0.7', isCorrect: false },
        ],
      },
      {
        questionText: 'If P(E) = 0.07, then what is the probability of ‘not E’?',
        answerOptions: [
          { answerText: '0.93', isCorrect: true },
          { answerText: '0.95', isCorrect: false },
          { answerText: '0.89', isCorrect: false },
          { answerText: '0.90', isCorrect: false },
        ],
      },
      {
        questionText: 'If P(A) denotes the probability of an event A, then',
        answerOptions: [
          { answerText: 'P(A) < 0', isCorrect: false },
          { answerText: 'P(A) > 1', isCorrect: false },
          { answerText: '0 ≤ P(A) ≤ 1', isCorrect: true },
          { answerText: '–1 ≤ P(A) ≤ 1', isCorrect: false },
        ],
      },
          {
        questionText: 'A bag has 3 red balls and 5 green balls. If we take a ball from the bag, then what is the probability of getting a red ball?',
        answerOptions: [
          { answerText: '3', isCorrect: false },
          { answerText: '8', isCorrect: false },
          { answerText: '³/₈', isCorrect: true },
          { answerText: '⁸/₃', isCorrect: false },
        ],
      },
          {
        questionText: 'The probability that a non leap year selected at random will contain 53 Sundays is',
        answerOptions: [
          { answerText: '¹/₇', isCorrect: true },
          { answerText: '²/₇', isCorrect: false },
          { answerText: '³/₇', isCorrect: false },
          { answerText: '⁵/₇', isCorrect: false },
        ],
      },
          {
        questionText: 'A dice is thrown in the air. The probability of getting odd numbers is',
        answerOptions: [
          { answerText: '¹/₂', isCorrect: true },
          { answerText: '³/₂', isCorrect: false },
          { answerText: '3', isCorrect: false },
          { answerText: '4', isCorrect: false },
        ],
      },
          {
        questionText: 'If we throw two coins in the air, then the probability of getting both tails will be:',
        answerOptions: [
          { answerText: '½', isCorrect: false },
          { answerText: '¼', isCorrect: true },
          { answerText: '2', isCorrect: false },
          { answerText: '4', isCorrect: false },
        ],
      },
          {
        questionText: 'If two dice are thrown in the air, the probability of getting sum as 3 will be',
        answerOptions: [
          { answerText: '¹/₁₈', isCorrect: false },
          { answerText: '²/₁₈', isCorrect: false },
          { answerText: '³/₁₈', isCorrect: true },
          { answerText: '¹/₃₆', isCorrect: false },
        ],
      },
          {
        questionText: 'A card is drawn from the set of 52 cards. Find the probability of getting a queen card.',
        answerOptions: [
          { answerText: '¹/₂₆', isCorrect: false },
          { answerText: '¹/₁₃', isCorrect: true },
          { answerText: '⁴/₁₃', isCorrect: false },
          { answerText: '⁴/₅₃', isCorrect: false },
        ],
      },
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
    return (
          <div> <h1>Probability</h1>
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
          </div>
    );
  };

  export const Math5 = () => {
    const questions = [
      {
        questionText: 'The slant height of the frustum of a cone having radii of two ends as 5 cm and 2 cm respectively and height 4 cm is',
        answerOptions: [
          { answerText: '√26 cm', isCorrect: false },
          { answerText: '5 cm', isCorrect: true },
          { answerText: '√65 cm', isCorrect: false },
          { answerText: '25 cm', isCorrect: false },
        ],
      },
      {
        questionText: 'The total surface area of a hemispherical solid having radius 7 cm is',
        answerOptions: [
          { answerText: '462 cm²', isCorrect: true },
          { answerText: '294 cm²', isCorrect: false },
          { answerText: '588 cm²', isCorrect: false },
          { answerText: '154 cm²', isCorrect: false },
        ],
      },
      {
        questionText: 'The surface area of a sphere is 616 cm². Its radius is',
        answerOptions: [
          { answerText: '7 cm', isCorrect: true },
          { answerText: '14 cm', isCorrect: false },
          { answerText: '21 cm', isCorrect: false },
          { answerText: '28 cm', isCorrect: false },
        ],
      },
      {
        questionText: 'The volume of a sphere is 4851 cm³. Its diameter is',
        answerOptions: [
          { answerText: '3.5 cm', isCorrect: false },
          { answerText: '7 cm', isCorrect: false },
          { answerText: '14 cm', isCorrect: false },
          { answerText: '21 cm', isCorrect: true },
        ],
      },
          {
        questionText: 'The base radii of two circular cones of the same height are in the ratio 3 : 5. The ratio of their volumes are',
        answerOptions: [
          { answerText: '9 : 25', isCorrect: true },
          { answerText: '5 : 3', isCorrect: false },
          { answerText: '9 : 5', isCorrect: false },
          { answerText: '3 : 25', isCorrect: false },
        ],
      },
          {
        questionText: 'The curved surface area of glass having radii 3 cm and 4 cm respectively and slant height 10 cm is',
        answerOptions: [
          { answerText: '55 cm²', isCorrect: false },
          { answerText: '110 cm²', isCorrect: false },
          { answerText: '220 cm²', isCorrect: true },
          { answerText: '440 cm²', isCorrect: false },
        ],
      },
          {
        questionText: 'The radii of the top and bottom of a bucket of slant height 13 cm are 9 cm and 4 cm respectively. The height of the bucket is',
        answerOptions: [
          { answerText: '10 cm', isCorrect: false },
          { answerText: '12 cm', isCorrect: true },
          { answerText: '15 cm', isCorrect: false },
          { answerText: '16 cm', isCorrect: false },
        ],
      },
          {
        questionText: 'A right circular cylinder of radius r cm and height h cm (h>2r) just encloses a sphere of diameter',
        answerOptions: [
          { answerText: 'r cm', isCorrect: false },
          { answerText: '2r cm', isCorrect: true },
          { answerText: 'h cm', isCorrect: false },
          { answerText: '2h cm', isCorrect: false },
        ],
      },
          {
        questionText: 'The diameters of the two circular ends of the bucket are 44 cm and 24 cm. The height of the bucket is 35 cm. The capacity of the bucket is',
        answerOptions: [
          { answerText: '32.7 liters', isCorrect: false },
          { answerText: '33.7 litres ', isCorrect: false },
          { answerText: '34.7 litres', isCorrect: false },
          { answerText: '31.7 litres', isCorrect: true },
        ],
      },
          {
        questionText: 'Two identical solid cubes of side a are joined end to end. Then the total surface area of the resulting cuboid is',
        answerOptions: [
          { answerText: '12a²', isCorrect: false },
          { answerText: '10a²', isCorrect: true },
          { answerText: '8a²', isCorrect: false },
          { answerText: '11a²', isCorrect: false },
        ],
      },
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleAnswerOptionClick = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    };
    return (
          <div> <h1>Mensuration</h1>
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
      </div>
          </div>
    );
  };