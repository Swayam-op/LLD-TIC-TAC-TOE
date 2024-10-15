import { PlayingPiece } from "./PlayingPiece"
import { Pair } from "../DS/Pair"
export class Board{
    public size:number;
    public board:(PlayingPiece|null)[][];

    constructor(size:number){
        this.size = size
        this.board = Array.from({length:size}, ()=>Array(size).fill(null))
    }

    public AddPieceToBoard(row:number, col:number, playingPiece: PlayingPiece):Boolean{
        if(this.board[row][col] != null){
            return false;
        }
        this.board[row][col] = playingPiece
        return true
    }

    public getFreeCells():Pair<number,number>[]{
        let freeCells:Pair<number, number>[] = []
        for(let i = 0; i<this.size;i++){
            for(let j = 0; j<this.size;j++){
                if(this.board[i][j] == null){
                    freeCells.push(new Pair(i,j))
                }
            }
        }
        return freeCells
    }

    public printBoard(): void {
        for (let i = 0; i < this.size; i++) {
          for (let j = 0; j < this.size; j++) {
            if (this.board[i][j] !== null) {
              process.stdout.write(this.board[i][j]?.pieceType + "   "); // Print enum value (X or O)
            } else {
              process.stdout.write("    ");
            }
            process.stdout.write(" | ");
          }
          console.log();
        }
    }
}