import gameStart from '..';
import randInt from '../utils';

export const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateAnswer = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const gameData = () => {
  const x = randInt(1, 10);
  const y = randInt(1, 10);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const questionText = `${x} ${operator} ${y}`;
  const rightAnswer = calculateAnswer[operator](x, y).toString();

  return { questionText, rightAnswer };
};

export default () => gameStart(gameData, description);
