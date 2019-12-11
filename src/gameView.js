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
        this.ctx.clearRect(0, 0, 700, 500);
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
        this.ctx.clearRect(0, 0, 700, 500);
        this.game.backgroundAudio.pause()
        this.game.backgroundAudio.remove()

        const canvas = document.getElementById('game-canvas')

        if (type === 'loss') {
            this.ctx.fillStyle = "rgba(0, 0, 0, .6)";
            this.ctx.fillRect(0, 0, 700, 500);
            this.ctx.font = "36px Roboto";
            this.ctx.fillStyle = "#FFF";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Game Over", 350, 200);
            this.ctx.font = "24px Roboto";
            this.ctx.fillText("Avoid large bacteria until you're big enough to eat them!", 350,275);
            this.ctx.font = "20px Roboto";
            this.ctx.fillText("Click here to try again", 350, 325);

            canvas.addEventListener("click", this.start);

        } else if (type === 'win') {
            this.ctx.fillStyle = "rgba(255, 255, 255, .8)";
            this.ctx.fillRect(0, 0, 700, 500);
            this.ctx.font = "36px Roboto";
            this.ctx.fillStyle = "#000";
            this.ctx.textAlign = "center";
            this.ctx.fillText("Victory!", 350, 200);
            this.ctx.font = "24px Roboto";
            this.ctx.fillText("You're the best bacteria in the Petri dish!", 350, 275);
            this.ctx.font = "20px Roboto";
            this.ctx.fillText("Click here to try again", 350, 325);

            canvas.addEventListener("click", this.start);
        }
    }

    bindKeyHandlers() {

        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            switch (e.keyCode) {
                case 65:
                    this.game.user[0].userMove('left');
                    break;
            
                case 87:
                    this.game.user[0].userMove('up');
                    break;
            
                case 68:
                    this.game.user[0].userMove('right');
                    break;
            
                case 83:
                    this.game.user[0].userMove('down');
                    break;
            
                case 37:
                    this.game.user[0].userMove('left');
                    break;
            
                case 38:
                    this.game.user[0].userMove('up');
                    break;
            
                case 39:
                    this.game.user[0].userMove('right');
                    break;
            
                case 40:
                    this.game.user[0].userMove('down');
                    break;
            
                case 77:
                    this.game.audioToggle();
                    break;
            
                default:
                    break;
            }
        })
    }

}

export default GameView;