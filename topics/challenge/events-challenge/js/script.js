/**
 * The Only Move Is Not To Play
 * Marie Eryne Yow Chok Nee
 *
 * A game where your score increases so long as you do nothing.
 * 
* Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas and listen for internet connection changes
 */
function setup() {
    createCanvas(400, 400);


}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

/**
 * Ends the game
 */
function lose() {
    gameOver = true;
}

/**
 * makes user lose if they do these with the keyboard
 */
function keyPressed() {
    lose();
}

function keyReleased() {
    lose();
}

function keyTyped() {
    lose();
}

/**
 * makes user lose if they do these with the mouse
 */
function mouseClicked() {
    lose();
}

function mouseDragged() {
    lose();
}

function mouseMoved() {
    lose();
}

function mousePressed() {
    lose();
}

function mouseReleased() {
    lose();
}

function mouseWheel() {
    lose();
}
