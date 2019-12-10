import Bacteria from './bacteria'
import User from './user'
import Game from './game'
import GameView from './gameView'


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = "rgba(100, 100, 100, .5)";
    ctx.fillRect(0, 0, 600, 400);
    ctx.font = "26px Trebuchet MS";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Click here to start!", 300, 225);
    
    const starter = (e) => {
        const gameView = new GameView(ctx);

        gameView.start()
        e.target.removeEventListener("click", starter)

    }
    canvas.addEventListener("click", starter)
})