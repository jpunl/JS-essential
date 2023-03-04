/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
  };

const addList = function(currentPack) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
      <h1>${currentPack.name}</h1>
      <ul>
        <li>Volume: ${currentPack.volume}</li>
        <li>Color: ${currentPack.color}</li>
        <li>Number of pockets: ${currentPack.pocketNum}</li>
        <li>${addSquare2(4, 5)}</li>
        <li>${addSquare(4, 5)}</li>
        <li>${(() => 5*7)()}</li>
      </ul>
    `;
    return newArticle;
};

function addSquare(a, b) {
    function square(x) {
        return x*x;
    }
    return square(a) + square(b);
}

const addSquare2 = (a, b) => {
    const square = (x) => x*x;
    return square(a) + square(b);
}

const theArticle = addList(greenPack);
console.log(theArticle);

const main = document.querySelector("main");
main.append(addList(greenPack));


