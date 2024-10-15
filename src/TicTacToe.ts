// src/TicTacToeGame.ts

import { Board } from './models/Board';
import { PieceType } from './enums/PieceType'; // Enum for piece type (X or O)
import { Player } from './models/Player';
import { PlayingPieceX } from './models/PlayingPieceX';
import { PlayingPieceO } from './models/PlayingPieceO';
import { Pair } from './DS/Pair'; // Assuming the Pair class or use a tuple
import * as readlineSync from 'readline-sync';

export class TicTacToeGame {
  players: Deque<Player>; // Deque will be an alias for LinkedList functionality
  gameBoard: Board;

  constructor() {
    this.players = [];
    this.gameBoard = new Board(3); // Default board size
  }

  // Method to initialize the game
  public initializeGame(): void {
    // Creating 2 Players
    const crossPiece = new PlayingPieceX();
    const player1 = new Player('Player1', crossPiece);

    const noughtsPiece = new PlayingPieceO();
    const player2 = new Player('Player2', noughtsPiece);

    // Add players to deque
    this.players.push(player1);
    this.players.push(player2);

    // Initialize board
    this.gameBoard = new Board(3);
  }

  // Method to start the game
  public startGame(): string {
    let noWinner = true;
    while (noWinner) {
      // Take out the player whose turn it is and also put the player back in the list
      const playerTurn = this.players.shift()!; // Non-null assertion, because shift could return undefined

      // Print the board
      this.gameBoard.printBoard();

      // Get the free spaces from the board
      const freeSpaces: Pair<number, number>[] = this.gameBoard.getFreeCells();
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
  public isThereWinner(row: number, column: number, pieceType: PieceType|null): boolean {
    let rowMatch = true;
    let columnMatch = true;
    let diagonalMatch = true;
    let antiDiagonalMatch = true;

    // Check the row
    for (let i = 0; i < this.gameBoard.size; i++) {
      if (this.gameBoard.board[row][i] === null || this.gameBoard.board[row][i]?.pieceType !== pieceType) {
        rowMatch = false;
      }
    }

    // Check the column
    for (let i = 0; i < this.gameBoard.size; i++) {
      if (this.gameBoard.board[i][column] === null || this.gameBoard.board[i][column]?.pieceType !== pieceType) {
        columnMatch = false;
      }
    }

    // Check the main diagonal
    for (let i = 0; i < this.gameBoard.size; i++) {
      if (this.gameBoard.board[i][i] === null || this.gameBoard.board[i][i]?.pieceType !== pieceType) {
        diagonalMatch = false;
      }
    }

    // Check the anti-diagonal
    for (let i = 0, j = this.gameBoard.size - 1; i < this.gameBoard.size; i++, j--) {
      if (this.gameBoard.board[i][j] === null || this.gameBoard.board[i][j]?.pieceType !== pieceType) {
        antiDiagonalMatch = false;
      }
    }

    return rowMatch || columnMatch || diagonalMatch || antiDiagonalMatch;
  }
}

// Deque definition for TypeScript (since there's no native Deque type)
type Deque<T> = T[];
