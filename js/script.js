// var argComputerMove, argMoveId, argPlayerMove, computerMove, playerMove, randomNumber, argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;
let randomNumber, buttonPaper, buttonRock, buttonScissors, buttonTest,
playerScore = 0,
computerScore = 0;

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  playerMove = argButtonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  printResult(playerScore, computerScore);
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nozyce';
  } else {
    printMessage('Nie znam ruchu o wartości ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    playerScore++;
    console.log('playerScore= ' + playerScore + ' and computerScore= ' + computerScore);
  } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerScore++;
    console.log('playerScore= ' + playerScore + ' and computerScore= ' + computerScore);
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nozyce') {
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

// buttonTest = document.getElementById('button-test');
// buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nozyce'); });