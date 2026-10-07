/**
 * Rolling Ball
 * Marie Eryne Yow Chok Nee
 *
 * Controlled ball that moves from key arrows pressed from user
 *
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

const ball = {
    x: 200,
    y: 200,
    size: 50,
    fill: "#ff6633"
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * move the ball with the arrow keys and draw it
 */
function draw() {
    background("#aaaaaa");

    // Draw the ball
    drawBall();
}

/**
 * draws the ball
 */
function drawBall() {
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}
