/**
 * Night Light
 * Marie Eryne Yow Chok Nee
 *
 * The dark room with a light button
 *
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

const room = {
    fill: "#222222", // dark while the lights are off
    fills: {
        on: "#c8c8c8", // light while the lights are on
        off: "#222222" // dark while the lights are off
    } 
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 50,
    fill: "#f2c9a0" // the user's cursor
};

const lightButton = {
    x: 340,
    y: 200,
    size: 40,
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

    // Press the light button if the user is touching it
    checkButton();

    // Draw the light button and user's cursor
    drawButton();
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
 * turns the light button on when the user's cursor is touching it
 */
function checkButton() {
    const distance = dist(user.x, user.y, lightButton.x, lightButton.y);
    const userIsOnButton =
        (distance < user.size / 2 + lightButton.size / 2);

    if (userIsOnButton) {
        lightButton.fill = lightButton.fills.on;
        room.fill = room.fills.on;
    }
    else {
        lightButton.fill = lightButton.fills.off;
        room.fill = room.fills.off;
    }
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
 * draws the light button
 */
function drawButton() {
    push();
    noStroke();
    fill(lightButton.fill);
    ellipse(lightButton.x, lightButton.y, lightButton.size);
    pop();
}
