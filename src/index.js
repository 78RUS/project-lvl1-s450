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

export const brainEven = () => {
  const process = (acc, userName) => {
    if (acc === 3) {
      console.log(`Congratulations, ${userName}!`);
      return 1;
    }
    const random = randInt();
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(random) && answer === 'yes') {
      console.log('Correct!');
      return process(acc + 1, userName);
    }
    if (!isEven(random) && answer === 'no') {
      console.log('Correct!');
      return process(acc + 1, userName);
    }
    const rightAnswer = (isEven(random)) ? 'yes' : 'no';
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`)
    return 0;
  };
  const userName = greetingBrainEven();
  process(0, userName);
};
