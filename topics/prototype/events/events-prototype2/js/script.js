/**
 * Needy Button
 * Marie Eryne Yow Chok Nee
 *
 * A button that needs your love. Click it before its love runs out.
 *
 * Based on "The Only Move Is Not To Play" (events challenge) by Pippin Barr
 *
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

// How loved the button feels
let love = 20;

// Has the button run out of love?
let heartbroken = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Drain the button's love and draw the button
 */
function draw() {
    background("#f5f5dc");

    if (!heartbroken) {
        love -= 0.2;
    }

    if (love <= 0) {
        heartbroken = true;
    }

    // The button
    push();
    noStroke();
    if (heartbroken) {
        fill("#6677aa");
    }
    else {
        fill("#ff6699");
    }
    ellipse(200, 200, 140);
    pop();

    push();
    fill("#333333");
    textSize(24);
    textAlign(CENTER, CENTER);
    if (heartbroken) {
        text("you don't love me...", 200, 60);
    }
    else {
        text("click me!", 200, 60);
    }
    pop();
}

/**
 * Clicking the button gives it love
 */
function mousePressed() {
    if (!heartbroken && dist(mouseX, mouseY, 200, 200) < 70) {
        love += 3;
    }
}
