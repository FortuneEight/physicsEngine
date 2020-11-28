let t, diam, clr;

function initialize() {
    initMyVariableNames();
    diam = 40;
    clr = _clrAlmostWhite;
}

function setup() {
    initialize();
    createCanvas(460, 400).position(20, 20);
    let p = createVector(width / 2, height / 2);
    let v = createVector(1, 3);
    let a = createVector(0, 0.1);
    t = new Newton(p, v, a, diam, clr);
}

function draw() {
    background(_clrAlmostRed);
    t.show();
    t.update();
    t.edges();
}

function myEdges() {


    // if (this.pos.x > width) { this.pos.x = 0; }
    // if (this.pos.x < 0) { this.pos.x = width; }
    // if (this.pos.y > height) { this.pos.y = 0; }
    // if (this.pos.y < 0) { this.pos.y = height; }

}