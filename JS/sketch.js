var leftBuffer;
var rightBuffer;

function setup() {
    createCanvas(800, 400);
    leftBuffer = createGraphics(600, 400);
    rightBuffer = createGraphics(200, 400);
}

function draw() {
    drawRightBuffer();
    drawLeftBuffer();
    image(leftBuffer, 0, 0);
    image(rightBuffer, 400, 0);
    drawSprites();
}

function drawLeftBuffer() {
    leftBuffer.background(0, 0, 0);
}

function drawRightBuffer() {
    rightBuffer.background(255, 100, 255);
}