class Bacteria {
    constructor({ pos, vel, scale}) {
        this.xPos = pos[0];
        this.yPos = pos[1];
        this.vel = vel;
        this.scale = scale;
    }

    draw(ctx) {
        let img = new Image((10 * this.scale),(10 * this.scale))
        ctx.drawImage(img, this.xPos, this.yPos);
    }
}