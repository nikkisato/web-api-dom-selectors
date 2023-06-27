//On Click change the background color of the divElement
const buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(event) {
  event.preventDefault();
  const containerBody = document.querySelector(".container");
  containerBody.style.background = randColor();
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

const bodyObject = document.getElementById("section");
const bodyBackground = bodyObject.style;
const printColor = document.getElementById("printColor");

const mutation = new MutationObserver((entries) => {
  for (let entry of entries) {
    console.log(entry.target.style.background);
    // ask chris about this I can't seem to get this to Print out the color, I keep running into infinity loop
    printColor.innerText = entry.target.style.background;
  }
});

mutation.observe(bodyObject, { attributes: true, childList: true, subtree: true });

// I've run into a problem When do i know when to stop observing????
// mutation.disconnect();

// need to use mutation observer API
// listen to mutation on the body
// print out the background color on the page
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver

// This video helped https://www.youtube.com/watch?v=Mi4EF9K87aM
