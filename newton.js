class Newton {

    static wallDampeningX = 0.80;
    static wallDampeningY = 0.80;
    static numNewtons = 0;

    constructor(pos, vel, acc, diam, clr) {
        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
        this.diam = diam;
        this.clr = clr;
        Newton.numNewtons += 1;
    };

    show() { // This shows the circle.
        fill(this.clr);
        circle(this.pos.x, this.pos.y, this.diam);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.debugOutput();
    }

    edges(func) {
        if (func == null) {
            if (this.pos.x > width - this.diam / 2) {
                this.pos.x = width - this.diam / 2;
                this.vel.x *= -Newton.wallDampeningX;
            }
            if (this.pos.x < this.diam / 2) {
                this.pos.x = this.diam / 2;
                this.vel.x *= -Newton.wallDampeningX;
            }
            if (this.pos.y > height - this.diam / 2) {
                this.pos.y = height - this.diam / 2;
                this.vel.y *= -Newton.wallDampeningY;
            }
            if (this.pos.y < this.diam / 2) {
                this.pos.y = this.diam / 2;
                this.vel.y *= -Newton.wallDampeningY;
            }
        } else {
            func();
        }
    }

    debugOutput() {
        textSize(18);
        fill("black");
        text(`Position: (${this.pos.x.toFixed(6)}, ${this.pos.y.toFixed(6)})`, 20, 40);
        text(`Velocity: (${this.vel.x.toFixed(6)}, ${this.vel.y.toFixed(6)})`, 20, 80);
        text(`Acceleration: (${this.acc.x.toFixed(6)}, ${this.acc.y.toFixed(6)})`, 20, 120);
    }
}