/**
 * Variables Prototype 1
 * Marie Eryne Yow Chok Nee (40352963)
 * 
 * Prototype 1 - Incorrect box
 * 2 Balls drawing a X to say it's not good (incorrect)
 * 
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

// Variables
let ball1 = {
    x: 50,
    y: 50
}

let ball2 = {
    x: 550,
    y: 50
}

/**
 * Makes a canvas
*/
function setup() {
    createCanvas(600, 600);
    background('black');
}


/**
 * 2 balls making an x
*/
function draw() {
    drawBall1();
    ball1.x += 2;
    ball1.x = constrain(ball1.x, 50, 550);
    ball1.y += 2;
    ball1.y = constrain(ball1.y, 50, 550);
    
    drawBall2();
    ball2.x -= 2;
    ball2.x = constrain(ball2.x, 50, 550);
    ball2.y += 2;
    ball2.y = constrain(ball2.y, 50, 550);
}


function drawBall1() {
    push();
    noStroke();
    fill('red');
    ellipse(ball1.x, ball1.y, 70, 70);
    pop();
}

function drawBall2() {
    push();
    noStroke();
    fill('red');
    ellipse(ball2.x, ball2.y, 70, 70);
    pop();
}