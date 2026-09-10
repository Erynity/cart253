/**
 * Landscape Drawing
 * Marie Eryne Yow Chok Nee
 * 
 * This is a drawing of a beautiful landscape
 * 
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Draws the landscape
*/
function draw() {
    background(135, 206, 235);
    drawSun();
    drawCloud1();
    drawCloud2();
    drawMountain();

    drawGround();
    drawPerson();
}

/**
 * Draws the bright sun
 */
function drawSun() {
    // A sun
    push();
    fill('yellow');
    noStroke();
    ellipse(90, 55, 80, 80);
    pop();
}

/**
 * Draws the small fluffy cloud
 */
function drawCloud1() {
    // A small cloud
    push();
    fill('white');
    noStroke();
    ellipse(100, 100, 60, 60);
    ellipse(150, 110, 80, 60);
    ellipse(200, 100, 60, 60);
    ellipse(150, 80, 90, 90);
    pop();
}

/**
 * Draws the big fluffy cloud
 */
function drawCloud2() {
    // A big cloud
    push();
    fill('white');
    noStroke();
    ellipse(350, 200, 120, 120);
    ellipse(450, 210, 160, 120);
    ellipse(550, 200, 120, 120);
    ellipse(450, 180, 180, 180);
    pop();
}

/**
 * Draws a mountain
 */
function drawMountain() {
    // A sun
    push();
    fill(140, 116, 78);
    noStroke();
    ellipse(10, 550, 1000, 200);
    ellipse(155, 500, 400, 600);
    ellipse(250, 550, 400, 400);
    ellipse(150, 270, 220, 200);
    pop();
}

/**
 * Draws a person
 */
function drawPerson() {
    // A person
    drawBody();
    drawEyes();
    drawMouth();
}
/**
 * Draws a person's body
 */
function drawBody() {
    // A person
    push();
    fill('beige');
    noStroke();
    // Head
    ellipse(512, 370, 60, 60);
    // Neck
    rect(501, 390, 20, 20);
    // Arms
    ellipse(512, 425, 120, 20);
    // Belly
    ellipse(512, 450, 60, 100);
    // Legs
    ellipse(524, 524, 20, 100);
    ellipse(500, 524, 20, 100);
    pop();
}

/**
 * Draws the person's eyes
 */
function drawEyes() {
    // The eyes
    push();
    fill('black');
    stroke('white');
    strokeWeight(4)
    ellipse(524, 365, 10, 10);
    ellipse(500, 365, 10, 10);
    pop();
}

/**
 * Draws the person's mouth
 */
function drawMouth() {
    // The eyes
    push();
    fill('black');
    noStroke();
    ellipse(512, 380, 20, 5);
    pop();
}

/**
 * Draws the green grass garden
 */
function drawGround() {
    // A ground
    push();
    fill('green');
    noStroke();
    rect(0, 540, 640, 100);
    pop();
}