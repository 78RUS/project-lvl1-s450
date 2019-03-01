import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!\n');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

export default startGame;
