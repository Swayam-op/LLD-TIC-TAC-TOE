import { PieceType } from "../enums/PieceType";
import { PlayingPiece } from "./PlayingPiece";

export class PlayingPieceO extends PlayingPiece{
    constructor(){
        super(PieceType.O)
    }
}