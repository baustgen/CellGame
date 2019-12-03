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

}

export default Game;