import Game from './game'


class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;

    }

    start() {
        setInterval(() => {
            this.game.moveObjects();
            this.game.checkCollision()
            this.game.draw(this.ctx);
        }, 20)
    }

}

export default GameView;