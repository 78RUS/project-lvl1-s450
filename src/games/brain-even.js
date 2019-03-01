import { randInt } from '..';

export const rules = 'Answer "yes" if number even otherwise answer "no".\n';

export const gameData = () => {
  const rounds = 3;
  const random = randInt(1, 100);
  const question = `Question: ${random}`;
  const isEven = num => num % 2 === 0;
  const rightAnswer = (isEven(random)) ? 'yes' : 'no';
  return { question, rightAnswer, rounds };
};
