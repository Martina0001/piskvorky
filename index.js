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
