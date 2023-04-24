
let moonDiameter = 150;
let moonMargin = 15;
let skyDiameter = 500;

/*
let moonColor = new color("#C7AE93");
let skyColor = new color("#252A4F");
let backgroundColor = new color("#D9D9D9");
*/
let moonColor;
let skyColor;
let starsColor;
let backgroundColor;

let nStars = 200;
let stars = [];

let centerx;
let centery;

let rotation = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  moonColor = color("#C7AE93");
  starsColor = color("#C7AE93");
  skyColor = color("#252A4F");
  backgroundColor = color("#D9D9D9");

  background(backgroundColor);
  centerx = windowWidth / 2;
  centery = windowHeight / 2;
  createStars();
  fakeSkyColor = lerpColor(moonColor, skyColor, 0.9);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(backgroundColor);
}

function draw() {
  noStroke();
  drawSkyBack();
  drawMoon();
  drawDarkMoons();
  drawSkyFront();
  drawStars();
  drawFakeSkyFront();
}

function drawSkyBack() {
  push();
  fill(skyColor);
  circle(centerx, centery, skyDiameter);
  pop();
}

function drawMoon() {
  push();
  fill(moonColor);
  translate(centerx, centery);
  rotate(rotation * (PI / 800));
  rotation++;
  circle(moonMargin - skyDiameter / 2 + moonDiameter / 2, 0, moonDiameter);
  circle(-moonMargin + skyDiameter / 2 - moonDiameter / 2, 0, moonDiameter);
  pop();
}

function createStars() {
  for (let i = 0; i < nStars; i++) {
    stars.push({
      offset: random(0, 360),
      position: random(- skyDiameter / 4 + 1, skyDiameter / 4 - 1),
      dimension: random(1, 4),
      speed: random(0.8, 1.3)
    });
  }
}

function drawStars() {
  for (const star of stars) {
    push();
    translate(centerx, centery);
    fill(starsColor);
    rotate(rotation * (PI / 700) * star.speed + star.offset);
    circle(star.position + skyDiameter / 4, 0, star.dimension);
    pop();
  }

}
function drawDarkMoons() {
  push();
  translate(centerx, centery);
  fill(skyColor);

  push();
  rotate(PI / 6);
  circle(moonMargin + moonDiameter / 2 - skyDiameter / 2, 0, moonDiameter);
  pop();

  push();
  rotate(-PI / 6);
  circle(- moonMargin - moonDiameter / 2 + skyDiameter / 2, 0, moonDiameter);
  pop();
  pop();
}

function drawSkyFront() {
  push();
  translate(centerx, centery);
  fill(skyColor);
  push();
  rotate(PI / 6);
  arc(0, 0, skyDiameter + 2, skyDiameter + 2, 0, PI);
  pop();
  push();
  rotate(-PI / 6);
  arc(0, 0, skyDiameter + 2, skyDiameter + 2, 0, PI);
  pop();
  pop();

}

function drawFakeSkyFront() {
  push();
  translate(centerx, centery);
  fill(fakeSkyColor);
  push();
  rotate(PI / 12);
  arc(0, 0, skyDiameter + 2, skyDiameter + 2, 0, PI);
  pop();
  push();
  rotate(-PI / 12);
  arc(0, 0, skyDiameter + 2, skyDiameter + 2, 0, PI);
  pop();
  pop();
}



// WHITE BK
/*
function drawSkyFront() {
  fill(backgroundColor);
  translate(centerx, centery);

  push();
  rotate(PI / 6);
  circle(moonMargin + moonDiameter / 2 - skyDiameter / 2, 0, moonDiameter);
  rect(-1 - skyDiameter / 2, 0, skyDiameter + 1, skyDiameter / 2);

  pop();
  push();
  rotate(- PI / 6);
  circle(- moonMargin - moonDiameter / 2 + skyDiameter / 2, 0, moonDiameter);
  rect(1 - skyDiameter / 2, 0, skyDiameter + 1, skyDiameter / 2);
  pop();
}
*/