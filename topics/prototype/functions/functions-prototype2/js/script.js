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
}

/**
 * Drawing of horsey
 */
function drawHorsey(animal) {
 
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