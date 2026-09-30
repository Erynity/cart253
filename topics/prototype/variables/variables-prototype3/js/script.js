/**
 * Variables Prototype 1
 * Marie Eryne Yow Chok Nee (40352963)
 * 
 * Prototype 3 - Changing block color from black to red
 * 
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

// Variables
let square1Color = {
    r: 0,
    g: 0,
    b: 0
}


/**
 * Makes a canvas
*/
function setup() {
    createCanvas(600, 600);
    background('purple');
}


/**
 * 2 balls making an x
*/
function draw() {

    drawSquare1()
    
    square1Color.r += 1;
    square1Color.r = constrain(square1Color.r, 0, 250);


}
function drawSquare1() {
    push();
    noStroke();
    fill(square1Color.r, 0, 0);
    rect(50, 50, 500, 500);
    pop();
}
