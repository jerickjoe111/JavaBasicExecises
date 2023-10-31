/*
Rock paper scissors is a classic two player game. 
Each player chooses either rock, paper, or scissors. The 
items are compared, and whichever player chooses the more
 powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there’s a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user’s choice.
Get the computer’s choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Please input a rock, paper, or scissors');
  }
};

const getComputerChoice = () => {
  let rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'its a bomb.. so user wins';
  }
  if (userChoice === computerChoice) {
    return 'game is a tie'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'paper beats rock so computer won';
    } else {
      return 'rock beats scissors you won';
    }
  }
  if (userChoice === 'paper') {
    if ( computerChoice === 'scissors'){
      return 'scissors beats paper so computer won';
    }
    return 'paper beats rock you won';
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'rock beats scissors so computer won';
    }
    return 'scissors beats paper you won';
  }
}

const playGame = () => {
  let userChoice = getUserChoice('Bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
//console.log(getUserChoice('rock'));
//getUserChoice('rook');
//console.log(getComputerChoice());

playGame();
