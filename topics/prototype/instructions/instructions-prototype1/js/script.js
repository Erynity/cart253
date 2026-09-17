/**
 * Instructions Prototype 1
 * Marie Eryne Yow Chok Nee (40352963)
 * 
 * Prototype 1 - Representational Prototype
 */

"use strict";

/**
 * CREATING THE CANVA
*/
function setup() {
    createCanvas(600, 600);
}


/**
 * DRAWING THE CAT
*/
function draw() {
    background('pink');
    drawCat();

}

/**
 * SECTION TO DRAW CAT FACE
 */

// Draws Cat Face
function drawCat() {
    drawCatEars();
    drawCatHead();
    drawCatEyes();
    drawCatMouth();
}


// Draws the cat's head
function drawCatHead() {
    push();
    fill('grey');
    strokeWeight(4);
    ellipse(300, 200, 230, 200);
    pop();
}

// Draw the cat's ears
function drawCatEars() {
    // The cat's both ears
    push();
    fill('grey');
    strokeWeight(4);
    triangle(215, 150, 230, 75, 285, 112);
    triangle(385, 150, 370, 75, 315, 112);
    pop();
}

// Draw the cat's eyes
function drawCatEyes() {
    // The cat's both eyes
    push();
    fill('black');
    noStroke();
    ellipse(260, 190, 15, 20);
    ellipse(340, 190, 15, 20);
    pop();
}

// Draw the cat's mouth
function drawCatMouth() {
    // The cat's mouth
    push();
    fill('black');
    noStroke();
    ellipse(310, 210, 25, 18);
    ellipse(290, 210, 25, 18);
    pop();
    
    push();
    fill('grey');
    noStroke();
    ellipse(288, 207, 20, 17);
    ellipse(312, 207, 20, 17);
    pop();
    
    // The cat's nose
    push();
    fill('black');
    noStroke();
    triangle(310, 200, 300, 210, 290, 200);
    pop();
}

