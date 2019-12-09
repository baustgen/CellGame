import Game from './game'


class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
    }

    start() {
        this.bindKeyHandlers();
        setInterval(() => {
            this.game.moveObjects();
            this.game.checkCollision()
            this.game.draw(this.ctx);
        }, 20)
    }

    bindKeyHandlers() {

        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            if (e.keyCode === 65) {
                this.game.user[0].userMove('left')
            } else if (e.keyCode === 87) {
                this.game.user[0].userMove('up')
            } else if (e.keyCode === 68) {
                this.game.user[0].userMove('right')
            } else if (e.keyCode === 83) {
                this.game.user[0].userMove('down')
            } else if (e.keyCode === 37) {
                this.game.user[0].userMove('left')
            } else if (e.keyCode === 38) {
                this.game.user[0].userMove('up')
            } else if (e.keyCode === 39) {
                this.game.user[0].userMove('right')
            } else if (e.keyCode === 40) {
                this.game.user[0].userMove('down')
            } 
        })
    }

}

export default GameView;