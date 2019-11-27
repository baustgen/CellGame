class User {
    constructor({ pos, vel, scale }) {
        this.xPos = pos[0];
        this.yPos = pos[1];
        this.xVel = vel[0];
        this.yVel = vel[1];
        this.scale = scale;
    }

    draw(ctx) {
        let img = new Image(10, 10)
        if (this.vel > 0) {
            img.src = './documents/images/bacteria_blue_right.png'
        } else {
            img.src = './documents/images/bacteria_blue_left.png'
        }
        ctx.drawImage(img, this.xPos, this.yPos, (100 * this.scale), (43 * this.scale));
    }

    move() {
        this.xPos += this.xVel;
        this.yPos += this.yVel;
    }

    userMove(direction) {
        switch (direction) {
            case 'left':
                if (this.xVel > -10) {
                    this.xVel -= 1
                }
                break;
            case 'right':
                if (this.xVel < 10) {
                    this.xVel += 1
                }
                break;
            case 'up':
                if (this.yVel < 10) {
                    this.yVel += 1
                }
                break;
            case 'down':
                if (this.yVel > -10) {
                    this.yVel -= 1
                }
                break;
            default:
                break;
        }
    }

    grow(size) {
        this.scale += size
    }
}

export default User;