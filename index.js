'use strict';

let player = 'circle';

/***/

const btnElm = document.querySelectorAll('.td');

const imgElm = document.querySelector('.circle');

/***/

btnElm.forEach((table) => {
  table.addEventListener('click', (event) => {
    if (player === 'circle') {
      button.classList.add('td--circle');
      imgElm.src = 'images/cross.svg';
      player = 'cross';
      button.disabled = true;
    } else if (player === 'cross') {
      button.classList.add('td--cross');
      imgElm.src = 'images/circle.svg';
      player = 'circle';
      button.disabled = true;
    }
  });
});
