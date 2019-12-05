import Bacteria from "./bacteria"
import User from './user'


class Game {
    constructor() {
        this.bacteria = []
        this.user = []
        this.addBacteria(8);
    }

    addBacteria(num = 1) {
        for (let i = 0; i < num; i++) {
            let bact = new Bacteria();
            this.bacteria.push(bact);     
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 600, 400);
        if (this.bacteria.length < 8) {
            this.addBacteria(8 - this.bacteria.length)
        }
        for (let i = 0; i < this.bacteria.length; i++) {
            const bact = this.bacteria[i];
            bact.draw(ctx);
        }
    }

    moveObjects() {
        for (let i = 0; i < this.bacteria.length; i++) {
            const bact = this.bacteria[i];
            bact.move();
            if (bact.xPos < -100 || bact.xPos > 600) {
                this.remove(bact)
            }
        }
    }

    remove(object) {
        if (object instanceof Bacteria) {
            this.bacteria.splice(this.bacteria.indexOf(object), 1);
        } else if (object instanceof User) {
            this.user.splice(this.user.indexOf(object), 1);
        }
    };
}

export default Game;