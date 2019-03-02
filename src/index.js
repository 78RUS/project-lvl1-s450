#!/usr/bin/node
import readlineSync from 'readline-sync';

const maxRounds = 3;

const greeting = (description) => {
  console.log('Welcome to the Brain Games! \n');
  console.log(`${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const gameStart = (gameData, description) => {
  const iter = (playerName, currentRound) => {
    const currentGame = gameData();
    if (currentRound === maxRounds) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const { questionText } = currentGame;
    console.log('Question:', questionText);
    const answer = readlineSync.question('Your answer: ');
    const { rightAnswer } = currentGame;
    if (answer === rightAnswer) {
      console.log('Correct!');
      iter(playerName, currentRound + 1);
      return;
    }
    console.log(`'${answer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
  };
  const playerName = greeting(description);
  iter(playerName, 0);
};

export default gameStart;
