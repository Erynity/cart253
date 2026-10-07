/**
 * Growing Ball
 * Marie Eryne Yow Chok Nee
 *
 * Inflating balloon and pops when too big
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
    fill: "#ff9fc5"
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
    background("beige");

    // Draw the ball
    drawBall();

    growBall()
}

/**
 * grows the ball while the user holds the mouse down on it
 */
function growBall() {
    const distance = dist(mouseX, mouseY, ball.x, ball.y);
    const mouseIsOnBall = (distance < ball.size / 2);

    if (mouseIsPressed && mouseIsOnBall) {
        ball.size += 10;
        // Stop the balloon from getting bigger than the canvas
        ball.size = constrain(ball.size, 0, width);
    } else if (ball.size >= width) { // Pops balloon when it becomes width's size
        ball.size = 60;
    }
}
/**
 * draws the ball
 */
function drawBall() {
    push();
    stroke('black');
    strokeWeight(1);
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}
