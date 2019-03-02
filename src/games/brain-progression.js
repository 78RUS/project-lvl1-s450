import gameStart from '..';
import randInt from '../utils';

const description = 'What number is missing in the range?';

const gameData = () => {
  const makeRange = (rangeStart, rangeStep, rangeLen) => {
    const iter = (range, step, maxLen) => {
      if (range.length === maxLen) {
        return range;
      }
      range.push(range[range.length - 1] + step);
      return iter(range, step, maxLen);
    };
    const range = [];
    range.push(rangeStart);
    return iter(range, rangeStep, rangeLen);
  };

  const removeElement = (range) => {
    const missedIndex = randInt(0, 10);
    const missedNumber = range[missedIndex];
    const newRange = range.slice();
    newRange[missedIndex] = '..';
    return { piercedRange: newRange, missedNumber };
  };

  const rangeStart = randInt(1, 11);
  const rangeStep = randInt(2, 4);
  const rangeLen = 10;
  const range = makeRange(rangeStart, rangeStep, rangeLen);
  const { piercedRange, missedNumber } = removeElement(range);
  const rightAnswer = missedNumber.toString();
  const questionData = piercedRange.toString();
  const questionText = `${questionData}`;
  return { questionText, rightAnswer };
};

export default () => gameStart(gameData, description);
