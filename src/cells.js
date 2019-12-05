import Bacteria from './bacteria'
import User from './user'
import Game from './game'
import GameView from './gameView'


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d")
    const testGameView = new GameView(ctx);


    testGameView.start()
    window.ctx = ctx;
    window.Bacteria = Bacteria;
    window.User = User;
    window.Game = Game;
    window.GameView = GameView;
})