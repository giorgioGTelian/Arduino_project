var five = require("johnny-five");
var Photon = require("particle-io");
var board = new five.Board({
  io: new Photon({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_PHOTON_1
  })
});

var period = process.argv[2] || 1000;

board.on("ready", function() {
  console.log("Connected");

  var moisture = new five.Sensor({
    pin: "A1",
    enabled: false
  });
  var power = new five.Pin("D5");

  moisture.on("data", function() {
    if (power.isHigh) {
      console.log("Moisture: ", this.value);
      power.low();
      moisture.disable();
    }
  });

  this.loop(period, function() {
    if (!power.isHigh) {
      power.high();
      moisture.enable();
    }
  });
});
