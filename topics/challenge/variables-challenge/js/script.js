/**
 * Variables Challenge
 * Marie Eryne Yow Chok Nee
 * 
 * A drawing of Mr. Furious becoming very mad for no reason!
 * 
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";
let skin = {
    r: 253,
    b: 241,
    g: 203
}

let timer = 0;

let eyebrow = {
    y: 150
}

let mouth = {
    aX: 200,
    aY: 375,
    bX: 300,
    bY: 450,
    cX: 400,
    cY: 375
}

/**
 * Makes a canvas
*/
function setup() {
    createCanvas(600, 600);
    background('pink');
}


/**
 * Makes Mr.Furious
*/
function draw() {
    drawMrFurious();

    // Moves his eyebrows
    eyebrow.y += 1;
    eyebrow.y = constrain(eyebrow.y, 150, 200)


    if (eyebrow.y >= 170) {
        // Moves his mouth
        mouth.aY += 1;
        mouth.aY = constrain(mouth.aY, 375, 400)

        mouth.bY -= 4;
        mouth.bY = constrain(mouth.bY, 345, 450)

        mouth.cY += 1;
        mouth.cY = constrain(mouth.cY, 375, 400)

        
    }

    
    timer += 0.1;
    timer = constrain(timer, 0, 10);

    if (timer >= 5) {
        // Make his face red
        skin.r += 7;
        skin.r = constrain(skin.r, 0, 255);
        skin.b -= 7;
        skin.b = constrain(skin.b, 100, 255);
        skin.g -= 7;
        skin.g = constrain(skin.g, 90, 255);
    }
}

/**
 * Makes Mr.Furious face components into 1 function
 */
function drawMrFurious() {
    drawMrFuriousFace();
    drawMrFuriousEyes();
    drawMrFuriousEyebrows();
    drawMrFuriousMouth();
}

/**
 * * Draw Mr Furious' base face
 */
function drawMrFuriousFace() {
    push();
    fill(skin.r, skin.b, skin.g);
    ellipse(300, 300, 400, 400);
    pop();
}

/**
 * Makes his eyes
 */
function drawMrFuriousEyes() {
    // Left Eye - White
    push();
    fill('white');
    ellipse(225, 250, 100, 100);
    pop();
    push();

    // Left Eye - Iris
    fill('black');
    ellipse(225, 250, 75, 75);
    pop();


    // Right Eye
    push();
    fill('white');
    ellipse(375, 250, 100, 100);
    pop();

    // Left Eye - Pupil
    fill('black');
    ellipse(375, 250, 75, 75);
    pop();
}

/**
 * Makes his eyebrows
 */
function drawMrFuriousEyebrows() {
    // Left Eyebrow
    push();
    fill('black');
    rect(175, eyebrow.y, 100, 25);
    pop();

    // Right Eyebrow
    push();
    fill('black');
    rect(325, eyebrow.y, 100, 25);
    pop();
}

/**
 * Makes his mouth
 */
function drawMrFuriousMouth() {
    // Mouth
    push();
    fill('red');
    triangle(mouth.aX, mouth.aY, mouth.bX, mouth.bY, mouth.cX, mouth.cY);
    pop();
}