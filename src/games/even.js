import { gameEngine } from '..';
import generateNum from '../utils';

const gameGoal = 'Answer "yes" if number even otherwise answer "no"';

const isEvenNumber = number => number % 2 === 0;

const correctAnswer = number => (isEvenNumber(number) ? 'yes' : 'no');

const generateGameData = () => {
  const upperBoundOfNumbers = 101;
  const lowerBoundOfNumbers = 0;
  const num = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  const question = `${num}`;
  return [question, correctAnswer(num)];
};

export default () => gameEngine(gameGoal, generateGameData);