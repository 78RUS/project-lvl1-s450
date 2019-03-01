import {randInt} from '..';
import readlineSync from 'readline-sync';

export const rules = 'Answer "yes" if number even otherwise answer "no".\n'

export const game = () => {
  const random = randInt(1, 100)
  const question = `Question: ${random}`
  const isEven = random => random % 2 === 0;
  const rightAnswer = (isEven(random)) ? 'yes' : 'no';
  return {'question' : question, 'rightAnswer' : rightAnswer}
}
