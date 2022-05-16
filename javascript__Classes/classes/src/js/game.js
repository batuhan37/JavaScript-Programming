export class Game {
  constructor(gameElement) {
    this.gameElement = gameElement;
    this.count = null;
    this.number = null;

    this.startButton = gameElement.querySelector('#startButton');
    this.guessInputGroup = gameElement.querySelector('#guessInputGroup');
    this.guessButton =  gameElement.querySelector('#guessButton');
    this.guessInput= gameElement.querySelector('#guessInput');
    this.alertInfo = gameElement.querySelector('#alertInfo');
    this.divCount = gameElement.querySelector('#count');
  }

  init() {
    console.log("oyun başladı")
  }

  start() {

  }

  random () {

  }

  restart() {

  }

  printCount() {

  }

  guess(value) {

  }

  over (text) {

  }

  wrong() {

  }

  correct() {

  }
}