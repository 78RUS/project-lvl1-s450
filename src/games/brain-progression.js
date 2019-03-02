import gameStart from '..';
import randInt from '../utils';

const description = 'What number is missing in the range?\n';

const gameData = () => {
  const makeRange = (rangeStart, rangeStep, rangeLen) => {
    const iter = (range, step, maxLen) => {
      if (range.length === maxLen) {
        return range;
      }
      range.push(range[range.length - 1] + step)
      return iter(range, step, maxLen)
    }
    const range = [];
    range.push(rangeStart);
    return iter(range, rangeStep, rangeLen);
  }

  const removeElement = (range) => {
    const missedIndex = randInt(0, 10);
    const missedNumber = range[missedIndex];
    range[missedIndex] = '..';
    return {piercedRange: range, missedNumber}
  }


  const rangeStart = randInt(1, 11);
  const rangeStep = randInt(2, 4);
  const rangeLen = 10;

  const range = makeRange(rangeStart, rangeStep, rangeLen);
  const {piercedRange, missedNumber} = removeElement(range);

  const rightAnswer = missedNumber.toString();
  const question = piercedRange.toString();
  const questionText = `${question}`;
  return { questionText, rightAnswer };
};

export default () => gameStart(gameData, description);
