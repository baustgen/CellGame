import GameView from './gameView'
import Util from './util'


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = "rgba(100, 100, 100, .5)";
    ctx.fillRect(0, 0, Util.DIMX, Util.DimY);
    ctx.font = "26px Trebuchet MS";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText("Click here to start!", 350, 250);
    
    const starter = (e) => {
        const gameView = new GameView(ctx);

        gameView.start()
        e.target.removeEventListener("click", starter)

    }
    canvas.addEventListener("click", starter)
})