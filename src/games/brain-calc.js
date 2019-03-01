import { randInt } from '..';

export const rules = 'What is the result of the expression?\n';

export const gameData = () => {
  const rounds = 3;
  const x = randInt(1, 10);
  const y = randInt(1, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `Question: ${x} ${operator} ${y}`;
  const calculateAnswer = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const rightAnswer = calculateAnswer[operator](x, y).toString();

  return { question, rightAnswer, rounds };
};
