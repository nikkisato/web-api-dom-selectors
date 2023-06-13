//Create a document object and append to the body
const divElement = document.createElement("div");
divElement.classList.add("container");
document.querySelector("body").appendChild(divElement);

//create a button and attach it within the div
const buttonElement = document.createElement("button");
buttonElement.classList.add("button");
buttonElement.innerText = "Click Me";
divElement.appendChild(buttonElement);

//Mutation Observer
//On Click change the background color of the divElement
buttonElement.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(event) {
  event.preventDefault();
  document.body.style.background = randColor();
}

//hoisting
//generates a random hex color string
//https:/www.educative.io/answers/how-to-generate-a-random-color-in-javascript
function randColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}

// need to use mutation observer API
// listen to mutation on the body
// print out the background color on the page
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
