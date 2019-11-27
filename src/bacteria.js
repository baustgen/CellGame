class Bacteria {
    constructor({scale}) {
        this.xPos = pos[0];
        this.yPos = pos[1];
        this.vel = vel;
        this.scale = scale;
    }

    draw(ctx) {
        let img = new Image(10,10)
        if (this.vel > 0) {
            img.src = './documents/images/bacteria_red_right.png'
        } else {
            img.src = './documents/images/bacteria_red_left.png'
        }
        ctx.drawImage(img, this.xPos, this.yPos, (100 * this.scale), (43 * this.scale));
    }

    move() {
        this.xPos += this.vel;
    }
}

export default Bacteria;