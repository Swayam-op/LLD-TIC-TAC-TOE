"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, playingPiece) {
        this.name = name;
        this.playingPiece = playingPiece;
    }
    getPlayingPiece() {
        return this.playingPiece;
    }
    getName() {
        return this.name;
    }
}
exports.Player = Player;
