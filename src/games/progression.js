import gameStart from '..';
import randInt from '../utils';

const description = 'What number is missing in the range?';

const gameData = () => {
  const makeRange = (rangeStart, rangeStep, rangeLen) => {  // best practice
    const iter = (range, step, maxLen) => {
      if (range.length === maxLen) {
        return range;
      }
      const nextNumber = rangeStart + rangeStep * range.length;
      return iter([...range, nextNumber], step, maxLen);
    };

    return iter([rangeStart], rangeStep, rangeLen);
  };
  // const makeRange = (rangeStart, rangeStep, rangeLen) => {
  //   const iter = (range, step, maxLen) => {
  //     if (range.length === maxLen) {
  //       return range;
  //     }
  //     const nextNumber = rangeStart + rangeStep * range.length
  //     const concRange = range.concat(nextNumber);
  //     // range.push(rangeStart + rangeStep * range.length);
  //     return iter(concRange, step, maxLen);
  //   };
  //   let range = [];
  //   range = range.concat(rangeStart);
  //   return iter(range, rangeStep, rangeLen);
  // };

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
  const question = piercedRange.toString();
  const questionText = `${question}`;
  return { questionText, rightAnswer };
};

export default () => gameStart(gameData, description);
