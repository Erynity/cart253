/**
 * Ball Party
 * Marie Eryne Yow Chok Nee
 *
 * A ball that bounces around on the canvas
 */

let balls = []; // Will hold all the balls

/**
 * Create the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties
    const newBall = {
        // Position and dimensions
        x: 200,
        y: 200,
        size: 20,
        // Colour
        fill: "#000000",
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };
    return newBall;
}

/**
 * Moves and draws the balls
 */
function draw() {
    background("#87ceeb");

    for (let ball of balls) {
        moveBall(ball);
        bounceBall(ball);
        drawBall(ball);
    }
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
    // Check if the ball has reached the left or right
    const bounceX = (ball.x > width || ball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (ball.y > height || ball.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        ball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}

/**
 * Adds a new ball when the mouse is clicked
 */
function mousePressed() {
    const newBall = createBall();
    balls.push(newBall);
}
