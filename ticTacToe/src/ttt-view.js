const Game = require('../ttt_node/game.js');

class View {
  constructor(game, el) {
    this.handleClick = this.handleClick.bind(this)
    this.game = game
    this.el = el
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
    let mark = this.game.currentPlayer;
    console.log(mark)
    let pos = e.target.getAttribute('data-pos');
    let posX = parseInt(pos[1]);
    let posY = parseInt(pos[3]);
    e.target.style.backgroundColor = 'lightblue'
    
    if (e.target.attributes['class'] === undefined){
      e.target.setAttribute('class', mark) 
      this.game.playMove([posX,posY]);
      e.target.innerHTML = mark;
    }else{
      alert ("Hey fck face, wrong move");
    }
    
    this.makeMove(pos);
  }
  
  bindEvents() {
    let ul = document.querySelector('ul');
    ul.addEventListener('click', this.handleClick);
  }
  
  
  makeMove(square) {

    if (this.game.isOver() === true){
      if(this.game.winner() === null){
        let p = document.querySelector('.result')
        p.innerHTML = 'Draw is as good as a lose!'
      }else{
        let mark = this.game.currentPlayer;
        if (mark === 'o'){
          let p = document.querySelector('.result')
          p.innerHTML = `Well Done X`
          let winners = document.querySelectorAll("[class = 'x']")
          // debugger
          winners.forEach(winner => {
            winner.style.backgroundColor = 'lightgreen'
          })
        }else{
          let p = document.querySelector('.result')
          p.innerHTML = 'Well Done O'
          let winners = document.querySelectorAll("[class = 'o']")
          winners.forEach(winner => {
            winner.style.backgroundColor = 'lightgreen'
          })
        }
      }
      
      // let winner = document.getElementsByClassName('.X')
    }

  }
  
}

module.exports = View;

// const addMove = (e) => {
//   e.preventDefault;
//   let input = document.querySelector('li')
// }
