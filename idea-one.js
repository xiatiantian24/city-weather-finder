let numPoints = 100; // Number of points on the circle
let radius = 300; // Radius of the circle (increased for longer lines)
let noiseStrength = 100; // Strength of the Perlin noise
let angleOffset = 0; // Offset for the starting angle

function setup() {
  createCanvas(800, 800);
  background(255);
  noFill();
  stroke(0);
  smooth();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  let angleStep = TWO_PI / numPoints;
  
  beginShape();
  for (let i = 0; i < numPoints + 1; i++) {
    let angle = i * angleStep + angleOffset;
    let xOffset = cos(angle) * radius;
    let yOffset = sin(angle) * radius;
    
    let noiseValue = noise(xOffset * 0.01, yOffset * 0.01);
    let xControl1 = xOffset + cos(noiseValue * TWO_PI) * noiseStrength;
    let yControl1 = yOffset + sin(noiseValue * TWO_PI) * noiseStrength;
    let xControl2 = xOffset + cos(noiseValue * TWO_PI) * noiseStrength;
    let yControl2 = yOffset + sin(noiseValue * TWO_PI) * noiseStrength;
    let xEnd = xOffset + cos(noiseValue * TWO_PI) * noiseStrength;
    let yEnd = yOffset + sin(noiseValue * TWO_PI) * noiseStrength;
    
    bezier(0, 0, xControl1, yControl1, xControl2, yControl2, xEnd, yEnd);
  }
  endShape(CLOSE);
  
  angleOffset += 0.005; // Increment the angle offset for animation
}
