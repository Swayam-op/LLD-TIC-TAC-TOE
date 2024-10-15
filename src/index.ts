import { TicTacToeGame } from "./TicTacToe";

const game = new TicTacToeGame();
game.initializeGame();
console.log("Winner of the game is : ", game.startGame())