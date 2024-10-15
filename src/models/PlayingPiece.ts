import { PieceType } from "../enums/PieceType"
export abstract class PlayingPiece{
    pieceType:PieceType|null = null 
    constructor(pieceType:PieceType){
        this.pieceType = pieceType
    }
}