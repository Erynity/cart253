/**
 * Growing Balloon
 * Marie Eryne Yow Chok Nee
 *
 * Moving the mouse blows up the balloon, and it keeps getting bigger.
 *
 * Based on "The Only Move Is Not To Play" (events challenge) by Pippin Barr
 *
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

// How big the balloon is
let balloonSize = 50;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw the balloon
 */
function draw() {
    background("#87ceeb");

    push();
    // The string
    stroke("#ffffff");
    strokeWeight(2);
    line(200, 200 + balloonSize / 2, 200, 380);

    // The balloon
    noStroke();
    fill("#ff3333");
    ellipse(200, 200, balloonSize);
    pop();
}

/**
 * Moving the mouse blows up the balloon
 */
function mouseMoved() {
    balloonSize += 1;
}
