import { randInt, gameStart } from '..';

const description = 'Find the greatest common divisor of given numbers.\n';

const gameData = () => {
  const x = randInt(1, 100);
  const y = randInt(1, 100);
  const askQuestion = `Question: ${x} ${y}`;
  const gcd = (a, b) => {
    const iter = (num1, num2) => {
      if (num1 === num2) {
        return num1;
      }
      const max = (num1 > num2) ? num1 : num2;
      const min = (num1 < num2) ? num1 : num2;
      return iter(max - min, min);
    };
    return iter(a, b);
  };

  const rightAnswer = gcd(x, y).toString();

  return { askQuestion, rightAnswer };
};

export default () => gameStart(gameData, description);
