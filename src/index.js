#!/usr/bin/node
import readlineSync from 'readline-sync';

export const randInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameStart = (gameData, rules) => {
  console.log('Welcome to the Brain Games! \n');
  console.log(`${rules}`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const iter = (playerName, rounds) => {
    const currentGame = gameData();
    const maxRounds = currentGame['rounds']
    if (rounds === maxRounds) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }
    const question = currentGame['question'];
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = currentGame['rightAnswer'];
    if (answer === rightAnswer) {
      console.log('Correct!');
      return iter(playerName, rounds + 1);
    }
    console.log(`'${answer}' is wrong answer ;(.Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
    return false;
  }
  iter(playerName, 0);
};
