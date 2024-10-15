"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayingPieceO = void 0;
const PieceType_1 = require("../enums/PieceType");
const PlayingPiece_1 = require("./PlayingPiece");
class PlayingPieceO extends PlayingPiece_1.PlayingPiece {
    constructor() {
        super(PieceType_1.PieceType.O);
    }
}
exports.PlayingPieceO = PlayingPieceO;
