const Game = require('../ttt_node/game.js')

class View {
  constructor(game, el) {

  }

  setupBoard() {
    let figure = document.querySelector('.ttt');
    console.log(figure)
    let ul = document.createElement('ul');
    figure.appendChild(ul);
    
    
    for(let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        let li = document.createElement('li');
        li.setAttribute('data-pos',`[${i},${j}]`);
        ul.appendChild(li);
      }
    }
  }
  handleClick(e) {
    let mark = 'X';
    let pos = e.target.attributes['data-pos'].value

    e.target.style.backgroundColor = 'lightblue'
   
    if (e.target.attributes['class'] === undefined){
      e.target.setAttribute('class', mark) 
    }
    debugger
    this.makeMove(pos);
  }
  
  bindEvents() {
    let ul = document.querySelector('ul');
    ul.addEventListener('click', this.handleClick);
  }
  
  
  makeMove(square) {


  }
  
}

module.exports = View;

// const addMove = (e) => {
//   e.preventDefault;
//   let input = document.querySelector('li')
// }
