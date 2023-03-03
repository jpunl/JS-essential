/**
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list 
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu. 
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
  
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">Everyday Backpack</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${everydayPack.volume
  }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${everydayPack.color
  }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${everydayPack.pocketNum
  }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${everydayPack.strapLength.left
  } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${everydayPack.strapLength.right
  } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${everydayPack.lidOpen
  }</span></li>
    </ul>
  
`;


const navContent = `
      <li><a href="#">number 1</a></li>
      <li><a href="#">number 2</a></li>
      <li><a href="#">number 3</a></li>
      <li><a href="#">number 4</a></li>
      <li><a href="#">number 5</a></li>
`;

const main = document.querySelector(".maincontent");
const head = document.querySelector(".siteheader");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

const newNav = document.createElement("nav");
newNav.classList.add("NewNavi")

const navList = document.createElement("ul");
navList.innerHTML = navContent;
newNav.append(navList);


head.append(newNav);
main.append(newArticle);
