import gameStart from '..';
import randInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const iter = (num1, num2) => {
    if (num1 === num2) {
      return num1;
    }
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    return iter(max - min, min);
  };
  return iter(a, b);
};

const gameData = () => {
  const x = randInt(1, 100);
  const y = randInt(1, 100);
  const questionText = `${x} ${y}`;

  const rightAnswer = gcd(x, y).toString();

  return { questionText, rightAnswer };
};

export default () => gameStart(gameData, description);
