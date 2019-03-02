import gameStart from '..';
import randInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const gameData = () => {
  const questionData = randInt(1, 100);
  const questionText = `${questionData}`;
  const rightAnswer = (isEven(questionData)) ? 'yes' : 'no';
  return { questionText, rightAnswer };
};

export default () => gameStart(gameData, description);
