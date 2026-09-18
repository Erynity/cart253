/**
 * Instructions Prototype 1
 * Marie Eryne Yow Chok Nee (40352963)
 * 
 * Prototype 3 - Really Weird Prototype
 */

"use strict";

/**
 * Creates canva
*/
function setup() {
    createCanvas(700, 600);
}


/**
 * Draws the landscape
*/
function draw() {
    background('#737373');


    push();
    fill('#ff0000');
    noStroke();
    rect(0, 0, 100, 600);
    pop();

    push();
    fill('#ff8400');
    noStroke();
    rect(100, 0, 100, 600);
    pop();

    push();
    fill('#f2ff00');
    noStroke();
    rect(200, 0, 100, 600);
    pop();

    push();
    fill('#00ff0d');
    noStroke();
    rect(300, 0, 100, 600);
    pop();

    push();
    fill('#0077ff');
    noStroke();
    rect(400, 0, 100, 600);
    pop();

    push();
    fill('#7b00ff');
    noStroke();
    rect(500, 0, 100, 600);
    pop();

    push();
    fill('#ff00a2');
    noStroke();
    rect(600, 0, 100, 600);
    pop();
    
    push();
    fill('#ffffff00');
    stroke('#0d0d0d');
    strokeWeight(20);
    rect(0, 0, 700, 600);
    pop();
}