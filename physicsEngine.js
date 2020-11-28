let t1, diam, clr;

let gravityEarth, gravityMars, gravityMoon, gravityJupiter, gravitySun, gravityMercury, gravityCeres, gravityPluto;
let planetGravity;

function initialize() {
    initMyVariableNames();
    diam = 40;
    clr = _clrAlmostRed;
    gravitySun = 4.5667;
    gravityMercury = 0.0617;
    gravityEarth = 0.1635;
    gravityMars = 0.0619;
    gravityCeres = 0.0045;
    gravityJupiter = 0.4132;
    gravityPluto = 0.0103;
    planetGravity = gravityEarth;
}

// 0.1635 in Earth
// 0.0619 in Mars
// 0.0270 in Moon
// 0.4132 in Jupiter
// 4.5667 in Sun
// 0.0617 in Mercury
// 0.0045 in Ceres
// 0.0103 in Pluto

function setup() {
    initialize();
    createCanvas(windowWidth - 20, windowHeight - 20).position(10, 10);
    let p = createVector(width / 2, height / 2);
    let v = createVector(4, 9.8);
    let a = createVector(0, planetGravity);
    t1 = new Newton(p, v, a, diam, clr);
}

function draw() {
    background(_clrAlmostWhite);
    t1.show();
    t1.update(true);
    t1.edges();
}

function myEdges() {
    if (t.pos.x > width) { t.pos.x = 0; }
    if (t.pos.x < 0) { t.pos.x = width; }
    if (t.pos.y > height) { t.pos.y = 0; }
    if (t.pos.y < 0) { t.pos.y = height; }
}