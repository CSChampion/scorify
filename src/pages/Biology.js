import React from 'react';
import { useEffect, useState } from "react";
import '../index.css';


export const Biology = () => {
	return (
		<div className='homepage'>
			<h2>Biology</h2>
			<h5>Welcome to Biology on Scorify! In this section, we cover the following topics:
			Life Processes, Control and Coordination, Heredity and Evolution.
			</h5>
		</div>
	  );
};

export const Biology1 = () => {
    const questions = [
		{
			questionText: 'In amoeba, food is digested in the:',
			answerOptions: [
				{ answerText: 'Food vacuole', isCorrect: true },
				{ answerText: 'mitochondria', isCorrect: false },
				{ answerText: 'pseudopodia', isCorrect: false },
				{ answerText: 'chloroplast', isCorrect: false },
			],
		},
		{
			questionText: 'In which of the following groups of organisms, food materials are broken down outside the body and absorbed?',
			answerOptions: [
				{ answerText: 'Mushroom, green plants, Amoeba', isCorrect: false },
				{ answerText: 'Yeast, mushroom, bread mould', isCorrect: true },
				{ answerText: 'Paramecium, Amoeba, Cuscuta', isCorrect: false },
				{ answerText: 'Cuscuta, lice, tapeworm', isCorrect: false },
			],
		},
		{
			questionText: 'The contraction and expansion movement of the walls of the food pipe is called:',
			answerOptions: [
				{ answerText: 'translocation', isCorrect: false },
				{ answerText: 'transpiration', isCorrect: false },
				{ answerText: 'peristaltic movement', isCorrect: true },
				{ answerText: 'digestion', isCorrect: false },
			],
		},
		{
			questionText: 'What are the products obtained by anaerobic respiration in plants?',
			answerOptions: [
				{ answerText: 'Lactic acid + Energy', isCorrect: false },
				{ answerText: 'Carbon dioxide + Water + Energy', isCorrect: false },
				{ answerText: 'Ethanol + Carbon dioxide + Energy', isCorrect: true },
				{ answerText: 'Pyruvate', isCorrect: false },
			],
		},
        {
			questionText: 'When a few drops of iodine solution are added to rice water, the solution turns blue- black in colour. This indicates that rice water contains:',
			answerOptions: [
				{ answerText: 'fats', isCorrect: false },
				{ answerText: 'complex proteins', isCorrect: false },
				{ answerText: 'starch', isCorrect: true },
				{ answerText: 'simple proteins', isCorrect: false },
			],
		},
        {
			questionText: 'The respiratory pigment in human beings is:',
			answerOptions: [
				{ answerText: 'carotene', isCorrect: false },
				{ answerText: 'chlorophyll', isCorrect: false },
				{ answerText: 'haemoglobin', isCorrect: true },
				{ answerText: 'mitochondria', isCorrect: false },
			],
		},
        {
			questionText: 'Which of the following is the important characteristic of Emphysema?',
			answerOptions: [
				{ answerText: 'Destruction of the alveolar wall and air sacs in the lungs are damaged.', isCorrect: true },
				{ answerText: 'Increase in the growth of the lung tissue.', isCorrect: false },
				{ answerText: 'Inflammation in the wall of bronchi.', isCorrect: false },
				{ answerText: 'Thickening of the artery walls of the lungs.', isCorrect: false },
			],
		},
        {
			questionText: 'The opening and closing of the stomatal pore depends upon',
			answerOptions: [
				{ answerText: 'Oxygen', isCorrect: false },
				{ answerText: 'temperature', isCorrect: false },
				{ answerText: 'water in the guard cells', isCorrect: true },
				{ answerText: 'concentration of CO2', isCorrect: false },
			],
		},
        {
			questionText: 'A plant gets rid of excess water through transpiration. Which is a method used by plants to get rid of solid waste products?',
			answerOptions: [
				{ answerText: 'shortening of stem', isCorrect: false },
				{ answerText: 'dropping down of fruits', isCorrect: false },
				{ answerText: 'shedding of yellow leaves', isCorrect: true },
				{ answerText: 'expansion of roots into the soil', isCorrect: false },
			],
		},
        {
			questionText: 'Chemicals present in the tobacco smoke lead to the breakdown of the elastic tissue in the alveoli. Name this specific condition.',
			answerOptions: [
				{ answerText: 'Heart disease', isCorrect: false },
				{ answerText: 'Emphysema', isCorrect: true },
				{ answerText: 'Bronchitis', isCorrect: false },
				{ answerText: 'Lung cancer', isCorrect: false },
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
        <div> <h1>Life Processes</h1>
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

export const Biology2 = () => {
    const questions = [
		{
			questionText: 'What is the function of pituitary gland?',
			answerOptions: [
				{ answerText: 'to develop sex organs in males', isCorrect: false },
				{ answerText: 'to stimulate growth in all organs', isCorrect: true },
				{ answerText: 'to regulate sugar and salt level in the body', isCorrect: false },
				{ answerText: 'to initiate metabolism in the body', isCorrect: false },
			],
		},
		{
			questionText: 'Movement of sunflower in accordance with the path of Sun is due to',
			answerOptions: [
				{ answerText: 'Chemotropism', isCorrect: false },
				{ answerText: 'Geotropism', isCorrect: false },
				{ answerText: 'Phototropism', isCorrect: true },
				{ answerText: 'Hydrotropism', isCorrect: false },
			],
		},
		{
			questionText: 'How will information travel within a neuron?',
			answerOptions: [
				{ answerText: 'Dendrite -> cell body -> axon -> nerve ending', isCorrect: true },
				{ answerText: 'Dendrite -> axon -> cell body -> nerve ending', isCorrect: false },
				{ answerText: 'Axon -> dendrite -> cell body -> nerve ending', isCorrect: false },
				{ answerText: 'Axon -> cell body -> dendrite -> nerve ending', isCorrect: false },
			],
		},
		{
			questionText: 'Which parts of the brain controls the blood pressure?',
			answerOptions: [
				{ answerText: 'spinal cord, skull, hypothalamus', isCorrect: false },
				{ answerText: 'cord, skull, cerebrum', isCorrect: false },
				{ answerText: 'Pons, medulla, cerebellum', isCorrect: false },
				{ answerText: 'pons, medulla, pituitary', isCorrect: true },
			],
		},
        {
			questionText: 'The main function of abscisic acid in plants is',
			answerOptions: [
				{ answerText: 'to promote cell division', isCorrect: false },
				{ answerText: 'to inhibit growth', isCorrect: true },
				{ answerText: 'to promote growth of stem', isCorrect: false },
				{ answerText: 'to increase the length of cells', isCorrect: false },
			],
		},
        {
			questionText: 'Any change in the environment to which an organism responds is called',
			answerOptions: [
				{ answerText: 'stimulus', isCorrect: true },
				{ answerText: 'coordination', isCorrect: false },
				{ answerText: 'response', isCorrect: false },
				{ answerText: 'hormone', isCorrect: false },
			],
		},
        {
			questionText: 'The longest fibre on the cell body of a neuron is called',
			answerOptions: [
				{ answerText: 'sheath', isCorrect: false },
				{ answerText: 'cytoplasm', isCorrect: false },
				{ answerText: 'axon', isCorrect: true },
				{ answerText: 'dendrites', isCorrect: false },
			],
		},
        {
			questionText: 'Which nerves transmit impulses from the central nervous system towards muscle cells?',
			answerOptions: [
				{ answerText: 'Sensory nerves', isCorrect: false },
				{ answerText: 'Motor nerves', isCorrect: true },
				{ answerText: 'Relay nerves', isCorrect: false },
				{ answerText: 'Cranial nerves', isCorrect: false },
			],
		},
        {
			questionText: 'A microscopic gap between a pair of adjacent neurons over which nerve impulses pass is called',
			answerOptions: [
				{ answerText: 'neurotransmitter', isCorrect: false },
				{ answerText: 'dendrites', isCorrect: false },
				{ answerText: 'axon', isCorrect: false },
				{ answerText: 'synapse', isCorrect: true },
			],
		},
        {
			questionText: 'The highest coordinating centre in the human body is',
			answerOptions: [
				{ answerText: 'spinal cord', isCorrect: false },
				{ answerText: 'heart', isCorrect: false },
				{ answerText: 'brain', isCorrect: true },
				{ answerText: 'kidney', isCorrect: false },
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
        <div> <h1>Control and Coordination</h1>
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

export const Biology3 = () => {
    const questions = [
		{
			questionText: 'Mendel conducted his famous breeding experiments by working on:-',
			answerOptions: [
				{ answerText: 'Drosophila', isCorrect: false },
				{ answerText: 'Escherichiacoli', isCorrect: false },
				{ answerText: 'Pisum Sativum', isCorrect: true },
				{ answerText: 'All of these', isCorrect: false },
			],
		},
		{
			questionText: 'Which section of DNA provides information for one protein?',
			answerOptions: [
				{ answerText: 'Nucleus', isCorrect: false },
				{ answerText: 'Chromosome', isCorrect: false },
				{ answerText: 'Trait', isCorrect: false },
				{ answerText: 'Gene', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following is an example of genetic variation?',
			answerOptions: [
				{ answerText: 'One person has a scar but his friend doesn’t', isCorrect: false },
				{ answerText: 'One person is older than the other', isCorrect: false },
				{ answerText: 'Reeta eats meat but her sister Geeta is a vegetarian', isCorrect: false },
				{ answerText: 'Two children have different eye color', isCorrect: true },
			],
		},
		{
			questionText: 'The surprise products formed in experiment conducted by Miller and Urey were:-',
			answerOptions: [
				{ answerText: 'Peptides', isCorrect: false },
				{ answerText: 'Amino acids', isCorrect: true },
				{ answerText: 'Amino acids', isCorrect: false },
				{ answerText: 'Nucleic acids', isCorrect: false },
			],
		},
        {
			questionText: 'From the list given below select the character which can be acquired but not inherited:',
			answerOptions: [
				{ answerText: 'colour of eyes', isCorrect: false },
				{ answerText: 'colour of skin', isCorrect: false },
				{ answerText: 'texture of hair', isCorrect: false },
				{ answerText: 'size of body', isCorrect: true },
			],
		},
        {
			questionText: 'Miller and Urey performed an experiment to prove the origin of life from organic compounds. The gases they took were:-',
			answerOptions: [
				{ answerText: 'methane, ethane, ammonia, water vapour', isCorrect: false },
				{ answerText: 'methane, ethane, hydrogen, ammonia', isCorrect: false },
				{ answerText: 'ammonia, water vapour, butane, hydrogen', isCorrect: false },
				{ answerText: 'methane, ammonia, hydrogen, water vapour', isCorrect: true },
			],
		},
        {
			questionText: 'What is the probability that the male progeny will be a boy?',
			answerOptions: [
				{ answerText: '50 %', isCorrect: true },
				{ answerText: '56 %', isCorrect: false },
				{ answerText: '47.43%', isCorrect: false },
				{ answerText: '100%', isCorrect: false },
			],
		},
        {
			questionText: 'A zygote which has an X-chromosome inherited from the father will develop into a:',
			answerOptions: [
				{ answerText: 'boy', isCorrect: false },
				{ answerText: 'girl', isCorrect: true },
				{ answerText: 'X-Chromosome does not determine the gender of a child', isCorrect: false },
				{ answerText: 'either a boy or a girl', isCorrect: false },
			],
		},
        {
			questionText: 'Darwin\'s theory does not include:',
			answerOptions: [
				{ answerText: 'Natural Selection', isCorrect: false },
				{ answerText: 'Survival of the fittest', isCorrect: false },
				{ answerText: 'Evolution Through Inheritance', isCorrect: true },
				{ answerText: 'Struggle for existence of life', isCorrect: false },
			],
		},
        {
			questionText: 'Which of the following statements is not true with respect to variation?',
			answerOptions: [
				{ answerText: 'All variations in a species have equal chances of survival.', isCorrect: false },
				{ answerText: 'Change in genetic composition results in invariation.', isCorrect: false },
				{ answerText: 'Selection of variants by environmental factors forms the basis of evolutionary processes.', isCorrect: false },
				{ answerText: 'Variation is minimum in in asexual reproduction', isCorrect: true },
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
        <div> <h1>Heredity and Evolution</h1>
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