import React from 'react';
import { useEffect, useState } from "react";
import '../index.css';

export const Physics = () => {
  return (
    <div className='homepage'>
		<h2>Physics</h2>
		<h5>Welcome to Physics on Scorify! In this section, we cover the following topics:
		Electricity, Light: Reflection and Refraction, Magentic Effects of Electric Current.
		</h5>
	</div>
  );
};

export const Physics1 = () => {
  const questions = [
		{
			questionText: 'Which of the following is a good conductor of electricity?',
			answerOptions: [
				{ answerText: 'Paper', isCorrect: false },
				{ answerText: 'Iron', isCorrect: true },
				{ answerText: 'Glass', isCorrect: false },
				{ answerText: 'Ebonite', isCorrect: false },
			],
		},
		{
			questionText: 'The SI unit of electric current is ______.',
			answerOptions: [
				{ answerText: 'Volt', isCorrect: false },
				{ answerText: 'Faraday', isCorrect: false },
				{ answerText: 'Ampere', isCorrect: true },
				{ answerText: 'Ohms', isCorrect: false },
			],
		},
		{
			questionText: 'Electrical resistivity of a metallic wire depends upon its _____.',
			answerOptions: [
				{ answerText: 'Length', isCorrect: false },
				{ answerText: 'Material', isCorrect: true },
				{ answerText: 'Thickness', isCorrect: false },
				{ answerText: 'Shape', isCorrect: false },
			],
		},
		{
			questionText: 'Electric current is measured using ______.',
			answerOptions: [
				{ answerText: 'Galvanometer', isCorrect: false },
				{ answerText: 'Ammeter', isCorrect: true },
				{ answerText: 'Voltmeter', isCorrect: false },
				{ answerText: 'Potentiometer', isCorrect: false },
			],
		},
        {
			questionText: 'Unit of electric power may also be expressed as ______.',
			answerOptions: [
				{ answerText: 'Watt-second', isCorrect: false },
				{ answerText: 'Ampere-hour', isCorrect: false },
				{ answerText: 'Volt-second', isCorrect: false },
				{ answerText: 'Kilowatt-hour', isCorrect: true },
			],
		},
        {
			questionText: 'Materials which do not allow electricity to pass through are known as ______.',
			answerOptions: [
				{ answerText: 'Semiconductors', isCorrect: false },
				{ answerText: 'Conductors', isCorrect: false },
				{ answerText: 'Insulators', isCorrect: true },
				{ answerText: 'Semi-insulator', isCorrect: false },
			],
		},
        {
			questionText: 'Tungsten is used in which of the following?',
			answerOptions: [
				{ answerText: 'Metal construction', isCorrect: false },
				{ answerText: 'Electric bulb', isCorrect: true },
				{ answerText: 'Insulators', isCorrect: false },
				{ answerText: 'Textile manufacturing', isCorrect: false },
			],
		},
        {
			questionText: 'Electric potential is a ______.',
			answerOptions: [
				{ answerText: 'Vector quantity', isCorrect: false },
				{ answerText: 'Scalar quantity', isCorrect: true },
				{ answerText: 'Dimensionless quantity', isCorrect: false },
				{ answerText: 'None of the options', isCorrect: false },
			],
		},
        {
			questionText: 'Copper is used in electric transmission lines because of its ______.',
			answerOptions: [
				{ answerText: 'High resistivity', isCorrect: false },
				{ answerText: 'Low resistivity', isCorrect: true },
				{ answerText: 'No resistivity', isCorrect: false },
				{ answerText: 'None of the options', isCorrect: false },
			],
		},
        {
			questionText: 'The SI unit of resistance is ______.',
			answerOptions: [
				{ answerText: 'Volt', isCorrect: false },
				{ answerText: 'Faraday', isCorrect: false },
				{ answerText: 'Ampere', isCorrect: false },
				{ answerText: 'Ohm', isCorrect: true },
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
        <div> <h1>Electricity</h1>
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

export const Physics2 = () => {
  const questions = [
		{
			questionText: 'The change in the direction of a wave passing from one medium to another is termed as ______.',
			answerOptions: [
				{ answerText: 'Interference', isCorrect: false },
				{ answerText: 'Mirage', isCorrect: false },
				{ answerText: 'Diffraction', isCorrect: false },
				{ answerText: 'Refraction', isCorrect: true },
			],
		},
		{
			questionText: 'What would be the angle of incidence for a light ray having zero reflection angle?',
			answerOptions: [
				{ answerText: '180 degrees', isCorrect: false },
				{ answerText: '90 degrees', isCorrect: false },
				{ answerText: '0 degrees', isCorrect: true },
				{ answerText: '45 degrees', isCorrect: false },
			],
		},
		{
			questionText: 'Light can be focused on our retina through which of the following phenomena?',
			answerOptions: [
				{ answerText: 'Refraction', isCorrect: true },
				{ answerText: 'Interference', isCorrect: false },
				{ answerText: 'Diffraction', isCorrect: false },
				{ answerText: 'Mirage', isCorrect: false },
			],
		},
		{
			questionText: 'Speed of light in a vacuum is represented as ______.',
			answerOptions: [
				{ answerText: 'a', isCorrect: false },
				{ answerText: 'v', isCorrect: false },
				{ answerText: 'c', isCorrect: true },
				{ answerText: 'l', isCorrect: false },
			],
		},
        {
			questionText: 'A full length of the image of a distant tall building can be seen using a ______.',
			answerOptions: [
				{ answerText: 'convex mirror', isCorrect: true },
				{ answerText: 'plane mirror', isCorrect: false },
				{ answerText: 'concave mirror', isCorrect: false },
				{ answerText: 'none of the options', isCorrect: false },
			],
		},
        {
			questionText: 'The ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant. It is given by ______.',
			answerOptions: [
				{ answerText: 'Faraday\'s law', isCorrect: false },
				{ answerText: 'Snell\'s law', isCorrect: true },
				{ answerText: 'Newtons\'s law', isCorrect: false },
				{ answerText: 'Murphy\'s law', isCorrect: false },
			],
		},
        {
			questionText: 'Twinkling of stars is due to which optical phenomenon?',
			answerOptions: [
				{ answerText: 'Reflection', isCorrect: false },
				{ answerText: 'Interference', isCorrect: false },
				{ answerText: 'Refraction', isCorrect: true },
				{ answerText: 'Divergence', isCorrect: false },
			],
		},
        {
			questionText: 'The laws of reflection are valid for ______.',
			answerOptions: [
				{ answerText: 'a convex mirror', isCorrect: false },
				{ answerText: 'a plane mirror', isCorrect: false },
				{ answerText: 'a concave mirror', isCorrect: false },
				{ answerText: 'all mirrors irrespective of their shape', isCorrect: true },
			],
		},
        {
			questionText: 'Light from the Sun falling on a convex lens will converge at —————.',
			answerOptions: [
				{ answerText: 'Radius of curvature', isCorrect: false },
				{ answerText: 'Optical centre', isCorrect: false },
				{ answerText: 'Focus', isCorrect: true },
				{ answerText: 'None of the option', isCorrect: false },
			],
		},
        {
			questionText: 'Concave lens produces ______.',
			answerOptions: [
				{ answerText: 'only virtual image', isCorrect: false },
				{ answerText: 'only erect image', isCorrect: false },
				{ answerText: 'diminished image', isCorrect: false },
				{ answerText: 'virtual, erect, and diminished image', isCorrect: true },
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
        <div> <h1>Light: Reflection and Refraction</h1>
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

export const Physics3 = () => {
  const questions = [
		{
			questionText: 'Magnetic field lines emerge from ',
			answerOptions: [
				{ answerText: 'South pole', isCorrect: false },
				{ answerText: 'North Pole', isCorrect: true },
				{ answerText: 'Center of magnet', isCorrect: false },
				{ answerText: 'None of the option', isCorrect: false },
			],
		},
		{
			questionText: 'Magnetic field is a',
			answerOptions: [
				{ answerText: 'Scalar quantity', isCorrect: false },
				{ answerText: 'Vector quantity', isCorrect: true },
				{ answerText: 'Dimensionless quantity', isCorrect: false },
				{ answerText: 'None of the option', isCorrect: false },
			],
		},
		{
			questionText: 'Overloading happens due to ______.',
			answerOptions: [
				{ answerText: 'Short circuits', isCorrect: false },
				{ answerText: 'Decrease in power supply', isCorrect: false },
				{ answerText: 'Increase in power supply', isCorrect: false },
				{ answerText: 'Option (a) and (c)', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following is used to detect the presence of current in a circuit?',
			answerOptions: [
				{ answerText: 'Meter bridge', isCorrect: false },
				{ answerText: 'Sonometer', isCorrect: false },
				{ answerText: 'Galvanometer', isCorrect: true },
				{ answerText: 'Electric motor', isCorrect: false },
			],
		},
        {
			questionText: 'The small gap in the electric circuit is known as',
			answerOptions: [
				{ answerText: 'Cell', isCorrect: false },
				{ answerText: 'Load', isCorrect: false },
				{ answerText: 'Switch', isCorrect: true },
				{ answerText: 'Wires', isCorrect: false },
			],
		},
        {
			questionText: 'Unit of electric power may also be expressed as',
			answerOptions: [
				{ answerText: 'Watt second', isCorrect: false },
				{ answerText: 'Ampere hour', isCorrect: false },
				{ answerText: 'Volt ampere', isCorrect: true },
				{ answerText: 'Kilowatt hour', isCorrect: false },
			],
		},
        {
			questionText: '______ is a closed-loop or path formed by the network of electrical components, where electrons flow.',
			answerOptions: [
				{ answerText: 'Electric Potential', isCorrect: false },
				{ answerText: 'Electric Circuit', isCorrect: false },
				{ answerText: 'Electric Path', isCorrect: false },
				{ answerText: 'Electric Difference', isCorrect: true },
			],
		},
        {
			questionText: '______ is the device used to convert electrical energy into mechanical energy.',
			answerOptions: [
				{ answerText: 'Galvanometer', isCorrect: false },
				{ answerText: 'Ammeter', isCorrect: false },
				{ answerText: 'Electric motor', isCorrect: true },
				{ answerText: 'Potentiometer', isCorrect: false },
			],
		},
        {
			questionText: 'The potential difference between a live wire and a neutral wire is ______.',
			answerOptions: [
				{ answerText: '100 V', isCorrect: false },
				{ answerText: '280 V', isCorrect: false },
				{ answerText: '220 V', isCorrect: true },
				{ answerText: '0 V', isCorrect: false },
			],
		},
        {
			questionText: 'The force exerted on a current-carrying wire placed in a magnetic field is zero when the angle between the wire and the direction of the magnetic field is ______.',
			answerOptions: [
				{ answerText: '180 degree', isCorrect: true },
				{ answerText: '45 degree', isCorrect: false },
				{ answerText: '90 degree', isCorrect: false },
				{ answerText: '60 degree', isCorrect: false },
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
        <div> <h1>Magnetic Effects of Electric Current</h1>
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