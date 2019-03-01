import {randInt} from '..';
import readlineSync from 'readline-sync';

export const rules = 'Find the greatest common divisor of given numbers.\n'

export const gameData = () => {
  const rounds = 3
  const x = randInt(1, 100);
  const y = randInt(1, 100);
  const question = `Question: ${x} ${y}`;
  const gcd = (a, b) => {
    const iter = (a, b) => {
      if (a === b) {
        return a;
      }
      const max = (a > b) ? a : b;
      const min = (a < b) ? a : b;
      return iter(max - min, min);
    }
    return iter(a,b);
  }

  const rightAnswer = gcd(x, y).toString();

  return {'question' : question, 'rightAnswer' : rightAnswer, 'rounds' : rounds}
}
