const View = require("./ttt-view.js");// require appropriate file
const Game = require('../ttt_node/game.js') // require appropriate file


document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const posses = document.getElementById('ttt')
  const game = new Game();
  const view = new View(game, posses);
  view.setupBoard();
  view.bindEvents();
});
