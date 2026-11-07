/**
 * Many Planets
 * Marie Eryne Yow Chok Nee
 *
 * Reacting planets, but now there are many of them!
 * Click to add a new planet where the mouse is.
 *
 * Extends my Planets functions prototype with an array.
 * Adding to an array on click is based on the Ball Party arrays challenge from the course.
 */

"use strict";

// Will hold all the planets (starting with my 3 original ones)
let planets = [];

/**
 * Draw canvas
*/
function setup() {
    createCanvas(800, 400);
}


/**
 * Drawing all the planets
*/
function draw() {
    background('black');

    for (let planet of planets) {
        drawPlanet(planet);
    }
}

/**
 * Creates a new planet where the mouse is
 */
function createPlanet() {
    const newPlanet = {
        x: mouseX,
        y: mouseY,
        size: random(30, 150)
    };
    return newPlanet;
}

/**
 * Drawing of one planet
 */
function drawPlanet(planet) {
    let weight = calculateStrokeWeight(planet.x, planet.y);

    // Planet properties
    push();
    strokeWeight(weight);
    stroke("#00a2ff");
    fill("#36f9b8");
    ellipse(planet.x, planet.y, planet.size);
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

/**
 * Adds a new planet when the mouse is clicked
 */
function mousePressed() {
    const newPlanet = createPlanet();
    planets.push(newPlanet);
}
