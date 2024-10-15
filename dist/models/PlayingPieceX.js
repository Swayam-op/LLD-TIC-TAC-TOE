"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayingPieceX = void 0;
const PieceType_1 = require("../enums/PieceType");
const PlayingPiece_1 = require("./PlayingPiece");
class PlayingPieceX extends PlayingPiece_1.PlayingPiece {
    constructor() {
        super(PieceType_1.PieceType.X);
    }
}
exports.PlayingPieceX = PlayingPieceX;
