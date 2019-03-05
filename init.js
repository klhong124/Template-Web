var five = require("johnny-five");
var board = new five.Board({ port: "COM7" });


board.on("ready", function() {

  var touch = new five.Button(3);
  touch.on("press", function() {
    console.log('hi')
  });
});