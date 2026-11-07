/**
 * Snow Day
 * Marie Eryne Yow Chok Nee
 *
 * Click to make it snow!
 * Every snowflake that lands makes the snow on the ground pile up higher.
 *
 * Moving, drawing and adding objects in an array is based on the
 * Ball Party arrays challenge from the course.
 */

"use strict";

let snowflakes = []; // Will hold all the snowflakes

// The snow on the ground
let ground = {
    y: 370,
    color: "white"
};

/**
 * Draw canvas
*/
function setup() {
    createCanvas(800, 400);
}


/**
 * Moves and draws the snowflakes and the ground
*/
function draw() {
    background('#1d2b53');

    for (let snowflake of snowflakes) {
        moveSnowflake(snowflake);
        checkGround(snowflake);
        drawSnowflake(snowflake);
    }

    drawGround(ground);
}

/**
 * Creates a new snowflake where the mouse is
 */
function createSnowflake() {
    const newSnowflake = {
        x: mouseX,
        y: mouseY,
        size: random(5, 15),
        speed: random(1, 3)
    };
    return newSnowflake;
}

/**
 * Makes the snowflake fall down
 */
function moveSnowflake(snowflake) {
    snowflake.y += snowflake.speed;
}

/**
 * When a snowflake lands, the snow piles up and the snowflake goes back to the top
 */
function checkGround(snowflake) {
    if (snowflake.y > ground.y) {
        ground.y -= 1;
        ground.y = constrain(ground.y, 0, 370);

        snowflake.y = 0;
        snowflake.x = random(0, width);
    }
}

/**
 * Drawing of one snowflake
 */
function drawSnowflake(snowflake) {
    push();
    noStroke();
    fill('white');
    ellipse(snowflake.x, snowflake.y, snowflake.size);
    pop();
}

/**
 * Drawing of the snow on the ground
 */
function drawGround(snow) {
    push();
    noStroke();
    fill(snow.color);
    rect(0, snow.y, width, height);
    pop();
}

/**
 * Adds a new snowflake when the mouse is clicked
 */
function mousePressed() {
    const newSnowflake = createSnowflake();
    snowflakes.push(newSnowflake);
}
