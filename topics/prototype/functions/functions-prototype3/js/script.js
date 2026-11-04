/**
 * Melting Snowman
 * Marie Eryne Yow Chok Nee
 *
 * A snowman that melts when the mouse gets close :(
 */

"use strict";

let snowman = {
    name: "Snowman",
    color: "white",
    x: 400
};

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
    background('#1d2b53');

    // Snow on the ground
    push();
    noStroke();
    fill('#d9e6ff');
    rect(0, 330, 800, 70);
    pop();

    drawSnowman(snowman);
}

/**
 * Drawing of snowman
 */
function drawSnowman(person) {
    let weight = calculateStrokeWeight(person.x, 200);

    // The blue outline gets thicker when the mouse is close
    push();
    strokeWeight(weight);
    stroke("#00a2ff");
    fill(person.color);

    // body
    ellipse(person.x, 260, 140);
    ellipse(person.x, 170, 100);

    // head
    ellipse(person.x, 100, 70);
    pop();

    // face
    push();
    noStroke();

    // eyes
    fill('black');
    ellipse(person.x - 12, 95, 8);
    ellipse(person.x + 12, 95, 8);

    // nose
    fill('orange');
    rect(person.x, 102, 20, 6);
    pop();
}

// Function to make strokes react to mouse movements
function calculateStrokeWeight(x, y) {
    const minWeight = 1;
    const maxWeight = 20;
    let d = dist(mouseX, mouseY, x, y);
    let result = map(d, 0, width, maxWeight, minWeight);

    return result;
}
