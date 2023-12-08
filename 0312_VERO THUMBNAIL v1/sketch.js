// let ctx;

// function setup() {
//   createCanvas(960,540);
//   ctx = canvas.getContext('2d');
// }

// function draw() {
//   const gradient = ctx.createLinearGradient(0, 0, 960, 540);
//   gradient.addColorStop(0, "green");
//   gradient.addColorStop(0.5, "cyan");
//   // ctx.fillStyle = gradient;
//   ctx.fillStyle = gradient;


//   // strokeWeight(30);
//   noStroke();
//   rect(50,50,500,500,100);

// }


var canvas = document.getElementById("thumbnail");
var ctx = canvas.getContext("2d");

// Set rectangle and corner values
var rectX = 50;
var rectY = 50;
var rectWidth = 1080;
var rectHeight = 1080;
var cornerRadius = 50;

ctx.shadowColor = "rgba(255, 0, 0, .8)";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;


// Set faux rounded corners
ctx.lineJoin = "round";
ctx.lineWidth = 100;

// Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
const gradient = ctx.createLinearGradient(0, 0, 960, 540);
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
ctx.strokeStyle = gradient;
ctx.strokeRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);





// // You can do the same thing with paths, like this triangle
// // Remember that a stroke will make the shape a bit larger so you'll need to fiddle with the
// // coordinates to get the correct dimensions.
// // ctx.beginPath();
// // ctx.moveTo(400, 60);
// // ctx.lineTo(440, 140);
// // ctx.lineTo(360, 140);
// // ctx.closePath();
// // ctx.stroke();
// // ctx.fill();
