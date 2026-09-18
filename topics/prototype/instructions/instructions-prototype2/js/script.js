/**
 * Instructions Prototype 1
 * Marie Eryne Yow Chok Nee (40352963)
 * 
 * Prototype 2 - Abstract Prototype
 * An abstract drawing using circles
 */

"use strict";

/**
 * Creates canva
*/
function setup() {
    createCanvas(600, 600);
}


/**
 * Draws the landscape
*/
function draw() {
    background('#51d866');
    // 1st circle
    push();
    fill('#f1bbd0');
    stroke('#3d4e72');
    strokeWeight(150);
    ellipse(40, 40,800, 800);
    pop();
    // 2nd circle
    push();
    fill('#da5757');
    stroke('#ffd000');
    strokeWeight(100);
    ellipse(200, 600, 300, 300);
    pop();
    // 3rd circle
    push();
    fill('#da57b1');
    stroke('#ff0000');
    strokeWeight(100);
    ellipse(500, 200, 300, 300);
}