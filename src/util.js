const Util = {

    collision(bact, user) {
        const userCenterX = user.xPos + user.xDim / 2;
        const bactCenterX = bact.xPos + bact.xDim / 2;
        const userCenterY = user.yPos + user.yDim / 2;
        const bactCenterY = bact.yPos + bact.yDim / 2;
        if ((Math.abs(userCenterX - bactCenterX) < (bact.xDim / 2.5 + user.xDim / 2.5)) && (Math.abs(userCenterY - bactCenterY) < (bact.yDim / 3 + user.yDim / 3))) {
            return true;
        } else {
            return false;
        }
    }
}