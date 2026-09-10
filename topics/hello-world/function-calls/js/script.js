/**
 * The Blank Page
 * Marie Eryne Yow Chok Nee
 * 
 * The website shows the point of view of a novelist who is staring at a blank piece of paper while trying to figure something out to write about for this next book.
 * 
 * Uses:
 * P5.js
 * https://p5js.org/ 
 */

"use strict";

/**
 * Creates a 640x480 canvas for the art.
 */
function setup() {
    // Creates the canvas at a standard resolution
    createCanvas(640, 480);
}


/**
 * Draws a blank piece of paper with a black border on a pink background.
 */
function draw() {
    // Adds a pink background
    background(255, 100, 100);
    // Adds the blank piece of paper
    rect(200, 80, 240, 320);
}