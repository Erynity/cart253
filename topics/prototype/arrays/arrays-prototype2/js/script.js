/**
 * Talking Horsey
 * Marie Eryne Yow Chok Nee
 *
 * Horsey is back and can talk now!
 * Click to make horsey say something random.
 *
 * Extends my Horsey functions prototype with an array of strings (dialog).
 */

"use strict";

let horsey = {
    name: "Horsey",
    color: "#7d561d",
    // Everything horsey can say
    lines: [
        "Neigh!",
        "I like carrots",
        "Please don't cut my legs again :(",
        "Hay is for horses",
        "Giddy up!"
    ]
};

// What horsey is saying right now
let currentLine = "Click me!";

/**
 * Draw canvas
*/
function setup() {
    createCanvas(800, 400);
}


/**
 * Drawing on canvas
*/
function draw() {
    background('#95acff');

    // Ground
    push();
    noStroke();
    fill('green');
    rect(0, 300, 800, 200);
    pop();

    drawHorsey(horsey);
    drawDialog();
}

/**
 * Drawing of horsey
 */
function drawHorsey(animal) {
    push();
    noStroke();
    fill(animal.color);

    // legs
    rect(275, 240, 40, 100);
    rect(325, 240, 40, 100);
    rect(435, 240, 40, 100);
    rect(485, 240, 40, 100);

    // body
    rect(275, 140, 250, 100);

    // neck
    rect(465, 100, 60, 40);

    // head
    rect(465, 65, 85, 45);

    // tail
    rect(250, 150, 25, 10);

    // eye
    fill('black');
    ellipse(530, 85, 10);
    pop();
}

/**
 * Drawing what horsey is saying
 */
function drawDialog() {
    push();
    fill('black');
    textSize(24);
    text(currentLine, 275, 45);
    pop();
}

/**
 * Makes horsey say a random line when pressing mouse
 */
function mousePressed() {
    currentLine = random(horsey.lines);
}
