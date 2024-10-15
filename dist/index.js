"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TicTacToe_1 = require("./TicTacToe");
const game = new TicTacToe_1.TicTacToeGame();
game.initializeGame();
console.log("Winner of the game is : ", game.startGame());
