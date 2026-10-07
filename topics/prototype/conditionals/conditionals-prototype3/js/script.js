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
    
    // Controls to move the ball
    moveBall();
}
/**
 * moves the ball in the direction of the arrow key being held
 */
function moveBall() {
    if (keyIsDown(LEFT_ARROW)) {
        ball.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        ball.x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        ball.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        ball.y += 5;
    }
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
