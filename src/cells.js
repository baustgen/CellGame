import Bacteria from './bacteria'
import User from './user'

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext("2d")

    window.Bacteria = Bacteria;
    window.User = User;
})