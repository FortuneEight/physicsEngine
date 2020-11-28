let t1, diam, clr, p, v, a;

let gravityEarth, gravityMars, gravityMoon, gravityJupiter, gravitySun, gravityMercury, gravityCeres, gravityPluto;
let planetGravity;

function initialize(planet) {
    initMyVariableNames();
    diam = 40;
    clr = _clrAlmostBlack;
    gravitySun = 4.5667;
    gravityMercury = 0.0617;
    gravityEarth = 0.1635;
    gravityMoon = 0.0270;
    gravityMars = 0.0619;
    gravityCeres = 0.0045;
    gravityJupiter = 0.4132;
    gravityPluto = 0.0103;
    if (planet == "sun") { planetGravity = gravitySun; }
    if (planet == "mercury") { planetGravity = gravityMercury; }
    if (planet == "earth") { planetGravity = gravityEarth; }
    if (planet == "moon") { planetGravity = gravityMoon; }
    if (planet == "mars") { planetGravity = gravityMars; }
    if (planet == "ceres") { planetGravity = gravityCeres; }
    if (planet == "jupiter") { planetGravity = gravityJupiter; }
    if (planet == "pluto") { planetGravity = gravityPluto; }
    if (t1 != null) {
        t1.acc.y = planetGravity;
        t1.pos.x = width / 2;
        t1.pos.y = height / 2;
        t1.vel.x = 4;
        t1.vel.y = 9.8
    }
    earth();
    sun();
    mercury();
    moon();
    mars();
    ceres();
    jupiter();
    pluto();
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
    initialize("");
    createCanvas(windowWidth, windowHeight - 80);
    p = createVector(width / 2, height / 2);
    v = createVector(4, 9.8);
    a = createVector(0, planetGravity);
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

function earth() {
    document.querySelector("#earth").addEventListener('click', () => {
        initialize("earth");
    });
}

function sun() {
    document.querySelector("#sun").addEventListener('click', () => {
        initialize("sun");
    });
}

function mercury() {
    document.querySelector("#mercury").addEventListener('click', () => {
        initialize("mercury");
    });
}

function moon() {
    document.querySelector("#moon").addEventListener('click', () => {
        initialize("moon");
    });
}

function mars() {
    document.querySelector("#mars").addEventListener('click', () => {
        initialize("mars");
    });
}

function ceres() {
    document.querySelector("#ceres").addEventListener('click', () => {
        initialize("ceres");
    });
}

function jupiter() {
    document.querySelector("#jupiter").addEventListener('click', () => {
        initialize("jupiter");
    });
}

function pluto() {
    document.querySelector("#pluto").addEventListener('click', () => {
        initialize("pluto");
    });
}