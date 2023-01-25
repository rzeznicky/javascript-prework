const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const rock = 'kamień';
const paper = 'papier';
const scissors = 'nożyce';

let playerScore = 0;
let computerScore = 0;

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  const playerMove = argButtonName;
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  printResult(playerScore, computerScore);
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return rock;
  } else if (argMoveId == 2) {
    return paper;
  } else if (argMoveId == 3) {
    return scissors;
  } else {
    printMessage('Nie znam ruchu o wartości ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return rock;
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == paper && argComputerMove == rock) {
    printMessage('Wygrywasz!');
    playerScore++;
    console.log('playerScore= ' + playerScore + ' and computerScore= ' + computerScore);
  } else if (argPlayerMove == scissors && argComputerMove == paper) {
    printMessage('Wygrywasz!');
    playerScore++;
    console.log('playerScore= ' + playerScore + ' and computerScore= ' + computerScore);
  } else if (argPlayerMove == rock && argComputerMove == scissors) {
    printMessage('Wygrywasz!');
    playerScore++;
    console.log('playerScore= ' + playerScore + ' and computerScore= ' + computerScore);
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!')
    console.log('playerScore= ' + playerScore + ' and computerScore= ' + computerScore);
  } else {
    printMessage('Przegrywasz :(');
    computerScore++;
    console.log('playerScore= ' + playerScore + ' and computerScore= ' + computerScore);
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

// const buttonTest = document.getElementById('button-test');
// buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock.addEventListener('click', function(){ buttonClicked(rock); });
buttonPaper.addEventListener('click', function(){ buttonClicked(paper); });
buttonScissors.addEventListener('click', function(){ buttonClicked(scissors); });