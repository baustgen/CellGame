import { DIMX, DIMY } from "./util";

class Bacteria {
    constructor() {
        this.scale = Math.floor(Math.random() * 9) + 2;
        this.xDim = (20 * this.scale);
        this.yDim = (8 * this.scale);
        const pos = Bacteria.randomPosition()
        this.xPos = pos[0];
        this.yPos = pos[1];
        this.vel = this.xPos < 0 
            ? Math.floor(Math.random() * 7) + 2 
            : Math.floor(Math.random() * -7) - 2;
    }

    static randomPosition() {
        let x;
        let coin = Math.floor(Math.random() * 2);
        if (coin === 1) {
            x = -200;
        } else {
            x = 750;
        }
        const y = Math.floor(Math.random() * 460) - 10;
        return [x, y];
    }

    draw(ctx) {
        let img = new Image(100,100)
        if (this.vel > 0) {
            img.src = './assets/images/bacteria_red_right.png'
        } else {
            img.src = './assets/images/bacteria_red_left.png'
        }
        ctx.drawImage(img, this.xPos, this.yPos, this.xDim, this.yDim);
    }

    move() {
        this.xPos += this.vel/4;
    }

    reset() {
        this.scale = Math.floor(Math.random() * 9) + 2;
        this.xDim = (20 * this.scale);
        this.yDim = (8 * this.scale);
        const pos = Bacteria.randomPosition()
        this.xPos = pos[0];
        this.yPos = pos[1];
        this.vel = this.xPos < 500 ? Math.floor(Math.random() * 7) + 2 : Math.floor(Math.random() * -7) - 2;
    }
}

export default Bacteria;