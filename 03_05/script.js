/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("what is goin on", backpack);
console.log("The pocket number is:", backpack.pocketNum);
console.log("The strap length L:", backpack.strapLength.left);

var query = "pocketNum"
console.log("The pocket number is:", backpack[query]);
console.log("The pocket number is:", backpack.query); //undefined