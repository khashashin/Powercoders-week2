// particle width/height
// note that constants (values that are not supposed to change) are written in
// CAPITAL letters (by convention)
var PARTICLE_WIDTH = 5;
var PARTICLE_HEIGHT = 5;

var timer;


function startRace() {
  // this makes sure that clicking the start! button multiple times does not
  // lead to undesired behaviour
  if (timer) {
    clearInterval(timer);
  }
  // call redraw() every 10 milliseconds
  timer = setInterval(redraw, 10);
}

var x = [0, 0, 0];
var speed = [10, 1, 15];

function redraw() {


   var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.fillRect(0, 0, 600, 300);

       ctx.fillStyle = "red";
        var y = 0;
        for(var i = 0; i < 3; i++) {
          ctx.fillRect(x[i], y, 15, 15);
          x[i] += speed[i];
          if (x[i] > 600) {
              x[i] = 0;
          }
          y += 20;
        }


   }


}

// var rectX = 10;
// function redraw() {
//   var canvas = document.getElementById("myCanvas");
//   if (canvas.getContext) {
//   var ctx = canvas.getContext("2d");
//
//   ctx.fillStyle = "rgb(255, 255, 255)";
//   ctx.fillRect(rectX - 20, 3, 25, 25);
//
//   ctx.fillStyle = "rgb(255, 0, 0)";
//   ctx.fillRect(rectX, 3, 25, 25);
// }
// rectX = rectX + 3;
// if (rectX > 601) {
//   rectX = 10;
// }
// }

// /**
//  * Add a new particle with random speed
//  */
// function addParticle() {
//   // TODO
// }
//
//
// function randomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
