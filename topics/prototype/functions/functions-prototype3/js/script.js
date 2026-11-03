/**
 * Planets
 * Marie Eryne Yow Chok Nee
 * 
 * Reacting planets
 */

"use strict";

/**
 * Draw canvas
*/
function setup() {
    createCanvas(800, 400);
}


/**
 * Drawing balls
*/
function draw() {
    background('black');

    drawBall(250, 300, 75);
    drawBall(640, 200, 200);
    drawBall(420, 140, 100);
}

function drawBall(x, y, size) {
    let weight = calculateStrokeWeight(x, y);

    push();
    strokeWeight(weight);
    stroke("#00a2ff");
    fill("#36f9b8");
    ellipse(x, y, size);
    pop();
}

function calculateStrokeWeight(x, y) {
    const minWeight = 1;
    const maxWeight = 20;
    let d = dist(mouseX, mouseY, x, y);
    let result = map(d, 0, width, maxWeight, minWeight);

    return result;
}