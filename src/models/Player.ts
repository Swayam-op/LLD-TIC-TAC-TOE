import { PlayingPiece } from "./PlayingPiece"

export class Player{
    private name:string;
    private playingPiece:PlayingPiece;
    constructor(name:string, playingPiece:PlayingPiece){
        this.name = name
        this.playingPiece = playingPiece
    }
    
    public getPlayingPiece():PlayingPiece{
        return this.playingPiece
    }

    public getName():string{
        return this.name
    }

}