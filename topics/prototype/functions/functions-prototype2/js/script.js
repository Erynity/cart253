/**
 * Horsey
 * Marie Eryne Yow Chok Nee
 * 
 * Cutting off horseys legs :(
 */

"use strict";

let horsey = {
    name: "Horsey",
    color: "#7d561d",
    legs: 4
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
    background('#95acff');
    
    // Ground
    push();
    noStroke();
    fill('green')
    rect(0, 300, 800, 200);
    pop();

    drawHorsey(horsey);
}

/**
 * Drawing of horsey
 */
function drawHorsey(animal) {
    push();
    noStroke();
    fill(animal.color);

    // legs: only draw the ones the horse still has
    if (animal.legs >= 1) {
        rect(275, 240, 40, 100);
    }
    if (animal.legs >= 2) {
        rect(325, 240, 40, 100);
    }
    if (animal.legs >= 3) {
        rect(435, 240, 40, 100);
    }
    if (animal.legs >= 4) {
        rect(485, 240, 40, 100);
    }

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
 * Function to activate remove a leg when pressing mouse
 */
function mousePressed() {
    cutOffOneLeg(horsey);
}
/**
 * Function to remove a leg
 */
function cutOffOneLeg(animal) {
    animal.legs -= 1;
    animal.legs = constrain(animal.legs, 0, 4);
}