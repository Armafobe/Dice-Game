let globalScore1 = document.getElementById('global-score1');
let globalScore2 = document.getElementById('global-score2');
let options = document.querySelector('.game-options');
let roundScore1 = document.getElementById('round-score1');
let roundScore2 = document.getElementById('round-score2');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let activePlayer;
let scores;
const newGame = document.getElementById('new');
const rollDice = document.getElementById('roll');
const hold = document.getElementById('hold');
const dice = document.getElementById('dice');



const playNewGame = () => {
  globalScore1.innerHTML = '0';
  globalScore2.innerHTML = '0';
  roundScore1.innerHTML = '0';
  roundScore2.innerHTML = '0';
  gameRoundScore = 0;
  player1.innerHTML = 'Player 1';
  player2.innerHTML = 'Player 2';
  options.style.visibility = 'visible';
  newGame.style.color = 'black';
  newGame.style.fontWeight = '300';
  activePlayer = 1;
  scores = [null, 0, 0];
  player();
}

const diceClass = ['bi-dice-1', 'bi-dice-2', 'bi-dice-3', 'bi-dice-4', 'bi-dice-5', 'bi-dice-6'];

const diceRoll = () => {
  let rand = Math.floor(Math.random() * 6);
  dice.classList.remove(...diceClass);
  switch (rand) { 
    case 0:
      dice.classList.add('bi-dice-1');
      gameRoundScore = 0;
      document.querySelector('#round-score' + activePlayer).innerHTML = gameRoundScore;
      nextPlayer();
      break;
    case 1:
      dice.classList.add('bi-dice-2');
      gameRoundScore += 2;
      document.querySelector('#round-score' + activePlayer).innerHTML = gameRoundScore;
      break;
    case 2:
      dice.classList.add('bi-dice-3');
      gameRoundScore += 3;
      document.querySelector('#round-score' + activePlayer).innerHTML = gameRoundScore;
      break;
    case 3:
      dice.classList.add('bi-dice-4');
      gameRoundScore += 4;
      document.querySelector('#round-score' + activePlayer).innerHTML = gameRoundScore;
      break;
    case 4:
      dice.classList.add('bi-dice-5');
      gameRoundScore += 5;
      document.querySelector('#round-score' + activePlayer).innerHTML = gameRoundScore;
      break;
    case 5:
      dice.classList.add('bi-dice-6');
      gameRoundScore += 6;
      document.querySelector('#round-score' + activePlayer).innerHTML = gameRoundScore;
      break;  
    };
}

const nextPlayer = () => {
  activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
  player();
}

const winner = () => {
  if (scores[activePlayer] >= 100) {
    document.querySelector('#player' + activePlayer).innerHTML = 'Winner !';
    options.style.visibility = 'hidden';
    newGame.style.color = '#eb5165';
    newGame.style.fontWeight = 'bold';
  }
}

const player = () => {
  if (activePlayer === 1 ) {
    document.getElementById('turn2').style.visibility = 'hidden';
    document.getElementById('turn1').style.visibility = 'visible';
    document.getElementById('player1').style.fontWeight = 'bold';
    document.getElementById('player2').style.fontWeight = '300';
  } else {
    document.getElementById('turn1').style.visibility = 'hidden';
    document.getElementById('turn2').style.visibility = 'visible';
    document.getElementById('player1').style.fontWeight = '300';
    document.getElementById('player2').style.fontWeight = 'bold';
  }
}

const holdPoints = () => {
    scores[activePlayer] += gameRoundScore;
    document.querySelector('#global-score'+ activePlayer).innerHTML = scores[activePlayer];
    gameRoundScore = 0;
    document.querySelector('#round-score' + activePlayer).innerHTML = 0;
    if (scores[activePlayer] >= 100) {
      winner();
    } else {
      nextPlayer();
    }
}

hold.addEventListener('click', holdPoints);
rollDice.addEventListener('click', diceRoll);
window.addEventListener('load', playNewGame);
newGame.addEventListener('click', playNewGame);