class User {
    constructor() {
        this.xPos = 250;
        this.yPos = 180;
        this.xVel = 0;
        this.yVel = 0;
        this.scale = 0.6;
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