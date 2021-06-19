let boards = Array.from(document.querySelectorAll('li'));

let billboard = 
document.querySelector('.billboard');

billboard.style.setProperty('--boards', boards.length);
billboard.style.setProperty('--origin', `center center ${-100/boards.length * Math.sqrt(3) / 4 * .685}vw`)

boards.forEach((board, i) => {
  board.style.setProperty('--offset-x', -i / (boards.length));
  board.style.setProperty('--delay', `${-14000+Math.random()*200}ms`);
  console.log(-i / (boards.length));
});