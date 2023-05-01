
let moonDiameter = 150;
let moonMargin = 15;
let skyDiameter = 500;

let backgroundColor = "#252525";

// First primary blobs
// they should blend well together, next in the color wheel


let colors = ["#9ebce1", "#b4a4d7", "#f5c676", "#e77f5b", "#9fc78d"];
let blobs;

let minBlobSize = 100;
let maxBlobSize = 500;

let centerx;
let centery;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerx = windowWidth / 2;
  centery = windowHeight / 2;

  blobs = colors.map(color => ({
    posX: random(-windowWidth / 2, windowWidth / 2),
    posY: random(-windowHeight / 2, windowHeight / 2),
    size: random(minBlobSize, maxBlobSize),
    color: color
  }));

  noLoop();
  background(backgroundColor);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  push();
  blendMode(SCREEN);
  blur(300);

  translate(centerx, centery);

  for (const blob of blobs) {
    drawRandomBlob(blob.posX, blob.posY, blob.size, blob.color);
  }

  pop();

}

function drawRandomBlob(blobPosx, blobPosy, blobSize, color) {
  push();
  noStroke();
  fill(color);
  circle(blobPosx, blobPosy, blobSize);
  pop();
}

function blur(amount) {
  drawingContext.filter = 'blur(' + str(amount) + 'px)';
}
