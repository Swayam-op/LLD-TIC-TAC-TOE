"use strict";
// src/TicTacToeGame.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToeGame = void 0;
const Board_1 = require("./models/Board");
const Player_1 = require("./models/Player");
const PlayingPieceX_1 = require("./models/PlayingPieceX");
const PlayingPieceO_1 = require("./models/PlayingPieceO");
const readlineSync = __importStar(require("readline-sync"));
class TicTacToeGame {
    constructor() {
        this.players = [];
        this.gameBoard = new Board_1.Board(3); // Default board size
    }
    // Method to initialize the game
    initializeGame() {
        // Creating 2 Players
        const crossPiece = new PlayingPieceX_1.PlayingPieceX();
        const player1 = new Player_1.Player('Player1', crossPiece);
        const noughtsPiece = new PlayingPieceO_1.PlayingPieceO();
        const player2 = new Player_1.Player('Player2', noughtsPiece);
        // Add players to deque
        this.players.push(player1);
        this.players.push(player2);
        // Initialize board
        this.gameBoard = new Board_1.Board(3);
    }
    // Method to start the game
    startGame() {
        let noWinner = true;
        while (noWinner) {
            // Take out the player whose turn it is and also put the player back in the list
            const playerTurn = this.players.shift(); // Non-null assertion, because shift could return undefined
            // Print the board
            this.gameBoard.printBoard();
            // Get the free spaces from the board
            const freeSpaces = this.gameBoard.getFreeCells();
            if (freeSpaces.length === 0) {
                noWinner = false;
                continue;
            }
            // Read the user input
            console.log(`Player: ${playerTurn.getName()} Enter row,column:`);
            const input = readlineSync.question();
            const values = input.split(',');
            const inputRow = parseInt(values[0]);
            const inputColumn = parseInt(values[1]);
            // Place the piece
            const pieceAddedSuccessfully = this.gameBoard.AddPieceToBoard(inputRow, inputColumn, playerTurn.getPlayingPiece());
            if (!pieceAddedSuccessfully) {
                // Player cannot insert the piece into this cell, they must choose another cell
                console.log('Incorrect position chosen, try again.');
                this.players.unshift(playerTurn); // Push back to the start of the queue
                continue;
            }
            this.players.push(playerTurn); // Add to the end of the deque again
            const winner = this.isThereWinner(inputRow, inputColumn, playerTurn.getPlayingPiece().pieceType);
            if (winner) {
                return playerTurn.getName();
            }
        }
        return 'tie';
    }
    // Method to check if there's a winner
    isThereWinner(row, column, pieceType) {
        var _a, _b, _c, _d;
        let rowMatch = true;
        let columnMatch = true;
        let diagonalMatch = true;
        let antiDiagonalMatch = true;
        // Check the row
        for (let i = 0; i < this.gameBoard.size; i++) {
            if (this.gameBoard.board[row][i] === null || ((_a = this.gameBoard.board[row][i]) === null || _a === void 0 ? void 0 : _a.pieceType) !== pieceType) {
                rowMatch = false;
            }
        }
        // Check the column
        for (let i = 0; i < this.gameBoard.size; i++) {
            if (this.gameBoard.board[i][column] === null || ((_b = this.gameBoard.board[i][column]) === null || _b === void 0 ? void 0 : _b.pieceType) !== pieceType) {
                columnMatch = false;
            }
        }
        // Check the main diagonal
        for (let i = 0; i < this.gameBoard.size; i++) {
            if (this.gameBoard.board[i][i] === null || ((_c = this.gameBoard.board[i][i]) === null || _c === void 0 ? void 0 : _c.pieceType) !== pieceType) {
                diagonalMatch = false;
            }
        }
        // Check the anti-diagonal
        for (let i = 0, j = this.gameBoard.size - 1; i < this.gameBoard.size; i++, j--) {
            if (this.gameBoard.board[i][j] === null || ((_d = this.gameBoard.board[i][j]) === null || _d === void 0 ? void 0 : _d.pieceType) !== pieceType) {
                antiDiagonalMatch = false;
            }
        }
        return rowMatch || columnMatch || diagonalMatch || antiDiagonalMatch;
    }
}
exports.TicTacToeGame = TicTacToeGame;
