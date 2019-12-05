class Bacteria {
    constructor() {
        let pos = Bacteria.randomPosition()
        this.xPos = pos[0];
        this.yPos = pos[1];
        this.vel = this.xPos < 500 ? Math.floor(Math.random() * 9) + 1 : Math.floor(Math.random() * -9) - 1;
        this.scale = Math.floor(Math.random() * 10);

        if (this.vel === 0) {
            this.xPos < 500 ? this.vel += 1 : this.vel -= 1;
        }
    }

    static randomPosition() {
        let x;
        let coin = Math.random();
        if (coin > 0.5) {
            x = Math.floor(Math.random() * 20);
        } else {
            x = 600 - Math.floor(Math.random() * 20);
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
        ctx.drawImage(img, this.xPos, this.yPos, (20 * this.scale), (8 * this.scale));
    }

    move() {
        this.xPos += this.vel/4;
    }
}

export default Bacteria;