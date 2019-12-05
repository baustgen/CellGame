import Bacteria from "./bacteria"
import User from './user'


class Game {
    constructor() {
        this.bacteria = []
        this.user = []
        this.addBacteria(10);

    }

    addBacteria(num = 1) {
        for (let i = 0; i < num; i++) {
            let bact = new Bacteria();
            this.bacteria.push(bact);     
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 600, 400);
        for (let i = 0; i < this.bacteria.length; i++) {
            const bact = this.bacteria[i];
            bact.draw(ctx);
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