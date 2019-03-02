import { randInt, gameStart } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const gameData = () => {
  const question = randInt(1, 100);
  const askQuestion = `Question: ${question}`;
  const rightAnswer = (isEven(question)) ? 'yes' : 'no';
  return { askQuestion, rightAnswer };
};

export default () => gameStart(gameData, description);
