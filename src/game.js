import Bacteria from "./bacteria"
import User from './user'


class Game {
    constructor() {
        this.bacteria = []
        this.user = []

    }

    addBacteria(num = 1) {
        for (let i = 0; i < num; i++) {
            let bact = new Bacteria();
            this.bacteria.push(bact);     
        }
    }

    draw(ctx) {
        ctx.clearRect();
        for (let i = 0; i < this.bacteria.length; i++) {
            const bact = this.bacteria[i];
            bact.draw();
        }
    }

    moveObjects() {
        for (let i = 0; i < this.bacteria.length; i++) {
            const bact = this.bacteria[i];
            bact.move();
        }
    }

}

export default Game;