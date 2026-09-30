/**
 * Variables Prototype 1
 * Marie Eryne Yow Chok Nee (40352963)
 * 
 * Prototype 2 - Constructing platform game
 * 
 * Uses:
 * P5.js
 * https://p5js.org/
 */

"use strict";

// Variables
let ball1 = {
    x: 150,
    y: 150
}

let ball2 = {
    x: 200,
    y: 450
}

let ball3 = {
    x: 400,
    y: 300
}


/**
 * Makes a canvas
*/
function setup() {
    createCanvas(600, 600);
    background('pink');
}


/**
 * 2 balls making an x
*/
function draw() {
    drawBall0();
    
    drawBall1();
    ball1.x += 2;
    ball1.x = constrain(ball1.x, 150, 250);
    
    drawBall2();
    ball2.x += 2;
    ball2.x = constrain(ball2.x, 200, 300);
   
    drawBall3();
    ball3.x += 2;
    ball3.x = constrain(ball3.x, 200, 500);


}
function drawBall0() {
    push();
    noStroke();
    fill('black');
    ellipse(550, 575, 50, 50);
    pop();
}

function drawBall1() {
    push();
    noStroke();
    fill('black');
    ellipse(ball1.x, ball1.y, 50, 50);
    pop();
}

function drawBall2() {
    push();
    noStroke();
    fill('black');
    ellipse(ball2.x, ball2.y, 50, 50);
    pop();
}

function drawBall3() {
    push();
    noStroke();
    fill('black');
    ellipse(ball3.x, ball3.y, 50, 50);
    pop();
}