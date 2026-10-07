/**
 * Night Light
 * Marie Eryne Yow Chok Nee
 *
 * The dark room with a switch
 *
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

const room = {
    fill: "#222222" // dark while the lights are off
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 50,
    fill: "#f2c9a0" // the user's cursor
};

const lightSwitch = {
    x: 340,
    y: 200,
    width: 30,
    height: 50,
    fill: "#ff3333",
    fills: {
        on: "#ffee55",
        off: "#ff3333"
    }
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user's cursor around the dark room and draw it
 */
function draw() {
    background(room.fill);

    // Move user's cursor
    moveUser();

    // Draw the light switch and user's cursor
    drawSwitch();
    drawUser();
}

/**
 * sets user's position to mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * draws user's cursor
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * draws the light switch
 */
function drawSwitch() {
    push();
    noStroke();
    fill(lightSwitch.fill);
    rect(lightSwitch.x, lightSwitch.y, lightSwitch.width, lightSwitch.height);
    pop();
}
