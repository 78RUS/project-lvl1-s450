import { randInt, gameStart } from '..';

const description = 'What number is missing in the range?\n';

const gameData = () => {
  const rangeStart = randInt(1, 11);
  const rangeStep = randInt(2, 4);
  const rangeLen = 10;
  let range = [];
  range.push(rangeStart);
  const makeRange = (progression, step, acc) => {
    if (acc === rangeLen) {
      return progression;
    }
    range.push(rangeStart + rangeStep * acc);
    return makeRange(progression, rangeStep, acc + 1);
  };
  range = makeRange(range, rangeStep, 1);
  const missedNumber = randInt(1, 11);
  const rightAnswer = range[missedNumber].toString();
  range[missedNumber] = '..';
  const question = range.toString();
  const askQuestion = `Question: ${question}`;
  return { askQuestion, rightAnswer };
};

export default () => gameStart(gameData, description);
