#!/usr/bin/node
import readlineSync from 'readline-sync';

export const randInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameStart = (gameData, rules) => {
  const greeting = () => {
    console.log('Welcome to the Brain Games! \n');
    console.log(`${rules}`);
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    return playerName;
  }

  const iter = (playerName, currentRound) => {
    const currentGame = gameData();
    const maxRounds = currentGame['rounds']
    if (currentRound === maxRounds) {
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
  const playerName = greeting();
  iter(playerName, 0);
};
