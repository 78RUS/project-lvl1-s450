import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games! \n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};

export const greetingBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  return userName;
};

export const randInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;
export const isEven = num => num % 2 === 0;

const winCount = 3;
const winSign = 1;
const loseSign = 0;

export const brainEven = () => {
  const process = (acc, userName) => {
    if (acc === winCount) {
      console.log(`Congratulations, ${userName}!`);
      return winSign;
    }
    const randomNumber = randInt();
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = (isEven(randomNumber)) ? 'yes' : 'no';
    if (answer === rightAnswer) {
      console.log('Correct!');
      return process(acc + 1, userName);
    }
    console.log(`'${answer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return loseSign;
  };
  const userName = greetingBrainEven();
  process(0, userName);
};
