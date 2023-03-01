/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const mem = {
    volume: "16GB",
    speed: 3000
  }

const NUC = {
    name: "Windows based computer",
    CPU: "Intel",
    GPU: {
        buildIn: "Intel",
        external: "AMD"
    },
    numUSB: 4,
    numHDMI: 1,
    numUSBC: 1,
    memory: {
        firstSlot: mem,
        secondSlot: mem
    },
    powerOn: false,
    togglePower: function (powerStatus) {
      this.powerOn = powerStatus;
    },
  };
