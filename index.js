'use strict';
let playing = 'circle';

let click = 0;
const playingCross = document.querySelector('.circle');

const reloadPage = (msg) => {
  setTimeout(() => {
    alert(msg);
    window.location.reload();
  }, 10);
};

const playingFunction = (event) => {
  if (event.target.disabled) {
    return;
  }
  click++;
  if (click % 2 != 0) {
    event.target.classList.add('td--circle');
    playingCross.src = 'images/cross.svg';
  } else {
    event.target.classList.add('td--cross');
    playingCross.src = 'images/circle.svg';
  }
  event.target.disabled = true;

  /*dotázání se-výhra-křížek*/
  const winning = isWinningMove(event.target);
  if (winning === true && getSymbol(event.target) === 'cross') {
    reloadPage('Křížek vyhrává! Začít znova?');
  }

  /*dotázání se-výhra-kolečko*/
  if (winning === true && getSymbol(event.target) === 'circle') {
    reloadPage('Kolečko vyhrává! Začít znova?');
  }
};

document.querySelectorAll('.tabulka button').forEach((element) => {
  element.addEventListener('click', playingFunction);
});

/**** */

const boardSize = 10; // 10x10

const buttons = document.querySelectorAll('.tabulka button'); // Selektor pozměň tak, aby odpovídal tvému kódu.

const getPosition = (button) => {
  let buttonIndex = 0;
  while (buttonIndex < buttons.length) {
    if (button === buttons[buttonIndex]) {
      break;
    }
    buttonIndex++;
  }

  return {
    row: Math.floor(buttonIndex / boardSize),
    column: buttonIndex % boardSize,
  };
};

/**vrácení příslušného prvku**/

const getField = (row, column) => buttons[row * boardSize + column];

/**vrácení řetězce**/

const getSymbol = (button) => {
  // Název třídy přizpůsob tvému kódu.
  if (button.classList.contains('td--cross')) {
    return 'cross';
  } else if (button.classList.contains('td--circle')) {
    return 'circle';
  }
};

/** sousedních pět**/

const symbolsToWin = 5;
const isWinningMove = (button) => {
  const origin = getPosition(button);
  const symbol = getSymbol(button);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko

  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
