class User {
    constructor() {
        this.xPos = 250;
        this.yPos = 180;
        this.xVel = 0;
        this.yVel = 0;
        this.scale = 3.5;
        this.xDim = (20 * this.scale);
        this.yDim = (8 * this.scale);
        this.src = './assets/images/bacteria_blue_right.png'
    }

    draw(ctx) {
        let img = new Image(10, 10);
        img.src = this.src;
        ctx.drawImage(img, this.xPos, this.yPos, this.xDim, this.yDim);
    }

    move() {

        let newX = this.xPos + this.xVel;
        let newY = this.yPos + this.yVel;
        if (newX > 600 - this.xDim || newX < 0) {
            this.yPos = newY;
            this.xVel = 0;
            if (this.yVel > 0) {
                this.yVel -= 0.025
            } else {
                this.yVel += 0.025
            }
        } else if (newY > 400 - (this.yDim / 2) || newY < 0 - (this.yDim / 2)) {
            this.xPos = newX;
            this.yVel = 0;
            if (this.xVel > 0) {
                this.xVel -= 0.025
            } else {
                this.xVel += 0.025
            }
        } else {
            this.xPos = newX;
            this.yPos = newY;
            if (this.xVel > 0) {
                this.xVel -= 0.025
            } else {
                this.xVel += 0.025
            }
            if (this.yVel > 0) {
                this.yVel -= 0.025
            } else {
                this.yVel += 0.025
            }
        }
    }

    userMove(direction) {
        switch (direction) {
            case 'left':
                if (this.xVel > -7) {
                    this.xVel -= 1
                }
                this.src = './assets/images/bacteria_blue_left.png'
                break;
            case 'right':
                if (this.xVel < 7) {
                    this.xVel += 1
                }
                this.src = './assets/images/bacteria_blue_right.png'
                break;
            case 'up':
                if (this.yVel > -7) {
                    this.yVel -= 1
                }
                break;
            case 'down':
                if (this.yVel < 7) {
                    this.yVel += 1
                }
                break;
            default:
                break;
        }
    }

    grow(size) {
        this.scale += size;
        this.xDim = (20 * this.scale);
        this.yDim = (8 * this.scale);
    }
}

export default User;