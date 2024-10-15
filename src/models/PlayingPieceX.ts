import { PieceType } from "../enums/PieceType";
import { PlayingPiece } from "./PlayingPiece";

export class PlayingPieceX extends PlayingPiece{
    constructor(){
        super(PieceType.X)
    }
}