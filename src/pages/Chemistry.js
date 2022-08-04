import React from 'react';
import { useEffect, useState } from "react";
import '../index.css';

export const Chemistry = () => {
  return (
	<div className='homepage'>
		<h2>Chemistry</h2>
		<h5>Welcome to Chemistry on Scorify! In this section, we cover the following topics:
		Acids, Bases and Salts, Chemical Reactions and Equations, Metals and Non-Metals.
		</h5>
	</div>
  );
};

export const Chemistry1 = () => {
  const questions = [
		{
			questionText: 'According to Robert Boyle, which of the following is not an acid\'s property?',
			answerOptions: [
				{ answerText: ' turns blue Litmus red', isCorrect: false },
				{ answerText: ' sour in taste', isCorrect: false },
				{ answerText: ' neutralize bases', isCorrect: false },
				{ answerText: ' bitter in taste', isCorrect: true },
			],
		},
		{
			questionText: 'A proton donor acid is a chemical that is',
			answerOptions: [
				{ answerText: ' protongenic', isCorrect: true },
				{ answerText: ' protophilic', isCorrect: false },
				{ answerText: ' amphoteric', isCorrect: false },
				{ answerText: ' amphiprotic', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following compounds can\'t be used as an acid and a base at the same time?',
			answerOptions: [
				{ answerText: ' amphoteric substance', isCorrect: true },
				{ answerText: ' amphiprotic substance', isCorrect: false },
				{ answerText: ' ampholyte', isCorrect: false },
				{ answerText: ' protophilic', isCorrect: false },
			],
		},
		{
			questionText: 'Lewis concept does not explain the behaviour of ',
			answerOptions: [
				{ answerText: ' bases', isCorrect: false },
				{ answerText: ' salts', isCorrect: false },
				{ answerText: ' protonic acids', isCorrect: true },
				{ answerText: ' amphoteric substances', isCorrect: false },
			],
		},
        {
			questionText: 'Which of the following is a Lewis acid and which of the following is not a Lewis acid?',
			answerOptions: [
				{ answerText: ' aluminium chloride', isCorrect: false },
				{ answerText: ' sodium ion', isCorrect: false },
				{ answerText: ' sulphur tetrafluoride', isCorrect: false },
				{ answerText: ' hydroxide ion', isCorrect: true },
			],
		},
        {
			questionText: 'The PH of which of the following is more than 7?',
			answerOptions: [
				{ answerText: ' gastric juice', isCorrect: false },
				{ answerText: ' vinegar', isCorrect: false },
				{ answerText: ' blood plasma', isCorrect: true },
				{ answerText: ' lemon juice', isCorrect: false },
			],
		},
        {
			questionText: 'What is the Neutralization process in reverse?',
			answerOptions: [
				{ answerText: ' formation', isCorrect: false },
				{ answerText: ' hydrolysis', isCorrect: false },
				{ answerText: ' reaction', isCorrect: false },
				{ answerText: ' splitting', isCorrect: true },
			],
		},
        {
			questionText: 'Acid strength increases in the order of ______',
			answerOptions: [
				{ answerText: ' HI ≪ HCl ≪ HBr ≪ HF', isCorrect: false },
				{ answerText: ' HF ≪ HBr ≪ HCl ≪ HI', isCorrect: false },
				{ answerText: ' HF ≪ HCl ≪ HBr ≪ HI', isCorrect: true },
				{ answerText: ' HCl ≪ HF ≪ HBr ≪ HI', isCorrect: false },
			],
		},
        {
			questionText: 'Amphoteric molecules include which of the following?',
			answerOptions: [
				{ answerText: ' Acetic acid', isCorrect: false },
				{ answerText: ' Malic acid', isCorrect: false },
				{ answerText: ' Sugars', isCorrect: false },
				{ answerText: ' Water', isCorrect: true },
			],
		},
        {
			questionText: 'Which sort of acid is CH3OH?',
			answerOptions: [
				{ answerText: ' Bronsted acid', isCorrect: true },
				{ answerText: ' Lewis acid', isCorrect: false },
				{ answerText: ' Arrhenius acid', isCorrect: false },
				{ answerText: ' Lewis and Arrhenius acid', isCorrect: false },
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
        <div> <h1>Acids, Bases and Salts</h1>
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

export const Chemistry2 = () => {
  const questions = [
		{
			questionText: 'What is the rate of chemical reaction?',
			answerOptions: [
				{ answerText: ' Chemical reaction rate is a chemical property', isCorrect: false },
				{ answerText: ' Chemical reaction rate is a physical property', isCorrect: false },
				{ answerText: ' Chemical reaction rate is an intensive property', isCorrect: true },
				{ answerText: ' Chemical reaction rate is an extensive property', isCorrect: false },
			],
		},
		{
			questionText: ' The term “catalyst” refers to ______',
			answerOptions: [
				{ answerText: ' Can either increase or decrease the speed of a chemical reaction', isCorrect: true },
				{ answerText: ' Alters the value of equilibrium constant in a reversible chemical reaction', isCorrect: false },
				{ answerText: ' Increases the speed of a chemical reaction', isCorrect: false },
				{ answerText: ' Decreases the speed of a chemical reaction', isCorrect: false },
			],
		},
		{
			questionText: ' The reaction order is determined by',
			answerOptions: [
				{ answerText: ' Power of any one of the reactant concentrations', isCorrect: false },
				{ answerText: ' Number of molecules of reactants taking part in the reaction', isCorrect: false },
				{ answerText: ' Sum of the powers of the concentrations of all the reactants', isCorrect: true },
				{ answerText: ' Concentration of intermediate species formed', isCorrect: false },
			],
		},
		{
			questionText: 'The rate of homogeneous reactions is influenced by which of the following factors?',
			answerOptions: [
				{ answerText: ' Temperature only', isCorrect: false },
				{ answerText: ' Pressure only', isCorrect: false },
				{ answerText: ' Reactant Concentration only', isCorrect: false },
				{ answerText: ' Temperature, pressure and reactant concentration', isCorrect: true },
			],
		},
        {
			questionText: 'A reaction\'s rate cannot be expressed in terms of time.',
			answerOptions: [
				{ answerText: ' Volume of reacting fluid', isCorrect: false },
				{ answerText: ' Volume of solid', isCorrect: false },
				{ answerText: ' Amount of product', isCorrect: true },
				{ answerText: ' Interfacial surface', isCorrect: false },
			],
		},
        {
			questionText: 'The number of molecules engaged in an elementary reaction is referred to as ______',
			answerOptions: [
				{ answerText: ' Molecularity', isCorrect: true },
				{ answerText: ' Order of reaction', isCorrect: false },
				{ answerText: ' Unimolecular reaction', isCorrect: false },
				{ answerText: ' Rate of reaction', isCorrect: false },
			],
		},
        {
			questionText: 'Only liquid pressure is measured with which of the following instruments?',
			answerOptions: [
				{ answerText: 'Differential Manometer', isCorrect: false },
				{ answerText: 'Manometer', isCorrect: false },
				{ answerText: 'Piezometer', isCorrect: true },
				{ answerText: 'None of the mentioned', isCorrect: false },
			],
		},
        {
			questionText: 'Which of the following statements concerning basic reactions is correct?',
			answerOptions: [
				{ answerText: 'They occur in multiple steps', isCorrect: false },
				{ answerText: 'They are complex in nature', isCorrect: false },
				{ answerText: 'Order of elementary reaction is an integer', isCorrect: true },
				{ answerText: 'All first order reactions are elementary', isCorrect: false },
			],
		},
        {
			questionText: 'A state function is which of the following?',
			answerOptions: [
				{ answerText: 'Entropy', isCorrect: true },
				{ answerText: 'Heat', isCorrect: false },
				{ answerText: 'Work', isCorrect: false },
				{ answerText: 'None of the mentioned', isCorrect: false },
			],
		},
        {
			questionText: 'What is the conservation of Bernoulli\'s Equation?',
			answerOptions: [
				{ answerText: 'Pressure', isCorrect: false },
				{ answerText: 'Energy', isCorrect: true },
				{ answerText: 'Mass', isCorrect: false },
				{ answerText: 'Momentum', isCorrect: false },
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
        <div> <h1>Chemical Reactions and Equations</h1>
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

export const Chemistry3 = () => {
  const questions = [
		{
			questionText: 'The primary ore of aluminium is which of the following?',
			answerOptions: [
				{ answerText: 'Kaolinite', isCorrect: false },
				{ answerText: 'Bauxite', isCorrect: true },
				{ answerText: 'Malachite', isCorrect: false },
				{ answerText: 'Cinnabar', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is not an appropriate ore for iron extraction?',
			answerOptions: [
				{ answerText: 'Hematite', isCorrect: false },
				{ answerText: 'Magnetite', isCorrect: false },
				{ answerText: 'Siderite', isCorrect: false },
				{ answerText: 'Iron Pyrites', isCorrect: true },
			],
		},
		{
			questionText: 'Cinnabar is used to extract which metal?',
			answerOptions: [
				{ answerText: 'Zinc', isCorrect: false },
				{ answerText: 'Copper', isCorrect: false },
				{ answerText: 'Iron', isCorrect: false },
				{ answerText: 'Mercury', isCorrect: true },
			],
		},
		{
			questionText: 'Aluminium does not have which of the following properties?',
			answerOptions: [
				{ answerText: 'Aluminium is a poor conductor of heat and electricity', isCorrect: true },
				{ answerText: 'Aluminium is light in weight', isCorrect: false },
				{ answerText: 'It readily dissolves in HCl', isCorrect: false },
				{ answerText: 'Aluminium is highly resistant to corrosion', isCorrect: false },
			],
		},
        {
			questionText: 'Which of the following isn\'t a cobalt property?',
			answerOptions: [
				{ answerText: 'Cobalt is a lustrous white metal', isCorrect: false },
				{ answerText: 'It is attacked by alkalies', isCorrect: true },
				{ answerText: 'Cobalt is malleable', isCorrect: false },
				{ answerText: 'Cobalt is ductile', isCorrect: false },
			],
		},
        {
			questionText: 'Which one of the following is not a zinc ore?',
			answerOptions: [
				{ answerText: 'Limonite', isCorrect: true },
				{ answerText: 'Zincite', isCorrect: false },
				{ answerText: 'Calamine', isCorrect: false },
				{ answerText: 'Franklinite', isCorrect: false },
			],
		},
        {
			questionText: 'When magnesium is alloyed with which of the following elements, the tendency to break under stress is not reduced?',
			answerOptions: [
				{ answerText: 'Aluminum', isCorrect: false },
				{ answerText: 'Silicon', isCorrect: false },
				{ answerText: 'Zinc', isCorrect: false },
				{ answerText: 'Copper', isCorrect: true },
			],
		},
        {
			questionText: 'Copper and zinc alloy is known as ______',
			answerOptions: [
				{ answerText: 'Brass', isCorrect: true },
				{ answerText: 'Bronze', isCorrect: false },
				{ answerText: 'Duralumin', isCorrect: false },
				{ answerText: 'Nichrome', isCorrect: false },
			],
		},
        {
			questionText: 'The main component of Duralumin alloy is ______',
			answerOptions: [
				{ answerText: 'Copper', isCorrect: false },
				{ answerText: 'Nickel', isCorrect: false },
				{ answerText: 'Iron', isCorrect: false },
				{ answerText: 'Aluminum', isCorrect: true },
			],
		},
        {
			questionText: 'In calamine, what is the zinc concentration?',
			answerOptions: [
				{ answerText: '98 percent', isCorrect: false },
				{ answerText: '94 percent', isCorrect: false },
				{ answerText: '86 percent', isCorrect: false },
				{ answerText: '74 percent', isCorrect: true },
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
        <div> <h1>Metals and Non-Metals</h1>
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