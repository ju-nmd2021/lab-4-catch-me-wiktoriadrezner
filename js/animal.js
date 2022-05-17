export default class Animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.speedX = Math.floor(Math.random() * 7) + 1;
    this.speedY = Math.floor(Math.random() * 7) + 1;
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
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    textAlign(CENTER);
    textSize(60);
    text("🐹", 0, 22);
    // some debug drawing so you can see the clickarea
    noFill();
    stroke(0, 0, 0);
    ellipse(0, 0, this.size);
    pop();
  }

  hitTest(x, y) {
    const p1 = createVector(x, y);
    const p2 = createVector(this.x, this.y);
    return Math.abs(p1.dist(p2)) < this.size / 2;
  }
}
