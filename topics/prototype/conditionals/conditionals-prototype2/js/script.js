/**
 * Growing Ball
 * Marie Eryne Yow Chok Nee
 *
 * Clicking a ball makes it grow
 *
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

const ball = {
    x: 200,
    y: 200,
    size: 60,
    fill: "#646364"
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * draw the ball
 */
function draw() {
    background("green");

    // Draw the ball and user's cursor
    drawBall();
}

/**
 * draws the ball
 */
function drawBall() {
    push();
    stroke('black');
    strokeWeight(3);
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}
