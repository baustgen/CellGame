class Bacteria {
    constructor() {
        this.scale = Math.floor(Math.random() * 9) + 2;
        this.xDim = (20 * this.scale);
        this.yDim = (8 * this.scale);
        const pos = Bacteria.randomPosition()
        this.xPos = pos[0];
        this.yPos = pos[1];
        this.vel = this.xPos < 500 ? Math.floor(Math.random() * 7) + 2 : Math.floor(Math.random() * -7) - 2;
    }

    static randomPosition() {
        let x;
        let coin = Math.random();
        if (coin > 0.5) {
            x = -150;
        } else {
            x = 615;
        }
        const y = Math.floor(Math.random() * 360) - 10;
        return [x, y];
    }

    draw(ctx) {
        let img = new Image(100,100)
        if (this.vel > 0) {
            img.src = './documents/images/bacteria_red_right.png'
        } else {
            img.src = './documents/images/bacteria_red_left.png'
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