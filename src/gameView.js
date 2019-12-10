import Game from './game'


class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.initial = true;
        this.start = this.start.bind(this)
        
    }
    
    start() {
        if (this.game) {
            const muted = this.game.muted
            this.game = new Game(muted);
        } else {
            this.game = new Game(false)
        }
        if (this.initial === true) {
            this.bindKeyHandlers();
            this.initial = false;
        }
        this.ctx.clearRect(0, 0, 600, 400);
        const canvas = document.getElementById('game-canvas')
        canvas.removeEventListener("click", this.start);

        this.gameInterval = setInterval(() => {
            if (this.game.over === false) {
                this.game.moveObjects();
                this.game.checkCollision()
                this.game.draw(this.ctx); 
            } else {
                this.end(this.game.over)
            }
        }, 20);
    }

    end(type) {
        clearInterval(this.gameInterval);
        this.ctx.clearRect(0, 0, 600, 400);
        this.game.backgroundAudio.pause()
        this.game.backgroundAudio.remove()

        const canvas = document.getElementById('game-canvas')

        if (type === 'loss') {
            this.ctx.fillStyle = "rgba(0, 0, 0, .6)";
            this.ctx.fillRect(0, 0, 600, 400);
            this.ctx.font = "26px Trebuchet MS";
            this.ctx.fillStyle = "#FFF";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Game Over", 300, 150);
            this.ctx.font = "20px Trebuchet MS";
            this.ctx.fillText("Avoid large bacteria until you're big enough to eat them!", 300, 225);
            this.ctx.font = "14px Trebuchet MS";
            this.ctx.fillText("Click Here to try again!", 300, 275);

            canvas.addEventListener("click", this.start);

        } else if (type === 'win') {
            this.ctx.fillStyle = "rgba(255, 255, 255, .8)";
            this.ctx.fillRect(0, 0, 600, 400);
            this.ctx.font = "26px Trebuchet MS";
            this.ctx.fillStyle = "#000";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Victory!", 300, 150);
            this.ctx.font = "20px Trebuchet MS";
            this.ctx.fillText("You're the best bacteria in the Petri dish!", 300, 225);
            this.ctx.font = "14px Trebuchet MS";
            this.ctx.fillText("Click anywhere to try again!", 300, 300);

            canvas.addEventListener("click", this.start);
        }
    }

    bindKeyHandlers() {

        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            if (e.keyCode === 65) {
                this.game.user[0].userMove('left');
            } else if (e.keyCode === 87) {
                this.game.user[0].userMove('up');
            } else if (e.keyCode === 68) {
                this.game.user[0].userMove('right');
            } else if (e.keyCode === 83) {
                this.game.user[0].userMove('down');
            } else if (e.keyCode === 37) {
                this.game.user[0].userMove('left');
            } else if (e.keyCode === 38) {
                this.game.user[0].userMove('up');
            } else if (e.keyCode === 39) {
                this.game.user[0].userMove('right');
            } else if (e.keyCode === 40) {
                this.game.user[0].userMove('down');
            }  else if (e.keyCode === 77) {
                this.game.audioToggle();
            } 
        })
    }

}

export default GameView;