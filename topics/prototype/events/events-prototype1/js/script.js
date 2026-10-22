/**
 * Don't Wake The Baby
 * Marie Eryne Yow Chok Nee
 *
 * The baby is sleeping. If you click 3 times, the baby wakes up.
 *
 * Based on "The Only Move Is Not To Play" (events challenge) by Pippin Barr
 *
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

// How many times the user has clicked
let clicks = 0;

// Is the baby awake?
let awake = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw the baby
 */
function draw() {
    background("#2b2d52");

    // The baby
    push();
    noStroke();
    fill("#f2c9a0");
    ellipse(200, 200, 150);
    pop();

    // The eyes, open when awake and closed when asleep
    push();
    stroke("#000000");
    strokeWeight(4);
    fill("#ffffff");
    if (awake) {
        ellipse(170, 185, 30);
        ellipse(230, 185, 30);
    }
    else {
        line(155, 185, 185, 185);
        line(215, 185, 245, 185);
    }
    pop();

    push();
    fill("#ffffff");
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Don't wake up the baby", 200, 350);
    if (awake) {
        text("OUINNNN", 200, 60);
    }
    else {
        text("z z z", 200, 60);
    }
    pop();
}

/**
 * Clicking 3 times wakes up the baby
 */
function mousePressed() {
    clicks += 1;
    if (clicks >= 3) {
        awake = true;
    }
}
