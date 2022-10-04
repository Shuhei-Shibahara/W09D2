const View = require("./ttt-view.js");// require appropriate file
// const Game = // require appropriate file

// const game = new Game();
const view = new View();

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const posses = document.getElementById('ttt')
  view.setupBoard();
  view.bindEvents();
});
