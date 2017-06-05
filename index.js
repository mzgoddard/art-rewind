// Import the interface to Tessel hardware
var tessel = require('tessel');

// Turn one of the LEDs on to start.
// tessel.led[2].on();

tessel.pwmFrequency(1000);

// Blink!
setInterval(function () {
  var input = process.stdin.read();
  if (input) {
    tessel.led[2].toggle();
  }
  if (input && input.indexOf('q') !== -1) {process.exit();}
  tessel.port.A.pin[5].write(0);
  tessel.port.A.pin[6].write(0);
  if (input) {
    tessel.port.A.pin[6].pwmDutyCycle(1);
  }
  // console.log(input);
  // tessel.led[2].toggle();
  // tessel.led[3].toggle();
}, 5000);

// console.log("I'm blinking! (Press CTRL + C to stop)");
