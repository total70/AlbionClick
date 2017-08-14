const GK = require('global-keypress');
const robot = require("robotjs");
const gk = new GK();

gk.start();

gk.on('press', data => {

  // Toggle Up Right Click
  if(data.data === "=") {
    robot.mouseToggle("down", "right");
  }
})