import { randInt, gameStart } from '..';

export const description = 'What is the result of the expression?\n';

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
  const askQuestion = `Question: ${x} ${operator} ${y}`;
  const rightAnswer = calculateAnswer[operator](x, y).toString();

  return { askQuestion, rightAnswer };
};

export default () => gameStart(gameData, description);
