/**
 * Flower Garden
 * Marie Eryne Yow Chok Nee
 *
 * Click to change the size of the flower!
 */

"use strict";

// Flower object
let flower = {
    x: 400,
    y: 200,
    size: 60
};

// All the sizes the flower can be
let flowerSizes = [40, 60, 100, 150, 250];

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background('#64845e');

    drawFlower();
}

function drawFlower() {
    // petals
    push();
    noStroke();
    fill('pink');
    ellipse(flower.x, flower.y, flower.size, 20);
    ellipse(flower.x, flower.y, 20, flower.size);
    pop();

    // Yellow part
    push();
    noStroke();
    fill('yellow');
    ellipse(flower.x, flower.y, 20);
    pop();
}

function mousePressed() {
    // Pick a random size from the array
    flower.size = random(flowerSizes);
}
