/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book(
  "Javascript essential",
  "Arthur King",
  2008,
  300,
  true
)

const book2 = new Book(
  "Strange Man",
  "Steven King",
  1998,
  600,
  false
)

console.log("the first book name:", book1.name);
console.log("the second book name:", book2.name);
book2.openBook(true)
console.log(book2.bookOpen);