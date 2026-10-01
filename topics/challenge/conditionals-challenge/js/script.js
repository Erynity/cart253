/**
 * Circle Master
 * Marie Eryne Yow Chok Nee
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

const target = {
    x: 100,
    y: 100,
    size: 50,
    fill: "#04ff00",
    fills: {
        onTarget: 'green',
        offTarget: 'red',
    }
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();
    movePuck();

    // Draw the user and puck
    drawUser();
    drawPuck();

    checkTarget();
    drawTarget();
}

function checkTarget() {
    const distance = dist(puck.x, puck.y, target.x, target.y);
    const puckIsOverlappingTarget =
        (distance < puck.size / 2 + target.size / 2);

    if (puckIsOverlappingTarget) {
        target.fill = target.fills.onTarget;
    }
    else {
        target.fill = target.fills.offTarget;
    }
}

/**
 * Moves the puck when the user circle overlaps it
 */
function movePuck() {
    const distance = dist(user.x, user.y, puck.x, puck.y);
    const circlesAreTouching = (distance < puck.size / 2 + user.size / 2);

    if (circlesAreTouching) {
        puck.x = puck.x + movedX;
        puck.y = puck.y + movedY;
    }
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}
/**
 * Displays the target circle
 */
function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}