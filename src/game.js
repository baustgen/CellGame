import Bacteria from "./bacteria"
import User from './user'
import Util from './util'


class Game {
    constructor() {
        this.over = false;
        this.bacteria = []
        this.user = []
        this.addBacteria(8);
        this.addUser();
    }

    addBacteria(num = 1) {
        for (let i = 0; i < num; i++) {
            let bact = new Bacteria();
            this.bacteria.push(bact);     
        }
    }

    addUser() {
            let u = new User();
            this.user.push(u);     
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
        this.user[0].draw(ctx);
    }

    moveObjects() {
        for (let i = 0; i < this.bacteria.length; i++) {
            const bact = this.bacteria[i];
            bact.move();
            if (bact.xPos < -100 || bact.xPos > 600) {
                bact.reset();
            }
        }
        this.user[0].move()
    }

    checkCollision() {
        let user = this.user[0];

        for (let i = 0; i < this.bacteria.length; i++) {
            const bact = this.bacteria[i];
            if (Util.collision(bact, user)) {
                if (user.scale > 10) {
                    this.over = 'win'
                } else if (user.scale > bact.scale) {
                    bact.reset()
                    user.grow(0.5)
                } else {
                    this.over = 'loss'
                }
            }
            
        }
    }

}

export default Game;