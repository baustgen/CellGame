class Bacteria {
    constructor() {
        const pos = Bacteria.randomPosition()
        this.xPos = pos[0];
        this.yPos = pos[1];
        this.vel = this.xPos < 500 ? Math.floor(Math.random() * 7) + 2 : Math.floor(Math.random() * -7) - 2;
        const scale = Math.floor(Math.random() * 10);
        this.xDim = (20 * scale);
        this.yDim = (8 * scale);


        if (this.vel === 0) {
            this.xPos < 500 ? this.vel += 1 : this.vel -= 1;
        }
    }

    static randomPosition() {
        let x;
        let coin = Math.random();
        if (coin > 0.5) {
            x = -100;
        } else {
            x = 600;
        }
        const y = Math.floor(Math.random() * 350);
        return [x, y];
    }

    draw(ctx) {
        let img = new Image(10,10)
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
}

export default Bacteria;