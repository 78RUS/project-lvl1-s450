import gameStart from '..';
import randInt from '../utils';

const description = 'What number is missing in the range?';

const gameData = () => {
  const makeRange = (rangeStart, rangeStep, rangeLen) => {
    const range = []
    for (let counter = 1; counter <= rangeLen; counter += 1) {
      range.push(rangeStart + rangeStep * counter)
    }
      return range;
    // const iter = (range, step, maxLen) => {
    //   if (range.length === maxLen) {
    //     return range;
    //   }
    //   const newRange = range.slice();
    //   newRange.push(rangeStart + step * range.length);
    //   return iter(newRange, step, maxLen);
    // };
    // const range = [];
    // return iter(range, rangeStep, rangeLen);
  };

  const removeElement = (range) => {
    const missedIndex = randInt(0, range.length);
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
