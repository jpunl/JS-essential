/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

function table(texture, size, numLeg, usable) {
    this.texture = texture;
    this.size = size;
    this.numLeg = numLeg;
    this.usable = usable
};

const table1 = new table("wood", 20, 4, true);

console.log(table1.texture);