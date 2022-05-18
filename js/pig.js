import Animal from "./animal.js";

export default class Pig extends Animal {
    constructor(x, y) {
        super(x, y); /* to access and call functions on an object's parent */
        this.x = x;
        this.y = y;
        this.speedX = Math.floor(Math.random() * 7) + 5;
        this.speedY = Math.floor(Math.random() * 2) + 2;
        this.rotation = 0;
    }

    update() {
        if (this.x < this.size / 2 || this.x > width - this.size / 2) {
            this.speedX *= -1;
        }
        if (this.y < this.size / 2 || this.y > height - this.size / 2) {
            this.speedY *= -1;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += 0.005;
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.rotation);
        strokeWeight();
        scale(2);
        fill("#EEC4E9"); // ears (big)
        ellipse(-10, -10, 12);
        ellipse(10, -10, 12);
        fill("#E7B3D4"); // ears (small)
        ellipse(-10, -10, 8);
        ellipse(10, -10, 8);
        fill("#EEC4E9"); // body
        ellipse(0, 0, 30);
        fill("#4C464A"); // eyes
        ellipse(-7, -5, 4, 4);
        ellipse(7, -5, 4, 4);
        fill("#C471A6"); // nose
        ellipse(0, 5, 13, 10);
        fill("#83777F");
        ellipse(-3, 5, 2, 4);
        ellipse(3, 5, 2, 4);
        pop();
    }
}
