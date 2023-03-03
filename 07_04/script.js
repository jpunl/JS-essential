/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */


let desk = ["CD", "pen", "book", "eraser", "ball", "keyboard", "mouse", "speaker"];

console.log(desk);
let temp = desk.pop();
console.log(desk);
console.log(temp);
desk.unshift(temp);
console.log(desk);


sortedDesk = [...desk].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(sortedDesk);

const itemToFind = "ball";
const foundItem = desk.find(item => item === itemToFind);
console.log(foundItem);

const indexToRemove = desk.indexOf(foundItem);
console.log(indexToRemove);

if (indexToRemove !== -1) {
    desk.splice(indexToRemove, 1);
}

console.log(desk);