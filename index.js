'use strict';
let playing = 'circle';

let click = 0;
const playingCross = document.querySelector('.circle');

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
};

document.querySelectorAll('.tabulka button').forEach((element) => {
  element.addEventListener('click', playingFunction);
});

/**** */

const boardSize = 10; // 10x10

const button = document.querySelectorAll('.tabulka button'); // Selektor pozměň tak, aby odpovídal tvému kódu.

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

  console.log(button());

  /**vrácení příslušného prvku**/

  const getField = (row, column) => button[row * boardSize + column];

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

  /**const buttons = documnent.querySelectorAll('button');
  /** 
const symbolsToWin = 5;
const isWinningMove = (cell) => {
const origin = getPosition(cell);
const symbol = getSymbol(cell);
};
*/

  /*dotázání se-výhra-kolečko*/

  /*isWinningMove(buttonAfterClick);
  if (isWinningMove(buttonAfterClick) === true) {
    reloadPage('Kolečko vyhrává! Začít znova?');
  }

  /*dotázání se-výhra-křížek*/

  /**isWinningMove(buttonAfterClick);
  if (isWinningMove(buttonAfterClick) === true) {
    reloadPage('Křížek vyhrává! Začít znova?');
  }
  /***spuštění funkce***/
  console.log(isWinningMove(buttonAfterClick));
};

const confirmMessage = () => {
  if (circlePlays.className === 'td--cross') {
    return 'Křížek vyhrává! Začít znova?';
  } else {
    return 'Kolečko vyhrává! Začít znova?';
  }
};
