//Storing the line groups into an array. 
let groups = [];
let colorMiddle; // Color for the middle layer.
let colorTop; // Color variable for the top layer
let fadeAlphaMiddle = 255; // Initial alpha for middle layer color
let triangleSize;
let targetTriangleSize;

// Set the easing value to a constant
const easing = 0.2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  colorMiddle = color(random(145, 188), 145, 188, fadeAlphaMiddle);
  colorTop = color(random(188, 255), 188, 255, 150);
  colorBase = color(random(98, 126), 98, 126); // Base color without fade

  drawLineGroups(); // Initial draw of the base layer
  
  setInterval(colorTopChange, 1000); // Start the color change effect for the top layer every 1 second
  setTimeout(fadeOutMiddleLayer, 2500);  // Start the fade-out effect for the middle layer after a delay

  triangleSize = random(height);
  targetTriangleSize = triangleSize / 2;
}

function colorTopChange() {
  colorTop = color(random(188, 255), random(255), random(255), 150);
}

function fadeOutMiddleLayer() {
  if (fadeAlphaMiddle > 0) {
	fadeAlphaMiddle -= 5;
	fadeAlphaMiddle = max(fadeAlphaMiddle, 0); // Ensure alpha does not go below 0
	
	  // Update colorMiddle with the new alpha value
	colorMiddle = color(red(colorMiddle), green(colorMiddle), blue(colorMiddle), fadeAlphaMiddle); 
	
	// Schedule the next fade step
	setTimeout(fadeOutMiddleLayer, 50); // Adjust delay for fade speed
  }
}
//This class draws groups of lines using a class.
//In this class, the start points'X location, start points'Y location, end points'X location, end points'Y location, angle, number of lines in each group, color, space, strokeWeight
//are used as parameters.
class lineGroup {
  constructor(startX, startY, endX, endY, angle, numLines, color, space, strokeWeight, movementOffset) {
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;
	this.endY = endY;
	this.angle = angle;
	this.numLines = numLines;
	this.color = color;
	this.lineSpacing = space;
	this.strokeWeight = strokeWeight;
	this.movementOffset = movementOffset; // New parameter for movement
  }

  draw() {
	stroke(this.color); // Set the color of the lines.
	strokeWeight(this.strokeWeight); // Set the line thickness.
	
	// Draw each line in the group at an offset based on line spacing and angle.
	for (let i = 0; i < this.numLines; i++) {
	  // Offset calculations include oscillation effect
	  let offsetX = cos(this.angle) * this.lineSpacing * i;
	  let offsetY = sin(this.angle) * this.lineSpacing * i;
	
	  // Apply oscillation to the start and end points
	  let xOscillation = sin(frameCount * 0.05 + i * this.movementOffset) * 5; // Adjust multiplier for more/less movement
	  let yOscillation = cos(frameCount * 0.05 + i * this.movementOffset) * 5;
	
	  line(
	    this.startX + offsetX + xOscillation, this.startY + offsetY + yOscillation,
	    this.endX + offsetX + xOscillation, this.endY + offsetY + yOscillation
	  );
	}
  }
}

function draw() {
  background(10);

  for (let group of groups) {
	group.draw();
  }

  drawMiddleLayer(); // Draw middle layer with fading color
  drawTopLayer(); // Draw top layer
}

function drawLineGroups() {
  groups = [];

  let baseLayer1StartX = 0.15 * windowWidth;
  let baseLayer1StartY = 0.75 * windowHeight;
  let baseLayer1EndX = 0.544 * windowWidth;
  let baseLayer1EndY = 0.4 * windowHeight;
  let baseLayer1Angle = PI / 6.78;

  let baseLayer2StartX = 0.582 * windowWidth;
  let baseLayer2StartY = 0.325 * windowHeight;
  let baseLayer2EndX = 0.72 * windowWidth;
  let baseLayer2EndY = 0.203 * windowHeight;
  let baseLayer2Angle = PI / 6.78; 

  let baseLayer3StartX = 0.2314 * windowWidth;
  let baseLayer3StartY = 0.814 * windowHeight;
  let baseLayer3EndX = 0.83 * windowWidth;
  let baseLayer3EndY = 0.285 * windowHeight;
  let baseLayer3Angle = PI / 6.78; 

  groups.push(new lineGroup(baseLayer1StartX, baseLayer1StartY, baseLayer1EndX, baseLayer1EndY, baseLayer1Angle, 3, colorBase, 10, 3, 0.1));
  groups.push(new lineGroup(baseLayer2StartX, baseLayer2StartY, baseLayer2EndX, baseLayer2EndY, baseLayer2Angle, 3, colorBase, 10, 3, 0.2));
  groups.push(new lineGroup(baseLayer3StartX, baseLayer3StartY, baseLayer3EndX, baseLayer3EndY, baseLayer3Angle, 10, colorBase, 5, 3, 0.3));
}

function drawMiddleLayer() {
  let middleLayerX = 0.38 * windowWidth;
  let middleLayerY = 0.061 * windowHeight;
  let middleLayerWidth = 0.211 * windowWidth;
  let middleLayerHeight = 0.885 * windowHeight;

  noStroke();
  fill(colorMiddle);
  rect(middleLayerX, middleLayerY, middleLayerWidth, middleLayerHeight);
}

function drawTopLayer() {
  let topLayer1X1 = 0.398 * windowWidth;
  let topLayer1X2 = 0.166 * windowWidth;
  let topLayer1X3 = 0.398 * windowWidth;
  let topLayer1Y1 = 0.505 * windowHeight;
  let topLayer1Y2 = 0.711 * windowHeight;
  let topLayer1Y3 = 0.919 * windowHeight; 

  fill(colorTop, 20, 20); 
  stroke(170);
  strokeWeight(2);

  if (frameCount % 60 == 0) {
	targetTriangleSize = random(height / 2);
  }

 // The new triangle size is calculated by linearly interpolating between the 
  // last triangle size drawn and the target triangle size that gets updated
  // every 60 frames
  triangleSize = lerp(triangleSize, targetTriangleSize, easing);
 

  triangle(topLayer1X1, triangleSize, topLayer1X2, topLayer1Y2, topLayer1X3, topLayer1Y3);

  let topLayer2X1 = 0.558 * windowWidth;
  let topLayer2X2 = 0.585 * windowWidth;
  let topLayer2X3 = 0.558 * windowWidth;
  let topLayer2X4 = 0.636 * windowWidth;
  let topLayer2Y1 = 0.308 * windowHeight;
  let topLayer2Y2 = 0.283 * windowHeight;
  let topLayer2Y3 = 0.425 * windowHeight;
  let topLayer2Y4 = 0.357 * windowHeight; 
  quad(topLayer2X1, triangleSize, topLayer2X2, triangleSize, topLayer2X4, topLayer2Y4, topLayer2X3, topLayer2Y3);

  let topLayer3X1 = 0.558 * windowWidth;
  let topLayer3X2 = 0.558 * windowWidth;
  let topLayer3X3 = 0.725 * windowWidth;
  let topLayer3X4 = 0.666 * windowWidth;
  let topLayer3Y1 = 0.5 * windowHeight;
  let topLayer3Y2 = 0.643 * windowHeight;
  let topLayer3Y3 = 0.494 * windowHeight;
  let topLayer3Y4 = 0.403 * windowHeight;
  quad(topLayer3X1, topLayer3Y1, topLayer3X2, topLayer3Y2, topLayer3X3, topLayer3Y3, topLayer3X4, topLayer3Y4);
}
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawLineGroups();
}