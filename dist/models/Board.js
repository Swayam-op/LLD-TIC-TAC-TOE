"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Pair_1 = require("../DS/Pair");
class Board {
    constructor(size) {
        this.size = size;
        this.board = Array.from({ length: size }, () => Array(size).fill(null));
    }
    AddPieceToBoard(row, col, playingPiece) {
        if (this.board[row][col] != null) {
            return false;
        }
        this.board[row][col] = playingPiece;
        return true;
    }
    getFreeCells() {
        let freeCells = [];
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.board[i][j] == null) {
                    freeCells.push(new Pair_1.Pair(i, j));
                }
            }
        }
        return freeCells;
    }
    printBoard() {
        var _a;
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.board[i][j] !== null) {
                    process.stdout.write(((_a = this.board[i][j]) === null || _a === void 0 ? void 0 : _a.pieceType) + "   "); // Print enum value (X or O)
                }
                else {
                    process.stdout.write("    ");
                }
                process.stdout.write(" | ");
            }
            console.log();
        }
    }
}
exports.Board = Board;
