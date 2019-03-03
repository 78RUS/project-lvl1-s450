import gameStart from '..';
import randInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let counter = 2; counter <= Math.floor(Math.sqrt(num)); counter += 1) {
    if (num % counter === 0) {
      return false;
    }
  }
  return true;
};

const gameData = () => {
  const questionData = randInt(1, 100);
  const questionText = `${questionData}`;
  const rightAnswer = (isPrime(questionData)) ? 'yes' : 'no';
  return { questionText, rightAnswer };
};

export default () => gameStart(gameData, description);
