/** 
'use strict';
let player = 'circle';
const btnElm = document.querySelectorAll('.tabulka');
const imgElm = document.querySelector('.bunka');
btnElm.forEach((table) => {
  table.addEventListener('click', (event) => {
    if (player === 'circle') {
      button.target.classList.add('td--circle');
      imgElm.src = 'images/cross.svg';
      player = 'cross';
      //  button.disabled = true;
    } else if (player === 'cross') {
      button.target.classList.add('td--cross');
      imgElm.src = 'images/circle.svg';
      player = 'circle';
      //  button.disabled = true;
    }
  });
});
*/

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
const fields = document.querySelectorAll('.td'); // Selektor pozměň tak, aby odpovídal tvému kódu.

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

/**** *

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.td'); // Selektor pozměň tak, aby odpovídal tvému kódu.

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
/**vrácení příslušného prvku**/

/*const getField = (row, column) => fields[row * boardSize + column]

/**vrácení řetězce**/
/*const getSymbol = (field) => {
	// Název třídy přizpůsob tvému kódu.
	if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
}

/** sousedních pět? **/

/*const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
},


const symbolsToWin = 5;
const isWinningMove = (cell) => {
  const origin = getPosition(cell);
  const symbol = getSymbol(cell);**/
